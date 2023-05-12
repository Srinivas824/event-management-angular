import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

declare var jQuery:any;
@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.component.html',
  styleUrls: ['./showcustomer.component.css']
})
export class ShowcustomerComponent implements OnInit {
  customer:any;
  editObject: any;
  constructor(private service :EventService){
    //this.customer="";
    this.editObject={fullName:'',mobileNumber:'',address:'',email:'',password:''}
  }
  ngOnInit(): void {
   this.service.getAllCustomers().subscribe((data:any)=>{
    this.customer=data;
    console.log(data);
   });
  }
  
  deleteCust(cid:number){
    this.service.deleteCust(cid).subscribe((data:any)=>{
      console.log(data);
      const i = this.customer.findIndex((element:any)=>{
        return element.cid===cid;
      })
      this.customer.splice(i,1);

    });


  }
  showEditPopup(customer:any){
    this.editObject==customer;
    jQuery('#custModel').modal('show');
  }


  updateCust(){
    this.service.updateCustomer(this.editObject).subscribe();
    console.log(this.editObject);
  }


}
