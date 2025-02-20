import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListHeroesPage } from './list-heroes.page';

describe('ListHeroesPage', () => {
  let component: ListHeroesPage;
  let fixture: ComponentFixture<ListHeroesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeroesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
