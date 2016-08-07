/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AddComponent } from './add.component';

describe('Component: Add', () => {
  it('should create an instance', () => {

    let router;
    let dservice;
    beforeAll(()=>{
      router = jasmine.createSpyObj('router',['nagivate']);
      dservice = jasmine.createSpyObj('dservice',['']).and;
    });

    let component = new AddComponent(router,dservice);
    expect(component).toBeTruthy();
  });
});
