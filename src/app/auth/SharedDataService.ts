import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
     accessToken: string = 'test pour token';

    constructor() {}
  
    setAccessToken(token: string): void {
      this.accessToken = token;
    }
  
    getAccessToken(): string {
      return this.accessToken;
    }
}

