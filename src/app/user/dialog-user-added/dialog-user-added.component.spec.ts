import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserAddedComponent } from './dialog-user-added.component';

describe('DialogUserAddedComponent', () => {
  let component: DialogUserAddedComponent;
  let fixture: ComponentFixture<DialogUserAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUserAddedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUserAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
