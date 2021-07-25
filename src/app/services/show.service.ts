import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/internal/operators';
import { IRawShow } from '../interfaces/rawShow.interface';
import { AuthService } from './auth.service';
import { Show } from './show.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
	constructor(private http: HttpClient) {}


  public getShows(): Observable<Array<Show>> {

		return this.http.get<{body: { shows: Array<IRawShow> } }>('https://tv-shows.infinum.academy/api/v1/docs/index.html#tag/Tv-Shows/paths/~1shows/get', ).pipe(
			map((response) => {
				return response.body.shows.map((rawShowData: IRawShow) => new Show(rawShowData));
			})
		)
  } //funkcija za fetchanje svih showova

   public getTopRatedShows(): Observable<Array<Show>> {
    return this.getShows().pipe(map((shows) => shows.filter((show: Show)=> show.averageRating > 4)));
		}; //f-ja za fetchanje showova sa ratingom > 4

  public getShow(id: string): Observable<Show | null> {
    return this.getShows().pipe(map((shows) => shows.find((show: Show)=> show.id === id) || null));
    }; //zasto dohvacamo sve pa filtriramo?
  
}

