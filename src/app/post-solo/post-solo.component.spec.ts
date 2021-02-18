import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSoloComponent } from './post-solo.component';

describe('PostSoloComponent', () => {
  let component: PostSoloComponent;
  let fixture: ComponentFixture<PostSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
