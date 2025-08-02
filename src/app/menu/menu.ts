import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-menu',
  templateUrl: './menu.html',
  styleUrl: '../app.css'
})
export class Menu {
    constructor(private router: Router) { }

    items = signal([
        {id: 1, href:'/',         title: 'Home'},
        {id: 2, href:'/posts',    title: 'Posts'},
        {id: 3, href:'/newPost',  title: 'New Post'}
    ]);

    changePage(href: string) {
        this.router.navigate([href]);
    };
}