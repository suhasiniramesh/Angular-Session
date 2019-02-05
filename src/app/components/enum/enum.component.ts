import { Component} from '@angular/core';
import { Role } from './role.enum';

enum Tristate{
  false=0,True =1,Unknown
}
enum Response {
  No = 0,
  Yes = 1,
}
@Component({
  selector: 'app-enum',
  templateUrl: './enum.component.html',
  styleUrls: ['./enum.component.css'],
  host: {'class': 'col-lg-12'}
})
export class EnumComponent {

 roleEnum = Role; }

 //Real Time
/*  function f(obj: { Employee: string }) {
  var a = obj.Employee; 
  console.log(a);
  return a;
}

f(Role); */

 //Reverse Mapping 
/* let a = Role.Admin;
console.log(a);
let nameOfA = Role[a];
console.log(nameOfA); */


//Const Enums
/* let a  = Tristate.false;
window.alert(a); */


/* function respond(recipient: string, message: Response): void {
 console.log(recipient + message);
}

respond("Princess Caroline", Response.Yes) */