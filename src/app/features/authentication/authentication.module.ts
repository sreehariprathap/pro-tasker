import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
  exports: [SharedModule],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
