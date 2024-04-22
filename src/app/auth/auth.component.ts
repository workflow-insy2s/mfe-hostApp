import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakServiceService } from '../keycloak-service.service';
import { LoginInfo } from './class/LoginInfo';
import Swal from 'sweetalert2';

import {SharedDataService } from './SharedDataService'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  ngOnInit(): void {
    console.log('succes')
      }

  constructor(private router: Router, private keycloakService: KeycloakServiceService, private sharedDataService: SharedDataService ) {}

  loginInfo: LoginInfo = new LoginInfo('','');

/*   login(): void {
    console.log('data login:', this.loginInfo.username ,this.loginInfo.password )
    this.keycloakService.login(this.loginInfo.username ,this.loginInfo.password).subscribe(
      response => {
        this.router.navigate(['/mfe-rule']);
        // Traitement de la réponse ici (stockage du token, redirection, etc.)
        console.log('Token d\'accès: ', response.access_token);
       // this.router.navigate(['/mfe1']);
        

        
      },
      error => {
        // Gestion des erreurs
        console.error('Erreur lors de la connexion : ', error);
      }
    );
  } */


  login2(): void {
    console.log('Username:', this.loginInfo.username);
    console.log('Password:', this.loginInfo.password);
    this.keycloakService.login(this.loginInfo.username ,this.loginInfo.password).subscribe(
      response => {
        
/*      ******service partage****   this.sharedDataService.setAccessToken(response.access_token); // Stockez le jeton d'accès dans le service partagé
       console.log('Token d\'accès service partage: ', this.sharedDataService.getAccessToken()) */

       const token = response.access_token ;

       // Stockez le jeton dans localStorage
       localStorage.setItem('token', token);
       console.log('Token localStorage HostAPP',localStorage);

      


        this.router.navigate(['/mfe-rule']);
        // Traitement de la réponse ici (stockage du token, redirection, etc.)
        //this.SharedService.setToken(response.access_token);
       // console.log('Token SheradService: ', this.SharedService.getToken());


        console.log('Token d\'accès: ', response.access_token);
       // this.router.navigate(['/mfe1']);
      },
      error => {
        // Gestion des erreurs
        console.error('Erreur lors de la connexion : ', error);
        Swal.fire('Nom d utilisateur ou mot de passe incorrect ', '', 'error');
        //window.location.reload();


      }
    );
  }

  loadd() {
   this.router.navigate(['/mfe1']);
  }

}
