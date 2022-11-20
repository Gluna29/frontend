import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proy } from '../model/proy';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyService {
  URL = 'https://apjgl.herokuapp.com/proy/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proy[]>{
    return this.httpClient.get<Proy[]>(this.URL + 'lista');
  }
  public detail(id: number):Observable<Proy>{
    return this.httpClient.get<Proy>(this. URL + `detail/${id}`);
  
  }
  public save(proy: Proy): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proy);
  }
  public update(id: number, proy: Proy): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proy)
  }
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`)
  }
}
