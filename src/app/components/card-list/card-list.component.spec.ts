import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';
import { ICard } from '../../models/card';
import { CardInfoComponent } from '../card-info/card-info.component';
import { AddReviewComponent } from '../add-review/add-review.component';
import { CardReviewComponent } from '../card-review/card-review.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), ReactiveFormsModule],
      declarations: [
        CardListComponent,
        CardInfoComponent,
        AddReviewComponent,
        CardReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
