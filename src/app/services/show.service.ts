import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { IRawShow } from '../interfaces/rawShow.interface';
import { Show } from './show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
	constructor(private http: HttpClient) {}


  public getShows(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IRawShow> } >('https://tv-shows.infinum.academy/shows').pipe(
			map((response) => {
				return response.shows.map((rawShowData: IRawShow) => new Show(rawShowData));

			}),
		);
  } 

   public getTopRatedShows(): Observable<Array<Show>> {
    return this.http.get<{ shows: Array<IRawShow>}>('https://tv-shows.infinum.academy/shows/top_rated').pipe(
			map((response) => {
				return response.shows.map((rawShowData: IRawShow) => new Show(rawShowData));
			})
		)
		}; 

  public getShow(id: string): Observable<Show> {
		return this.http.get<{show: IRawShow}>(`https://tv-shows.infinum.academy/shows/${id}`).pipe(
			map((response) => {
				return new Show(response.show);
			})
		)
	}; 
  
}

