import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';

@Injectable()
export class DService{
  headers:Headers=new Headers();
  constructor(private http:Http){
    this.headers.append("Content-Type","application/json");
  }
  getIngredient(query:string,successCallback,errorCallback){
    this.http.get('/ingredients/'+query,{headers:this.headers}).subscribe((response) => {
      successCallback(response.json());
    }, (response) =>{
      errorCallback(response);
    });
  }





}
