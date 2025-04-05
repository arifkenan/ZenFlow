import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
 
import { InputComponent } from './components/input/input.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, InputComponent, SidebarComponent], // ✅ ButtonComponent çıkarıldı
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
