import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstantComponent } from './components/constant/constant.component';
import { EnumComponent } from './components/enum/enum.component';
import { InterFaceComponent } from './components/inter-face/inter-face.component';
import { DecoratorComponent } from './components/decorator/decorator.component';

const routes: Routes = [
 { path: 'constant', component: ConstantComponent },
 { path: 'enum', component: EnumComponent },
 { path: 'interface', component: InterFaceComponent },
 { path: 'decorator', component: DecoratorComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
