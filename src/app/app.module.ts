import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second/second.component';
import { LikeComponent } from './like/like.component';
import { WoweffectDirective } from './directives/woweffect.directive';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    LikeComponent,
    WoweffectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
