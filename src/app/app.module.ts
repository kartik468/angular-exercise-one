import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsPhonePipe } from './pipes/us-phone.pipe';
import { MaxLengthDirective } from './directives/max-length.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsPhonePipe,
    MaxLengthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
