import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>{{name}}
   - My salary is {{salary}}</h1>
   <p>Profile: {{job}}</p>
   <p>{{address.street}} {{address.city}}, {{address.state}}</p>
   `,
})
export class UserComponent  {

 name = 'Jyotsna';
 salary = '15,00,000/- 15 LPA'; 
 job = 'Fullstack Web Developer';
 address = {
 	street: '2704, FF, Sector-46',
 	city: 'Gurugram',
 	state: 'HR'
 }
}
