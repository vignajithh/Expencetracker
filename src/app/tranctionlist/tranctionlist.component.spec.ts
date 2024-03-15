import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranctionlistComponent } from './tranctionlist.component';

describe('TranctionlistComponent', () => {
  let component: TranctionlistComponent;
  let fixture: ComponentFixture<TranctionlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranctionlistComponent]
    });
    fixture = TestBed.createComponent(TranctionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
