/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { DService } from './d.service';

describe('Service: D', () => {
  beforeEach(() => {
    addProviders([DService]);
  });

  it('should ...',
    inject([DService],
      (service: DService) => {
        expect(service).toBeTruthy();
      }));
});
