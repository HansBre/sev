//Data cointainer classes

export class Ingredient{
  constructor(private description:string,private name:string,private measure:number){}
  getDescription(){
    return this.description;
  }
  getName(){
    return this.name;
  }
}

export class Drink{
  constructor(public name:string,public ingredient:Ingredient[]){

  }


}

export class IngredientMeasure{
  measure:string;
  options:string[];
  constructor(public name:string){
    this.options = ['Dash','float','top','1cl','2cl','3cl','4cl','5cl','6cl','7cl','8cl'];
  }
}
