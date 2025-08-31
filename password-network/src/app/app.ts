import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './views/home/home';

@Component({
  selector: 'home',
  imports: [],
  templateUrl: './views/home/home.html',
  styleUrl: './views/home/home.scss'
})
export class App {
  protected readonly title = signal('password-network');
}
