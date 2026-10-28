import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, Navbar, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('Angular Dex');

  ngOnInit() {

    // Check if favorites local storage exist
    let storage = localStorage.getItem('favorites');

    // Make one if it doesn't exist
    if (!storage) {
      let favorites: string[] = [];
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }
}
