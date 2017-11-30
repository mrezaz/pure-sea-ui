import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navLinks = [{
    path: '/home',
    label: 'Home'
  }, {
    path: '/cnn',
    label: 'CNN'
  }, {
    path: '/twitter',
    label: 'Twitter'
  }];
}
