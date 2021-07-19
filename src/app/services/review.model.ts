import { IReview } from "../interfaces/review.interface";


export class Review {
public	constructor(review: IReview) {
		this.text = review.text;
		this.showId = review.showId;
		this.reviewId = review.reviewId;
		this.rating = review.rating;
	}
	text: string;
	showId: string;
	reviewId: string;
	rating: number;
}
