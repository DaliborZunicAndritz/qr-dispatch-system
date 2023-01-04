import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DataDetails } from '../models/data-details';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getDataByGuid(id: string): Observable<DataDetails> {
    return this.http.get<DataDetails>(`${this.baseApiUrl}/${id}`)
  }
}
