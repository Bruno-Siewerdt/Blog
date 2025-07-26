import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'post',
  templateUrl: './post.html',
  styleUrl: './app.css',
  imports: [MatButtonModule, MatCardModule]
})
export class Post {
  description = input("");
  imageUrl = input("");
  userImageUrl = input("");
  userName = input("");
  userDescription = input("");
  imageAlt = input("");
}