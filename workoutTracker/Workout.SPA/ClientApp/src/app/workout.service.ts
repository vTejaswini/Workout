import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './Category';

@Injectable()
export class workoutservice {
  private _url = 'http://localhost:11749/api/category';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this._url);
  }

  getById(id: string): Observable<Category> {
    return this.http.get<Category>(this._url + `/${id}`);
  }

  save(cate: Category) {
    return this.http.post(this._url, cate);
  }

  update(cate: Category) {
    return this.http.put(this._url, cate);
  }

  delete(id: number) {
    return this.http.delete(this._url + `/${id}`);
  }

}
