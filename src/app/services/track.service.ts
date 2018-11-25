import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS, URL_DATA } from '../config/config';
import { map, catchError } from 'rxjs/operators';
import { Tracks } from '../models/tracks.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  track: Tracks[];
  constructor(
    public http: HttpClient
  ) { }

  cargarPopularTracks() {

    const url = URL_SERVICIOS + 'tracks' + URL_DATA + '&boost=popularity_month';

    return this.http.get(url)
          .pipe( map( (resp: any) => {

              return resp.results;
          }),
          catchError ((err) => {
              return throwError(err);
          }));
  }

  cargarTracks( album_name: string ) {
    const url = URL_SERVICIOS + 'tracks' + URL_DATA + '&artist_name=' + album_name;

    return this.http.get(url)
          .pipe( map( (resp: any) => {
              return resp.results;
          }),
          catchError ((err) => {
              return throwError(err);
          }));
  }

}
