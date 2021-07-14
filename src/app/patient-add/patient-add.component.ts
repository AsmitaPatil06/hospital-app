import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Patient } from '../patient.model';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css'],
})
export class PatientAddComponent implements OnInit {
  index: number = 0;
  AddForm: FormGroup;
  editMode = false;
  constructor(
    private formBuilder: FormBuilder,
    private ps: PatientserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let n = '';
    let a = '';
    let g;
    let m;
    let d = '';
    let cs = '';
    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        console.log(params['index']);
        this.index = params['index'];
        console.log(this.ps.getPost(this.index));

        const editpost = this.ps.getPost(this.index);

        n = editpost.name;
        a = editpost.address;
        g = editpost.gender;
        m = editpost.mobile;
        d = editpost.doctorName;
        cs = editpost.covid;

        this.editMode = true;
      }
    });
    this.AddForm = this.formBuilder.group({
      name: [n, Validators.required],
      address: [a, Validators.required],
      gender: [g, Validators.required],
      mobile: [m, Validators.required],
      doctorName: [d, Validators.required],
      covidStatus: [cs, Validators.required],
    });
    // this.AddForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   address: ['', Validators.required],
    //   gender: ['', Validators.required],
    //   mobile: ['', Validators.required],
    //   doctorName: ['', Validators.required],
    //   covidStatus: ['', Validators.required],
    // });
  }

  onSubmit() {
    console.log(this.AddForm.value);
    const nm = this.AddForm.value.name;
    const add = this.AddForm.value.address;
    const mob = this.AddForm.value.mobile;
    const gen = this.AddForm.value.gender;
    const doc = this.AddForm.value.doctorName;
    const status = this.AddForm.value.covidStatus;

    //Ready with object
    const patient: Patient = new Patient(
      nm,
      add,
      gen,
      mob,
      doc,
      status,
      new Date()
    );

    if (this.editMode) {
      this.ps.updatePost(this.index, patient);
    } else {
      this.ps.addPost(patient);
    }
    // console.log(patient);
    // this.ps.addPost(patient);
    this.router.navigate(['admin/list']);
  }
}
