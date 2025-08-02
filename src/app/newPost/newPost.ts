import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditorjsComponent } from '../editorjs/editorjs';

@Component({
  selector: 'new-post',
  templateUrl: './newPost.html',
  styleUrl: '../app.css',
  imports: [EditorjsComponent]
})
export class NewPost {
    constructor(private router: Router) { }
}