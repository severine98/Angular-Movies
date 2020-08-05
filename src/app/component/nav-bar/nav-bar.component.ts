import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isOpen = false;

  constructor() { }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

}
