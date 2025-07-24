import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'new-post',
  templateUrl: './newPost.html',
  styleUrl: './app.css'
})
export class newPost {
    constructor(private router: Router) { }
}