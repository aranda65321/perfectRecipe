import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallMenuItemComponent } from './small-menu-item.component';

describe('SmallMenuItemComponent', () => {
  let component: SmallMenuItemComponent;
  let fixture: ComponentFixture<SmallMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallMenuItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
