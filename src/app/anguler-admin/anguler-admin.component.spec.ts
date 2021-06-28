import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulerAdminComponent } from './anguler-admin.component';

describe('AngulerAdminComponent', () => {
  let component: AngulerAdminComponent;
  let fixture: ComponentFixture<AngulerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulerAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
