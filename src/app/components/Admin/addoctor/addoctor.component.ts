import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Class/Doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-addoctor',
  templateUrl: './addoctor.component.html',
  styleUrls: ['./addoctor.component.css']
})
export class AddoctorComponent implements OnInit {
  doctor: Doctor = new Doctor();
  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }
  addNewDoctor(){
    this.doctorService.saveDoctors(this.doctor).subscribe(data =>{
      console.log(data);
    }, (error) => console.log(error));
  }
  onSubmit(){
  
    this.addNewDoctor();
    console.log(this.doctor)

  }
  onCancel(){

  }

}
