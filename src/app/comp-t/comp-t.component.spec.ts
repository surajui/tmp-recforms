import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTComponent } from './comp-t.component';

describe('CompTComponent', () => {
  let component: CompTComponent;
  let fixture: ComponentFixture<CompTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
