import { Injectable } from '@angular/core';
import { IRawShow } from '../interfaces/rawShow.interface';
import { Show } from './show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
private	rawData: Array<IRawShow> = [
		{
			title: 'Planet Earth 2',
			description:
				"Wildlife documentary series with David Attenborough, beginning with a look at the remote islands which offer sanctuary to some of the planet's rarest creatures, to the beauty of cities, which are home to humans, and animals..",
			average_rating: 5,
      id: '1',
			image_url:
				'https://i1.wp.com/www.travindy.com/wp-content/uploads/2018/04/Planet-Earth-Article-Image.jpg?fit=1920%2C1920&ssl=1',
		},
		{
			title: 'Planet Earth 2',
			description:
				"Wildlife documentary series with David Attenborough, beginning with a look at the remote islands which offer sanctuary to some of the planet's rarest creatures, to the beauty of cities, which are home to humans, and animals..",
			average_rating: 3,
      id: '2',
			image_url:
				'https://i1.wp.com/www.travindy.com/wp-content/uploads/2018/04/Planet-Earth-Article-Image.jpg?fit=1920%2C1920&ssl=1',
		},
		{
			title: 'Planet Earth 2',
			description:
				"Wildlife documentary series with David Attenborough, beginning with a look at the remote islands which offer sanctuary to some of the planet's rarest creatures, to the beauty of cities, which are home to humans, and animals..",
			average_rating: 2,
      id: '3',
			image_url:
				'https://i1.wp.com/www.travindy.com/wp-content/uploads/2018/04/Planet-Earth-Article-Image.jpg?fit=1920%2C1920&ssl=1',
		},
    {
			title: 'Planet Earth 2',
			description:
				"Wildlife documentary series with David Attenborough, beginning with a look at the remote islands which offer sanctuary to some of the planet's rarest creatures, to the beauty of cities, which are home to humans, and animals..",
			average_rating: 2,
      id: '4',
			image_url:
				'https://i1.wp.com/www.travindy.com/wp-content/uploads/2018/04/Planet-Earth-Article-Image.jpg?fit=1920%2C1920&ssl=1',
		},
    {
			title: 'Planet Earth 2',
			description:
				"Wildlife documentary series with David Attenborough, beginning with a look at the remote islands which offer sanctuary to some of the planet's rarest creatures, to the beauty of cities, which are home to humans, and animals..",
			average_rating: 4.5,
      id: '5',
			image_url:
				'https://i1.wp.com/www.travindy.com/wp-content/uploads/2018/04/Planet-Earth-Article-Image.jpg?fit=1920%2C1920&ssl=1',
		},

	];

  public getShows(): Array<Show> {
    return this.rawData.map((rawShow: IRawShow) => {
			return new Show(rawShow);
		});
  } //funkcija za fetchanje svih showova

   public getTopRatedShows(): Array<Show> {
    return this.getShows().filter((show: Show) => show.averageRating > 4)
		}; //f-ja za fetchanje showova sa ratingom > 4

  public getShow(id: string): Show | undefined {
    return this.getShows().find((show: Show) => show.id === id);
    };
  
}
