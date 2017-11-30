import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class TwitterService {
  constructor(
    private http: HttpClient
  ) { }

  public fetch(displayName: string) {
    return this.http.get(`${environment.backend_address}/twitter?displayname=${displayName}`);
  }
}
