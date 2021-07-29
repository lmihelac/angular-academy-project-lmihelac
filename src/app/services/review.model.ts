import { IReview } from "../interfaces/review.interface";


export class Review {
public	constructor(review: IReview) {
		this.text = review.text;
		this.show_id = review.showId;
		this.id = review.id;
		this.rating = review.rating;
	}
	public text: string;
	public show_id: string;
	public id: string;
	public rating: number;
}
