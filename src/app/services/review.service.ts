import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { IReview } from '../interfaces/review.interface';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) {}


  public getReviews(): Observable<Array<Review>> {
		return this.http.get<{ reviews: Array<IReview> } >('https://tv-shows.infinum.academy/shows/{show_id}/reviews').pipe(
			map((response) => {
				return response.reviews.map((rawReviewData: IReview) => new Review(rawReviewData));
			}),
		);
  } 



  public getShowReviews(id: string): Observable<Array<Review>> {
    return this.getReviews().pipe
    (map((reviews) => reviews.filter((review: Review)=> review.show_id === id) || null));
    }; 




}
