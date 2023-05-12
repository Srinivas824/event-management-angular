import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncrDecrServiceService } from '../encr-decr-service.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
    fullName:String;
    mobileNumber:String;
    address:String;
    email:String;
    password:String;

    constructor(private service :EventService,private router:Router,private EncrDecr: EncrDecrServiceService){
      this.fullName="";
      this.mobileNumber= "";
      this.address="";
      this.email="";
      this.password="";
      
    }
    ngOnInit(): void {
      var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', 'password@123456');
      var decrypted = this.EncrDecr.get('123456$#@$^@1ERF', encrypted);
     
      console.log('Encrypted :' + encrypted);
      console.log('Encrypted :' + decrypted);
    
  }
  registrationformsubmit(registrationform:any){
    this.service.registerUser(registrationform).subscribe();
    alert("register sucessfully");
    this.router.navigate(['login']);
      console.log(registrationform);
    
    
  }

}
