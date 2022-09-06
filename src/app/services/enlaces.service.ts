import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaEnlace } from '../interfaces/interfaces';
import { post } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class EnlacesService {

  constructor( private http: HttpClient) {}

    getEnlaces() {

      return this.http.get<RespuestaEnlace>(`${ URL }/api/alias/39825`);

  }


  /*postEnlaces(url:post): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(url);

    return this.http.post(`${URL}/api/alias`, body)


}*/

async postEnlaces(url:post) {
  let respuesta;
  const headers = { 'content-type': 'application/json'}
  const body=JSON.stringify(url);
 console.log(body);
  await this.http.post(`${URL}/api/alias`, body)
  .toPromise().then((response) => {
    respuesta = response;
  }).catch(e => console.error(e));
  return respuesta;
}

}


