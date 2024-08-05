import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBlogComponent } from './open-blog.component';

describe('OpenBlogComponent', () => {
  let component: OpenBlogComponent;
  let fixture: ComponentFixture<OpenBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
