import { TestBed } from '@angular/core/testing';

import { categoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: categoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(categoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
