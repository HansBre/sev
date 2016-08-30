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
  description:string;
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
    //Can't have the same ingredient in a drink more than once.
    for(let item of this.added){
      if(item == ingredient) return;
    }
    this.added.push(ingredient);
    this.search ="";
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
  }

  onMeasureRemoval(event:string){
    console.log("onMeasureRemoval called with "+event)
    var i = 0;
    for(i = 0;i<this.added.length;i++){
      if(this.added[i]==event){
        this.added.splice(i,1);
      }
    }
    for(i = 0;i<this.measureSelections.length;i++){
      if(this.measureSelections[i].name==event){
        console.log("removing "+ this.measureSelections.splice(i,1));
        return;
      }
    }
  }

  onEdidtMeasure(event:IngredientMeasure){
    console.log("onEdidtMeasure fired as "+event.name+" with "+event.measure);
    if(this.measureSelections.length==0){
      this.measureSelections.push(event);
      console.log("L80:first item");
      return;
    }
    for(var i=0;i<this.measureSelections.length;i++){
      if(this.measureSelections[i].name == event.name){
          this.measureSelections[i].measure == event.measure ? this.measureSelections[i] = this.measureSelections[i] : this.measureSelections[i] = event;
          console.log("L86:Updating value on exising item, total of "+this.measureSelections.length+" in array");
          return;
      }
    }
    this.measureSelections.push(event);
    console.log("L91:assuming this is a new item total of "+this.measureSelections.length+" in array");
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
      console.log("names "+ iNames);
      console.log("measures "+ iMeasures);
      formData.append("name",this.drinkName);
      formData.append("description",this.description);
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
