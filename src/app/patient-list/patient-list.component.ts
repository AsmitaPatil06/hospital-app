import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient.model';
import { PatientserviceService } from '../patientservice.service';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  header: string[] = [
    'Name',
    'Address',
    'Mobile No',
    'Gender',

    'Doctor Name',
    'Covid Status',
    'Admitted On',
  ];

  listOfPatient: Patient[] = [
    // new Patient(
    //   'Nature',
    //   'Lorem ipsum dolor ',
    //   'Female',
    //   1234567,
    //   'Avinash',
    //   'positive',
    //   new Date()
    // ),
    // new Patient(
    //   'Nature',
    //   'Lorem ipsum dolor ',
    //   'Female',
    //   1234567,
    //   'Avinash',
    //   'positive',
    //   new Date()
    // ),
    // new Patient(
    //   'Nature',
    //   'Lorem ipsum dolor ',
    //   'Female',
    //   1234567,
    //   'Avinash',
    //   'positive',
    //   new Date()
    // ),
    // new Patient(
    //   'Nature',
    //   'Lorem ipsum dolor ',
    //   'Female',
    //   1234567,
    //   'Avinash',
    //   'positive',
    //   new Date()
    // ),
    // new Patient(
    //   'Nature',
    //   'Lorem ipsum dolor ',
    //   'Female',
    //   1234567,
    //   'Avinash',
    //   'positive',
    //   new Date()
    // ),
    // new Patient(
    //   'Nature',
    //   'Lorem ipsum dolor ',
    //   'Female',
    //   1234567,
    //   'Avinash',
    //   'positive',
    //   new Date()
    // ),
  ];

  constructor(private ps: PatientserviceService) {}

  ngOnInit(): void {
    this.listOfPatient = this.ps.getPosts();
  }
}
