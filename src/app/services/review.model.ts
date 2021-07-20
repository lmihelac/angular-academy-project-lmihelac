import { IReview } from "../interfaces/review.interface";


export class Review {
public	constructor(review: IReview) {
		this.text = review.text;
		this.showId = review.showId;
		this.id = review.id;
		this.rating = review.rating;
	}
	public text: string;
	public showId: string;
	public id: string;
	public rating: number;
}
