import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient.model';
import { PatientserviceService } from '../patientservice.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  @Input() patient?: Patient;
  @Input() index?: number;

  @Input() header?: string;
  // header: string[] = [
  //   'Name',
  //   'Address',
  //   'Gender',
  //   'Mobile No',
  //   'Doctor Name',
  //   'Covid Status',
  // ];
  constructor(private router: Router, private ps: PatientserviceService) {}

  ngOnInit(): void {
    console.log(this.patient);
  }
  onEdit() {
    console.log('edit ');
    console.log(this.index);
    this.router.navigate(['admin/patient-edit', this.index]);
  }
  onDelete() {
    console.log('delete ');
    this.ps.deletePost(this.index);
    console.log(this.index);
  }
}
