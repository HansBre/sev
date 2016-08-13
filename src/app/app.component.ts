import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';
import {DService} from './d.service';
import {HTTP_PROVIDERS} from '@angular/http';
import {MeasureComponent} from './measure';
import {LayoutComponent} from './layout';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ROUTER_DIRECTIVES,MeasureComponent,LayoutComponent],
  providers:[DService,HTTP_PROVIDERS]
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
