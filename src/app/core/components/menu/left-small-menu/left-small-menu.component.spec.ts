import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSmallMenuComponent } from './left-small-menu.component';

describe('LeftSmallMenuComponent', () => {
  let component: LeftSmallMenuComponent;
  let fixture: ComponentFixture<LeftSmallMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSmallMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSmallMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
