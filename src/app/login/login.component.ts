import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EventService } from '../event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  customer:any;
constructor(private service :EventService,private router:Router){
  this.email ='';
  this.password='';
  this.getAllCustomers();
}
getAllCustomers(){
  this.service.getAllCustomers().subscribe((data :any)=>{
    this.customer=data;
    console.log("this user data "+data);
  })
}
  ngOnInit(): void {

  }
  loginFormSubmit(loginForm: any){
    //console.log(loginForm)
    if(loginForm.email == 'admin@gmail.com' && loginForm.password == 'admin123'){
       this.service.setUserLoggedIn();
      this.router.navigate(['admin']);
    //  Swal.fire('Thank You','Login Success','success')
    } else{
      for(let c of this.customer){
        if(loginForm.email==c.email && loginForm.password==c.password){
          this.service.setUserLoggedIn();
          this.router.navigate(['header']);
      //    Swal.fire('Thank You','Login Success','success')
        }
      };
    }
  }

}
