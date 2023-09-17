import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //Si se desea separar el html en un solo archivo, si no usar template y colocarlo aquí. 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appStories';
}
