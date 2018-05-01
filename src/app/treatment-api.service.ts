import { Injectable } from '@angular/core';
import { TreatmentFacility } from './treatment-facility';
import { Category } from './category';
import { Service } from './service';
import { CATEGORIES } from './mock-categories';
import { SERVICE_NAMES } from './mock-services';
import { TREATMENT_FACILITIES } from './mock-treatment-facilities';

@Injectable()
export class TreatmentApiService {

  constructor() { }

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getServices(): Service[] {
    return [];
  }

  getServiceNames(): String[] {
    return SERVICE_NAMES;
  }

  findTreatmentLocations(): TreatmentFacility[] {
    return TREATMENT_FACILITIES;
  }
}
