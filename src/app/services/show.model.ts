import { IRawShow } from "../interfaces/rawShow.interface";

export class Show {
public	constructor(rawShow: IRawShow) {
		this.title = rawShow.title;
		this.description = rawShow.description;
		this.averageRating = rawShow.average_rating;
		this.imageUrl = rawShow.image_url;
		this.id = rawShow.id;
	}
	public title: string;
	public description: string;
	public averageRating: number;
	public imageUrl: string;
	public id: string;
}
