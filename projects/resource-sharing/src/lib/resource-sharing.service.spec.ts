import { TestBed } from '@angular/core/testing';

import { ResourceSharingService } from './resource-sharing.service';

describe('ResourceSharingService', () => {
  let service: ResourceSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
