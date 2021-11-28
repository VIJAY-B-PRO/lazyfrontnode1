import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Register } from '../utility/register';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public http: HttpClient, public service: ServiceService) {
    this.isRegisters = this.service.serviceedit
   }


  isRegisters: Register = new Register


  ngOnInit(): void {
  }

  add() {

    this.http.post('http://localhost:8080/add', this.isRegisters).subscribe((x) =>
      console.log(x)

    )
    this.isRegisters = new Register


  }

}
