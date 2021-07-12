export class Show {
	constructor(rawShow: any) {
		this.title = rawShow.title;
		this.description = rawShow.description;
		this.averageRating = rawShow.description;
		this.imageUrl = rawShow.description;
	}
	title: string;
	description: string;
	averageRating: number;
	imageUrl: string;
}
