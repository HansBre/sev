import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Drink,Ingredient,IngredientMeasure} from '../containers';
import {DService} from '../services/d.service';
import {MeasureComponent} from '../measure';

@Component({
  moduleId: module.id,
  selector: 'app-add',
  templateUrl: 'add.component.html',
  styleUrls: ['add.component.css']
})
export class  AddComponent implements OnInit{
  ingredients:string[];
  added:string[]=[];
  //remove testString
  testString:string ="Test";
  search:string;
  image:File;
  measureSelections:IngredientMeasure[];
  constructor(private router:Router, private dservice:DService){

  }

  ngOnInit(){

  }
  onReset(){
    this.search="";
  }
  addIngredient(ingredient:string){
    this.added.push(ingredient);
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
    for(var item of this.measureSelections){
      if(event.name == item.name && event.measure == item.measure){
        return;
      }else if(event.name == item.name){
        item.measure = event.measure;
        return;
      }else{
        this.measureSelections.push(event);
      }

    }

  }


  onPost(){
    if(!this.image){
      console.error("Image field empty");
      return;
    }
    console.log(this.ingredients);
    let formData = new FormData();
    let xhr:XMLHttpRequest = new XMLHttpRequest();
    formData.append("ingredients",this.added);
    formData.append("avatar",this.image,"image.jpg");
    console.log(this.image.name);
    xhr.open('POST','/addDrink/');
    xhr.send(formData);
  }


}
