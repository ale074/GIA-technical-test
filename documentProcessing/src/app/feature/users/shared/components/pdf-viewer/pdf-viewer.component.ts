import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements AfterViewInit {

  @ViewChild('viewer') viewerRef: ElementRef;

  constructor() { }
  ngAfterViewInit(): void {
    WebViewer({
      path: 'src/assets/lib',
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'
    }, this.viewerRef.nativeElement).then(instance => {
      
    })
  }


}
