import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/internal/operators';
import { IReview } from '../interfaces/review.interface';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private rawReview: Array<IReview> = [
    {
      text: "The opening image of Planet Earth II contained the promise of everything to come. It was spectacular, it was beautiful, it was magical.A hot air balloon floated like a snowflake, two miles above an Alpine.",
      showId: "1",
      id: "1",
      rating: 4,
    },
    {
      text: "The opening image of Planet Earth II contained the promise of everything to come. It was spectacular, it was beautiful, it was magical.A hot air balloon floated like a snowflake, two miles above an Alpine.",
      showId: "1",
      id: "2",
      rating: 4,
    },
    {
      text: "The opening image of Planet Earth II contained the promise of everything to come. It was spectacular, it was beautiful, it was magical.A hot air balloon floated like a snowflake, two miles above an Alpine.",
      showId: "1",
      id: "3",
      rating: 4,
    }, //reviews od show 1 -> Planet Earth 2
    {
      text: "The opening image of Planet Earth II contained the promise of everything to come. It was spectacular, it was beautiful, it was magical.A hot air balloon floated like a snowflake, two miles above an Alpine.",
      showId: "2",
      id: "1",
      rating: 4,
    },
    {
      text: "The opening image of Planet Earth II contained the promise of everything to come. It was spectacular, it was beautiful, it was magical.A hot air balloon floated like a snowflake, two miles above an Alpine.",
      showId: "2",
      id: "2",
      rating: 4,
    },
    {
      text: "The opening image of Planet Earth II contained the promise of everything to come. It was spectacular, it was beautiful, it was magical.A hot air balloon floated like a snowflake, two miles above an Alpine.",
      showId: "2",
      id: "3",
      rating: 4,
    }, //review show 2
    {
      text: "The opening image of Planet Earth II contained the promise of everything to come. It was spectacular, it was beautiful, it was magical.A hot air balloon floated like a snowflake, two miles above an Alpine.",
      showId: "3",
      id: "1",
      rating: 4,
    },
    {
      text: "The opening image of Planet Earth II contained the promise of everything to come. It was spectacular, it was beautiful, it was magical.A hot air balloon floated like a snowflake, two miles above an Alpine.",
      showId: "3",
      id: "2",
      rating: 4,
    }, //review show 3
    {
      text: "The opening image of Planet Earth II contained the promise of everything to come. It was spectacular, it was beautiful, it was magical.A hot air balloon floated like a snowflake, two miles above an Alpine.",
      showId: "4",
      id: "1",
      rating: 4,
    },
    {
      text: "The opening image of Planet Earth II contained the promise of everything to come. It was spectacular, it was beautiful, it was magical.A hot air balloon floated like a snowflake, two miles above an Alpine.",
      showId: "4",
      id: "2",
      rating: 4,
    }, // review show 4
    {
      text: "The opening image of Planet Earth II contained the promise of everything to come. It was spectacular, it was beautiful, it was magical.A hot air balloon floated like a snowflake, two miles above an Alpine.",
      showId: "5",
      id: "1",
      rating: 4,
    },
    {
      text: "The opening image of Planet Earth II contained the promise of everything to come. It was spectacular, it was beautiful, it was magical.A hot air balloon floated like a snowflake, two miles above an Alpine.",
      showId: "5",
      id: "2",
      rating: 4,
    }, //review show 5

  ];

  private get review(): Array<Review> {
		return this.rawReview.map((rawReview : IReview) => {
			return new Review(rawReview);
		});
	}

  private getReviews(): Observable<Array<Review>> {
		return of(this.review).pipe(delay(1200)); 
  } // f-ja za fetchanje svih reviewa


  public getShowReviews(id: string): Observable<Array<Review>> {
    return this.getReviews().pipe
    (map((reviews) => reviews.filter((review: Review)=> review.showId === id) || null));
    }; 




}
