export class Show {
	constructor(rawShow: any) {
		this.title = rawShow.title;
		this.description = rawShow.description;
		this.averageRating = rawShow.average_rating;
		this.imageUrl = rawShow.image_url;
	}
	title: string;
	description: string;
	averageRating: number;
	imageUrl: string;
}
