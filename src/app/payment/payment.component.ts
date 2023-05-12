import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 
  constructor(private service : EventService){
  }
    
  ngOnInit(): void {
  }

  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "2500000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Elegant Event",
    "description": "Test Transaction",
    "image": "httservice://mazzainnovation.com/wp-content/uploads/2015/02/phyto-logo.png",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "httservice://goodluckhours.com/payment-successful/",
    "prefill": {
       
    },
    "notes": {
        "address": "Head Office Address, serviceR PrimeTowers, Survey No 126P, DLF Road, Beside DLF Cyber City, Gachibowli, Hyderabad, Telangana 500032."
    },    
    "theme": {
        "color": "#3399cc"
    }
};
rzp1:any;
pay(){
  
  this.rzp1 = new this.service.nativeWindow.Razorpay(this.options);
  this.rzp1.open(); 
    
}

}