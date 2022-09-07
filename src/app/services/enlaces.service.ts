import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaEnlace } from '../interfaces/interfaces';
import { post } from '../interfaces/interfaces';
import { Observable } from 'rxjs';


const URL = environment.url;
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

@Injectable({
  providedIn: 'root'
})
export class EnlacesService {

  constructor( private http: HttpClient) {}

    getEnlaces() {
      return this.http.get<RespuestaEnlace>(`${ URL }/api/alias/53343`);
  }


 postEnlaces(url:post): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(url);
    return this.http.post(`${URL}/api/alias`, body,httpOptions)
}

}


