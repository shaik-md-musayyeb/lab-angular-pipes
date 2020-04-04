import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-angular-pipes';
  date:Date =  new Date;
  currency: number = 100;
  name: string = 'ProGrad';

  stringPipe(stringInput: string): void {
    this.name = stringInput;
  }

}
