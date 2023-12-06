import { Component } from '@angular/core';
import { SpamClassifierComponent } from '../../components/spam-classifier/spam-classifier.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  onConfirmClick(spamClassifier: SpamClassifierComponent): void {
    if (spamClassifier) {
      const textAreaValue = spamClassifier.getTextAreaValue();
      console.log('Text in the textarea:', textAreaValue);
      // Perform any other actions with the text as needed
    }
  }
}
