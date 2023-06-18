import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { DriverloginComponent } from './components/driverlogin/driverlogin.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { DriverregisterComponent } from './components/driverregister/driverregister.component';
import { UserComponent } from './components/user/user.component';
import { ForgetuserpasswordComponent } from './components/forgetuserpassword/forgetuserpassword.component';
import { UsersuccessresetComponent } from './components/usersuccessreset/usersuccessreset.component';
import { UsersuccessregisterComponent } from './components/usersuccessregister/usersuccessregister.component';
import { ForgetdriverpasswordComponent } from './components/forgetdriverpassword/forgetdriverpassword.component';
import { DriversuccessresetComponent } from './components/driversuccessreset/driversuccessreset.component';
import { DriversuccessregisterComponent } from './components/driversuccessregister/driversuccessregister.component';
import { HomeComponent } from './components/home/home.component';
import { DriverComponent } from './components/driver/driver.component';
import { UsermybookingsComponent } from './components/usermybookings/usermybookings.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SuccessbookComponent } from './components/successbook/successbook.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path:'userlogin',component:UserloginComponent},
  {path:'driverlogin',component:DriverloginComponent},
  {path:'userregister',component:UserregisterComponent},
  {path:'driverregister',component:DriverregisterComponent},
  {path:'driver',component:DriverComponent},
  {path:'user',component:UserComponent},
  {path:'forgetuserpassword',component:ForgetuserpasswordComponent},
  {path:'usersuccessreset',component:UsersuccessresetComponent},
  {path:'usersuccessregister',component:UsersuccessregisterComponent},
  {path:'forgetdriverpassword',component:ForgetdriverpasswordComponent},
  {path:'driversuccessreset',component:DriversuccessresetComponent},
  {path:'driversuccessregister',component:DriversuccessregisterComponent},
  {path:'usermybookings',component:UsermybookingsComponent},
  {path:'successbooking',component:SuccessbookComponent},
  {path:'',component:HomeComponent},
  {path:'detail',component:DetailsComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





