import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DService} from '../d.service';
import {IngredientMeasure} from '../classes';
import {MeasureComponent} from '../measure'

@Component({
  moduleId: module.id,
  selector: 'app-add',
  templateUrl: 'add.component.html',
  styleUrls: ['add.component.css'],
  directives:[MeasureComponent]
})
export class  AddComponent implements OnInit{
  ingredients:string[];
  added:string[]=[];
  //remove testString
  testString:string ="Tests";
  drinkName:string;
  search:string;
  image:File;
  measureSelections:IngredientMeasure[]=[];

  constructor(private router:Router, private dservice:DService){

  }

  ngOnInit(){

  }

  onReset(){
    this.search="";
  }

  addIngredient(ingredient:string){
    this.added.push(ingredient);
    console.log("Added "+ingredient+" to array.")
  }

  onTyped(){
    if(this.search){
      this.dservice.getIngredient(this.search,(ingredients) =>{
        this.ingredients = ingredients;
      },(error) => {
        alert("Error");
      });
    }
  }

  onChange(event){
    this.image = event.target.files[0];
    alert("Called" + this.image.name);
  }

  onEdidtMeasure(event:IngredientMeasure){
    console.log("onEdidtMeasure fired as "+event.name+" with "+event.measure)
    for(var item of this.measureSelections){
      if(event.name == item.name && event.measure == item.measure){
        console.log("Measure selection has not been updated");
        return;
      }else if(event.name == item.name){
        item.measure = event.measure;
        console.log("Measure selection has been updated with a new value");
        return;
      }
    } if(this.measureSelections.length == 0){
      console.log("Measure selection has been updated with an initial item");
      this.measureSelections.push(event);
    }
  }

  onPost(){
    if(!this.image){
      console.error("Image field empty");
      return;
    }
    //Be sure to not block rendering.
    setTimeout(()=>{
      console.log(this.ingredients);
      let formData = new FormData();
      let xhr:XMLHttpRequest = new XMLHttpRequest();
      let iNames:string[] = [];
      let iMeasures:string[] = [];
      for(let item of this.measureSelections){
        iNames.push(item.name);
        iMeasures.push(item.measure);
      }
      console.log(iNames);
      console.log(iMeasures);
      formData.append("name",this.drinkName);
      formData.append("iNames",iNames);
      formData.append("iMeasures",iMeasures);
      formData.append("avatar",this.image,"image.jpg");
      console.log(this.image.name);
      xhr.open('POST','/addDrink/');
      xhr.send(formData);
      console.log(this.measureSelections[0].measure);
    },0);

  }
}
