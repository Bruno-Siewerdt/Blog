import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-posts',
  templateUrl: './userPosts.html',
  styleUrl: './app.css'
})
export class UserPosts {
    constructor(private router: Router) { }
}