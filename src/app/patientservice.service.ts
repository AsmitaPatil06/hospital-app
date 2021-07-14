import { Injectable } from '@angular/core';
import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientserviceService {
  //go = false;
  un: String;
  pass: String;
  listOfPatient: Patient[] = [
    new Patient(
      'Nature',
      'Lorem ipsum dolor ',
      'Female',
      1234567,
      'Avinash',
      'positive',
      new Date()
    ),
    new Patient(
      'Subhash',
      'Lorem ipsum dolor ',
      'Female',
      1234567,
      'Avinash',
      'positive',
      new Date()
    ),
    new Patient(
      'Hiren',
      'Lorem ipsum dolor ',
      'Female',
      1234567,
      'Avinash',
      'positive',
      new Date()
    ),
    new Patient(
      'Nandini',
      'Lorem ipsum dolor ',
      'Female',
      1234567,
      'Avinash',
      'positive',
      new Date()
    ),
    new Patient(
      'Rohit',
      'Lorem ipsum dolor ',
      'Female',
      1234567,
      'Avinash',
      'positive',
      new Date()
    ),
    new Patient(
      'Aaliya',
      'Lorem ipsum dolor ',
      'Female',
      1234567,
      'Avinash',
      'positive',
      new Date()
    ),
  ];
  constructor() {}

  getPosts() {
    // this.go = true;
    return this.listOfPatient;
  }
  getPost(index: number) {
    return this.listOfPatient[index];
  }
  deletePost(index: number) {
    this.listOfPatient.splice(index, 1);
  }
  addPost(patient: Patient) {
    this.listOfPatient.push(patient);
  }
  updatePost(index: number, patient: Patient) {
    this.listOfPatient[index] = patient;
  }
  // isAuthenticated(): boolean {
  //   if (this.un == 'Asmi' && this.pass == 'patil') {
  //     return true;
  //   }

  //   return false;
  // }
}
