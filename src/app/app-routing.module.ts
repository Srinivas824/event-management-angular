import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { EquipmentdisplayComponent } from './equipmentdisplay/equipmentdisplay.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { ReviewComponent } from './review/review.component';
import { ShowEquipmentsComponent } from './show-equipments/show-equipments.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';

const routes: Routes = [{path:'',redirectTo:'/event',pathMatch:'full'},
                        {path:'login',component:LoginComponent},
                        {path:'register',component:RegisterComponent},
                        {path:'home',component:HomeComponent},
                        {path:'equipments',component:EquipmentsComponent},
                        {path:'equipmentdisplay',component:EquipmentdisplayComponent},
                        {path:'showEquipment',component:ShowEquipmentsComponent},
                        {path:'showCustomer',component:ShowcustomerComponent},
                        {path:'admin',component:AdminComponent},
                        {path:'event',component:EventDisplayComponent},
                        {path:'payment',component:PaymentComponent},
                        {path:'header',component:HeaderComponent},
                        {path:'booking',component:BookingComponent},
                        {path:'contact',component:ContactComponent},
                        {path:'review',component:ReviewComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
