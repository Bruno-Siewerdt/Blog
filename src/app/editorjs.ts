import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "editorjs",
  templateUrl: "./editorjs.html"
})
export class EditorjsComponent implements OnInit {
  
  editor: any;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const { default: EditorJS } = await import('@editorjs/editorjs');
        const { default: Header  } = await import('@editorjs/header');
        const { default: List } = await import('@editorjs/list');
        const { default: Quote } = await import("@editorjs/quote");
        const { default: SimpleImage } = await import("@editorjs/simple-image");
        const { default: Marker } = await import("@editorjs/marker");
        const { default: Link } = await import("@editorjs/link");
        const { default: Embed } = await import("@editorjs/embed");
        
        this.editor = new EditorJS({
          holder: 'editor-js',
          tools: {
            header: Header,
            list:  List,
            quote: Quote,
            image: SimpleImage,
            marker: Marker,
            embed: Embed,
            link: Link
          }
        });
      } catch (error) {
        console.error('Failed to load EditorJS', error);
      }
    }
  }
}