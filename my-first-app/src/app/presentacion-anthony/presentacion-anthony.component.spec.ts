import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionAnthonyComponent } from './presentacion-anthony.component';

describe('PresentacionAnthonyComponent', () => {
  let component: PresentacionAnthonyComponent;
  let fixture: ComponentFixture<PresentacionAnthonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentacionAnthonyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentacionAnthonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
