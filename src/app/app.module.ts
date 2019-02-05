import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstantComponent } from './components/constant/constant.component';
import { EnumComponent } from './components/enum/enum.component';
import { InterFaceComponent } from './components/inter-face/inter-face.component';
import { DecoratorComponent } from './components/decorator/decorator.component';
import { EnumToArrayPipe }  from './components/enum/pipe.enum';

@NgModule({
  declarations: [
    AppComponent,
    ConstantComponent,
    EnumComponent,
    InterFaceComponent,
    DecoratorComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
