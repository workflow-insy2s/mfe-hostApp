import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeycloakServiceService {

  constructor(private http : HttpClient) { }


  url='http://localhost:8082/api/keycloak/auth/login'
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.url, { username, password });
  }
}
