import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageListingComponent } from './voyage-listing.component';

describe('VoyageListingComponent', () => {
  let component: VoyageListingComponent;
  let fixture: ComponentFixture<VoyageListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyageListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyageListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
