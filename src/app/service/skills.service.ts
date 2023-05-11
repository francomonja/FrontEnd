import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = 'https://backendmonja.onrender.com/skill/';
  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpclient.get<Skills[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Skills>{
    return this.httpclient.get<Skills>(this.URL + `detail/${id}`);
  }

  public save(skill: Skills): Observable<any>{
    return this.httpclient.post<any>(this.URL + 'create', skill);
  }

  public update(id: number, skill: Skills): Observable<any>{
    return this.httpclient.put<any>(this.URL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpclient.delete<any>(this.URL + `delete/${id}`);
  }
}
