import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {

  technologies = [
    {
      name: 'Angular',
      color: 'text-red-600',
    },
    {
      name: 'Tailwind CSS',
      color: 'text-blue-700',
    },
    {
      name: 'TypeScript',
      color: 'text-gray-500'
    },
    {
      name: 'PokéAPI',
      color: 'text-red-900'
    }
  ];

}
