import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakServiceService } from '../keycloak-service.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css']
})
export class VerificationCodeComponent implements OnInit{
  ngOnInit(): void {
    console.log('succes')
      }
      constructor(private router: Router, private keycloakService: KeycloakServiceService ) {}
      email:any = ''
      code:any =""


verfierCode(email: string, code :string): void {
        this.keycloakService.VerificationCode(email,code)
          .subscribe(
            response => {
              // Traitez la réponse ici
              console.log('Réponse de l\'API:', response);
              this.router.navigate(['/restPasswordComponent']);
            },
            error => {
                      // Gestion des erreurs
                      if (error && error.error && error.error.text && error.error.text.includes('Code valide')) {
                        const errorMessage = error.error.text;
                        Swal.fire('Code valide', '', 'success');
                        this.router.navigate(['/restPasswordComponent']);

                      } 
                      else {
                        Swal.fire('Erreur', 'Une erreur inattendue s\'est produite', 'error');
                      }
            }
  );
      }
  
}
