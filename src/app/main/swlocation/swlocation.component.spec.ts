import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwlocationComponent } from './swlocation.component';

describe('SwlocationComponent', () => {
  let component: SwlocationComponent;
  let fixture: ComponentFixture<SwlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwlocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
