import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditorjsComponent } from './editorjs';

@Component({
  selector: 'new-post',
  templateUrl: './newPost.html',
  styleUrl: './app.css',
  imports: [EditorjsComponent]
})
export class newPost {
    constructor(private router: Router) { }
}