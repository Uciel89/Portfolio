import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../../models/db_models/estudio';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class EstudioService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/mode_edit/';

  /*===/ Métodos HTTP /===*/
  public getEstudio(): Observable<Estudio[]> {
    return this.http.get<Estudio[]>(this.url + 'estudio');
  }

  createEstudio(estudio: Estudio, id:number): Observable<any> {
    return this.http.post<Estudio>(this.url + `crear_estudio/${id}`, estudio, httpOptions);
  }

  deleteEstudio(id: number): Observable<any> {
    return this.http.delete<Estudio>(this.url + `eliminar_estudio/${id}`);
  }

  updateEstudio(estudio: Estudio): Observable<any> {
    return this.http.put<any>(this.url + `editar_estudio`, estudio, httpOptions);
  }
}
