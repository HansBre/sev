import { Component,Input,EventEmitter,Output, OnInit } from '@angular/core';
import {IngredientMeasure} from '../classes';

@Component({
  moduleId: module.id,
  selector: 'app-measure',
  templateUrl: 'measure.component.html',
  styleUrls: ['measure.component.css']
})
export class MeasureComponent implements OnInit{
  @Input() nameInput;
  @Output('selection') measureSelection = new EventEmitter<IngredientMeasure>();
  @Output('removal') measureRemoval = new EventEmitter<string>();
  options:string[];
  selected:string;
  test:string ="Test";
  measure:IngredientMeasure;
  constructor(){



  }

  onSelect(event:string){
    console.log();
    console.log("onSelect()@MeasureComponent fired");
    console.log("Trying to use "+event);
    this.measure.measure = event;
    this.measureSelection.emit(this.measure);

  }

  ngOnInit(){
    this.selected ="Measure";
    this.measure = new IngredientMeasure(this.nameInput);
    this.options = this.measure.options;
    this.measure.measure ="Dash";
    this.measureSelection.emit(this.measure);
  }

  removeIngredient(){
    this.measureRemoval.emit(this.nameInput);
  }


}
