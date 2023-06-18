import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { DriverloginComponent } from './components/driverlogin/driverlogin.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { DriverregisterComponent } from './components/driverregister/driverregister.component';
import { UserComponent } from './components/user/user.component';
import { DriverComponent } from './components/driver/driver.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ForgetuserpasswordComponent } from './components/forgetuserpassword/forgetuserpassword.component';
import { UsersuccessresetComponent } from './components/usersuccessreset/usersuccessreset.component';
import { UsersuccessregisterComponent } from './components/usersuccessregister/usersuccessregister.component';
import { DriversuccessregisterComponent } from './components/driversuccessregister/driversuccessregister.component';
import { DriversuccessresetComponent } from './components/driversuccessreset/driversuccessreset.component';
import { ForgetdriverpasswordComponent } from './components/forgetdriverpassword/forgetdriverpassword.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UsermybookingsComponent } from './components/usermybookings/usermybookings.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SuccessbookComponent } from './components/successbook/successbook.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    DriverloginComponent,
    UserregisterComponent,
    DriverregisterComponent,
    UserComponent,
    DriverComponent,
    ForgetuserpasswordComponent,
    UsersuccessresetComponent,
    UsersuccessregisterComponent,
    DriversuccessregisterComponent,
    DriversuccessresetComponent,
    ForgetdriverpasswordComponent,
    HomeComponent,
    UsermybookingsComponent,
    NotfoundComponent,
    SuccessbookComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
