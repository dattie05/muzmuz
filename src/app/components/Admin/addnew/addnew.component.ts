import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Class/Doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  doctor: Doctor = new Doctor();

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  addNewDoctor(){
    this.doctorService.saveDoctors(this.doctor).subscribe(data =>{
      console.log(data);
    }, (error) => console.log(error));
  }

}
