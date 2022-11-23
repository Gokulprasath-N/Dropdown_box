import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { DropDownBoxComponent } from './drop-down-box/drop-down-box.component';

const text:Routes=[ {path:"text",component:TextComponent}, 
{path:"drop-down-box",component:DropDownBoxComponent}]

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    DropDownBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forChild(text)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
