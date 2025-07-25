import {  HostListener, Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'post-feed',
  templateUrl: './postFeed.html',
  styleUrl: './app.css',
  imports: [MatButtonModule, MatCardModule]
})
export class PostFeed {
  constructor(private router: Router) { }
  columnCount = signal(2);
}

