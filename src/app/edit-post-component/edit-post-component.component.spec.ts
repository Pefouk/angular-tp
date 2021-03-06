import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostComponentComponent } from './edit-post-component.component';

describe('EditPostComponentComponent', () => {
  let component: EditPostComponentComponent;
  let fixture: ComponentFixture<EditPostComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPostComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
