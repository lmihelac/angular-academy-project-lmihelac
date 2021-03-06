import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/internal/operators';
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
				'https://m.media-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg',
		},
		{
			title: 'Band of Brothers',
			description:
				"The story of Easy Company of the U.S. Army 101st Airborne Division, and their mission in World War II Europe, from Operation Overlord, through V-J Day.",
			average_rating: 3,
      id: '2',
			image_url:
				'https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_FMjpg_UX1000_.jpg',
		},
		{
			title: 'Breaking Bad',
			description:
				"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
			average_rating: 2,
      id: '3',
			image_url:
				'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
		},
    {
			title: 'Chernobyl',
			description:
				"In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
			average_rating: 2,
      id: '4',
			image_url:
				'https://i.pinimg.com/originals/9a/23/83/9a2383b8f04594a392ff5244e7b0ce28.jpg',
		},
    {
			title: 'The Wire',
			description:
				"The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
			average_rating: 4.5,
      id: '5',
			image_url:
				'https://upload.wikimedia.org/wikipedia/en/4/4e/The_Wire_-_Season_3.jpg',
		},

	];

	private get shows(): Array<Show> {
		return this.rawData.map((rawShow : IRawShow) => {
			return new Show(rawShow);
		});
	}

  public getShows(): Observable<Array<Show>> {
		return of(this.shows).pipe(delay(1000));
  } //funkcija za fetchanje svih showova

   public getTopRatedShows(): Observable<Array<Show>> {
    return this.getShows().pipe(map((shows) => shows.filter((show: Show)=> show.averageRating > 4)));
		}; //f-ja za fetchanje showova sa ratingom > 4

  public getShow(id: string): Observable<Show | null> {
    return this.getShows().pipe(map((shows) => shows.find((show: Show)=> show.id === id) || null));
    }; //zasto dohvacamo sve pa filtriramo?
  
}

