import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardService } from 'src/app/card.service';
import { ICard } from 'src/app/models/card';
import { IReview } from 'src/app/models/review';
import { ReviewService } from 'src/app/review.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnDestroy {
  cards: ICard[];
  reviews: IReview[];
  isShowReview = false;
  selectedCardTitle = '';
  selectedCardId: number;
  subscription = null;
  constructor(
    private cardService: CardService,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.subscription = this.cardService.cards$.subscribe(cards => {
      this.cards = cards;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      // this.subscription.unsubscription();
    }
  }

  applyCreditCard(id: number) {
    console.log(id);
  }

  showReview(card: ICard) {
    this.isShowReview = !this.isShowReview;
    this.selectedCardId = card.id;
    this.selectedCardTitle = card.title + '\'s Reviews';
    if (this.isShowReview) {
      this.reviewService.getCardReviews(card.id).subscribe(revs => {
        this.reviews = revs;
      });
    } else {
      this.reviews = [];
    }
  }

  onAddReview(id: number) {
    this.reviewService.getCardReviews(id).subscribe(revs => {
      this.reviews = revs;
    });
  }
}
