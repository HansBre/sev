import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-drinks',
  templateUrl: 'drinks.component.html',
  styleUrls: ['drinks.component.css']
})
export class DrinksComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateAdd(){
    this.router.navigate(['/add']);
  }
}
