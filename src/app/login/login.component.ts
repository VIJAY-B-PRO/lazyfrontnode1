import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Url } from 'src/environments/environment';
import { Login } from '../utility/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit(): void {

  }


  isLogins: Login = new Login

  login() {

    

    this.http.post('http://localhost:8080/login',this.isLogins).subscribe((x:any) =>{

     if(x.value == 'admin' ){

      this.router.navigate(['admin']);

     }else if (x.value == 'user'){

       this.router.navigate(['user']);


     }

      console.log(x.status,x.value)


    
    
  })
   
    // this.isLogins = new Login


    
  }

}
