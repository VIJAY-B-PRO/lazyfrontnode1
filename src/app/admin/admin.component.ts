import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  alldetail: any = []

  constructor(public http: HttpClient, public service: ServiceService,public router:Router) { }

  isData:boolean =false

  ngOnInit(): void {

  }

  alldata(){
    this.isData = true
    this.http.get('http://localhost:8080/getdetails').subscribe((a) => {

     this.alldetail = a

    })
  }

  delete(id:any){

    this.http.delete(`http://localhost:8080/delete/${id}`).subscribe(()=>{})
    this.alldata()

  }

  edit(id:any){

    const isedit = this.alldetail.find((x:any) => x.id == id);
    console.log(isedit)

    this.service.serviceedit = isedit
    

    
    this.router.navigate(['signup'])
     

  }



}
