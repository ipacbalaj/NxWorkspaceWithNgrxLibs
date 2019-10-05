import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { App1LibsLibAModule } from '@exampleworkspace/app1-libs/lib-a';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, App1LibsLibAModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
