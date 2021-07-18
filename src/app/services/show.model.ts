import { IRawShow } from "../interfaces/rawShow.interface";

export class Show {
public	constructor(rawShow: IRawShow) {
		this.title = rawShow.title;
		this.description = rawShow.description;
		this.averageRating = rawShow.average_rating;
		this.imageUrl = rawShow.image_url;
		this.id = rawShow.id;
	}
	title: string;
	description: string;
	averageRating: number;
	imageUrl: string;
	id: string;
}
