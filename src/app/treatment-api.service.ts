import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { TreatmentFacility } from './treatment-facility';
import { Category } from './category';
import { Service } from './service';
import { CATEGORIES } from './mock-categories';
import { SERVICE_NAMES } from './mock-services';
import { TREATMENT_FACILITIES } from './mock-treatment-facilities';

@Injectable()
export class TreatmentApiService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getServices(): Observable<Service[]> {
    return of([]);
  }

  getServiceNames(): Observable<String[]> {
    return of(SERVICE_NAMES);
  }

  findTreatmentLocations(): Observable<TreatmentFacility[]> {
    return of(TREATMENT_FACILITIES);
  }
}
