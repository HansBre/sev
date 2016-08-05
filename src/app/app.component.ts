import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';
import {DService} from './d.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ROUTER_DIRECTIVES],
  providers:[DService]
})
export class AppComponent {
  title = 'app works!';
  constructor(private router:Router){
    this.title = "nja";
  }

  onHome(){
    this.router.navigate(['/drinks']);
  }
}
