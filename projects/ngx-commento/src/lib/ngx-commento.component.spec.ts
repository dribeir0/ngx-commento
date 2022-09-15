import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCommentoComponent } from './ngx-commento.component';

describe('NgxCommentoComponent', () => {
  let component: NgxCommentoComponent;
  let fixture: ComponentFixture<NgxCommentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCommentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCommentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
