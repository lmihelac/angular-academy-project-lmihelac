import { IReview } from "../interfaces/review.interface";


export class Review {
public	constructor(review: IReview) {
		this.text = review.text;
		this.showId = review.showId;
		this.reviewId = review.reviewId;
		this.rating = review.rating;
	}
	public text: string;
	public showId: string;
	public reviewId: string;
	public rating: number;
}
