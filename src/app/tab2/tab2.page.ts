import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  estados: any[] = [
    {
      username: 'Jaimito el cartero',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      time: 'Hace 2 horas'
    },
    {
      username: 'Ana',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      time: 'Hace 1 hora'
    },
    {
      username: 'Luis',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      time: 'Hace 30 minutos'
    },
    {
      username: 'Sofia',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      time: 'Hace 15 minutos'
    },
    
      {
        username: 'Jaimito el cartero',
        avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
        time: 'Hace 2 horas',
        date: '2023-10-05',
      },
      {
        username: 'Ana',
        avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
        time: 'Hace 1 hora',
        date: '2023-10-05',
      },
      {
        username: 'Luis',
        avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
        time: 'Hace 30 minutos',
        date: '2023-10-05',
      },
  ];

  constructor() {}

  ngOnInit() {}
}