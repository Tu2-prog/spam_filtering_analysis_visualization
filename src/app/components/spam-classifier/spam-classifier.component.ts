import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-spam-classifier',
  templateUrl: './spam-classifier.component.html',
  styleUrl: './spam-classifier.component.css'
})
export class SpamClassifierComponent {
  @ViewChild('textAreaRef') textAreaRef!: ElementRef;

  // You can expose a method to get the textarea value if needed
  getTextAreaValue(): string {
    return this.textAreaRef.nativeElement.value;
  }
}
