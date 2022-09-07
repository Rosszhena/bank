import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaEnlace, link } from '../interfaces/interfaces';
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

      return this.http.get<RespuestaEnlace>(`${ URL }/api/alias/69170`);

  }


 postEnlaces(url:post): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(url);
    return this.http.post(`${URL}/api/alias`, body,httpOptions)
}
/*
async postEnlaces(url:post) {
  let respuesta;
  const body=JSON.stringify(url);
 console.log(body);
  await this.http.post(`${URL}/api/alias`, body, httpOptions)
  .toPromise().then((response) => {
    respuesta = response;
    console.log(respuesta)
  }).catch(e => console.error(e));
  return respuesta;
}
/*
 postEnlaces(url:post) {
  const body=JSON.stringify(url);
 console.log("body+++++++" +body);
   this.http.post(`${URL}/api/alias`, body, httpOptions)
  .subscribe(results=>{
    console.log("hola" + results.toString)
  })
}*/
}


