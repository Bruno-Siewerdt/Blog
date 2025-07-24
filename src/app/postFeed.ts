import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'post-feed',
  templateUrl: './postFeed.html',
  styleUrl: './app.css'
})
export class PostFeed {
    constructor(private router: Router) { }
}