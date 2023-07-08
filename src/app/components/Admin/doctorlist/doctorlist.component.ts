import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/Class/Doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-dotorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {
  doctors!: Doctor[];
  orgDoctors:any[]=[];

  filterForm:FormGroup=new FormGroup({
    search:new FormControl("",[Validators.required])
  });
  constructor(private doctor:DoctorService) { }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
 
  ngOnInit(): void {
    this.fetchDoctors()
  }
  // filterDoctor(){
  //   this.doctor=this.orgDoctors.filter(res=>res.dumpName.includes(this.filterForm.controls["search"].value));
  // }
  fetchDoctors(){
    // correct
    this.doctor.getDoctorList().subscribe(data  =>{
      this.doctors = data;

    }, (error) => console.log(error));
    
    
  }
 
}
