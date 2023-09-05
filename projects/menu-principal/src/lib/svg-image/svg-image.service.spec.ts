import { TestBed } from '@angular/core/testing';

import { SvgImageService } from './svg-image.service';

describe('SvgImageService', () => {
  let service: SvgImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
