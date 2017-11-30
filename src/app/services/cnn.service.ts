import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CnnService {
  constructor(
    private http: HttpClient
  ) { }

  public search(keyword: string) {
    return this.http.get(`${environment.backend_address}/cnn?search=${keyword}`);
  }
}
