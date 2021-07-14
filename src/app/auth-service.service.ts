import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from './patientservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  // isAuthenticated: false;
  // constructor(private ps: PatientserviceService, private router: Router) {}
  // canActivate() {
  //   if (this.ps.isAuthenticated()) {
  //     return true;
  //   } else {
  //     window.alert("You don't have permission to view this page");
  //     this.router.navigate(['main']);
  //     return false;
  //   }
  // }
}
