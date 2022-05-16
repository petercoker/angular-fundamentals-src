import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  firstName: string;
  lastName: string;
  fullName: string = 'Peter Coker';
  age: number = 28;
  legalAge: number = 18;
  isLegalOld: boolean = true;
  logo: string = 'img/logo.png';
 
  constructor() {
    this.firstName = 'Peter';
    this.lastName = 'Coker';
  }
}
