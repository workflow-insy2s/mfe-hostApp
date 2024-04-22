import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakServiceService } from '../keycloak-service.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit{
 
  ngOnInit(): void {
    console.log('succes')
      }
  
    constructor(private router: Router, private keycloakService: KeycloakServiceService ) {}

    email:any = ''

    rechercherCompte(email: string): void {
      this.keycloakService.rechercher(email)
        .subscribe(
          response => {
            // Traitez la réponse ici
            console.log('Réponse de l\'API:', response);
            this.router.navigate(['/verificationCodeComponent']);
          },
          error => {
  // Gérez l'erreur ici
  console.error('Erreur lors de l\'appel à l\'API:', error);
  console.log('Contenu complet de l\'erreur:', error);

  // Vérifiez si error.error.text est défini avant d'accéder à ses propriétés
  if (error && error.error && error.error.text && error.error.text.includes('pas de compte avec email :')) {
    const errorMessage = error.error.text;
    Swal.fire('Erreur', errorMessage, 'error');
  } else if(error && error.error && error.error.text && error.error.text.includes('Code de vérification envoyé Vérifiez votre email :')){
    const errorMessage = error.error.text;
    Swal.fire('Code valide', errorMessage, 'success');
    this.router.navigate(['/verificationCodeComponent']);
  }
  else {
    Swal.fire('Erreur', 'Une erreur inattendue s\'est produite', 'error');
  }
}
);
    }




   
}
