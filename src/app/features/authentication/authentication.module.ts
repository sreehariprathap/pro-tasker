import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule, AuthenticationRoutingModule],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
