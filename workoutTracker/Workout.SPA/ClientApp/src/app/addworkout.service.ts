import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { workout } from './workout';

@Injectable()
export class addworkout {
  private _url = 'http://localhost:11749/api/Workout';
  constructor(private http: HttpClient) { }

  getAll(): Observable<workout[]> {
    return this.http.get<workout[]>(this._url);
  }

  getById(id: string): Observable<workout> {
    return this.http.get<workout>(this._url + `/${id}`);
  }

  save(cate: workout) {
    return this.http.post(this._url, cate);
  }

  update(cate: workout) {
    return this.http.put(this._url, cate);
  }

  delete(id: number) {
    return this.http.delete(this._url + `/${id}`);
  }

}
