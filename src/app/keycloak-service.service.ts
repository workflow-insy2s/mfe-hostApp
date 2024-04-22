import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeycloakServiceService {

  constructor(private http : HttpClient) { }


  url='http://localhost:8082/api/keycloak/auth'
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.url+'/login', { username, password });
  }


  rechercher(email: string): Observable<any> {
    return this.http.get<any>(`${this.url}/findAccount/${email}`);
  }




  VerificationCode(email: string, code: string): Observable<any> {
    const url2 = `${this.url}/findAccount/verificationCode?email=${email}&code=${code}`;
    return this.http.post<any>(url2, {});
  }

  restPassword(email: string, password: string): Observable<any> {
    const url2 = `${this.url}/findAccount/restPassword?email=${email}&password=${password}`;
    return this.http.post<any>(url2, {});
  }
}
