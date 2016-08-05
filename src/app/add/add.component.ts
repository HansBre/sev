import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-add',
  templateUrl: 'add.component.html',
  styleUrls: ['add.component.css']
})
export class AddComponent implements OnInit {
  addTitle = "Working adding title";
  constructor() { }

  ngOnInit() {
  }

}
