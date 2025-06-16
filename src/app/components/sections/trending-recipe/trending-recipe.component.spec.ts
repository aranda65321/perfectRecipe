import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingRecipeComponent } from './trending-recipe.component';

describe('TrendingRecipeComponent', () => {
  let component: TrendingRecipeComponent;
  let fixture: ComponentFixture<TrendingRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendingRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
