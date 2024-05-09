import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  public reactiveMenu: MenuItem[] = [
    { title: 'Basico', route: './reactive/basic' },
    { title: 'Dinamicos', route: './reactive/dynamic' },
    { title: 'Switches', route: './reactive/switches' },
  ];

  public authMenu: MenuItem[] = [{ title: 'Registro', route: './auth' }];
}
