import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditMainComponent } from './dialog-edit-main.component';

describe('DialogEditMainComponent', () => {
  let component: DialogEditMainComponent;
  let fixture: ComponentFixture<DialogEditMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
