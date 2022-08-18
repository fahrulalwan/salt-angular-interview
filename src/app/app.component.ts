import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  private static URL: string = 'https://api.themoviedb.org/3';

  private static AuthHeader: HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU1MjY0YjlmMTQ0YzdmYjc4YTVlMGRhOTM1YjYwNCIsInN1YiI6IjYyZjlkNDQ0OWE2NDM1MDA5ODc5YjRmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q_fAu7jLAQsyZbQzdGZ8RBbkASFAX3ftYvotPr3g8sk',
  });

  account$: Observable<any> = this.http.get(AppComponent.URL + '/account', {
    headers: AppComponent.AuthHeader,
  });

  movies$: Observable<any> = this.http
    .get(AppComponent.URL + '/discover/movie', {
      headers: AppComponent.AuthHeader,
    })
    .pipe(tap(console.log));

  constructor(private http: HttpClient) {}
}
