import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Hands-on Workshop';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/books', icon: 'view_list', title: 'Books' },
    { path: '/routes', icon: 'arrow_outward', title: 'Routes' },
    { path: '/pipe-directive', icon: 'filter_alt', title: 'Pipe & Directive' },

  ];
}
