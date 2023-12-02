import { Component } from '@angular/core';
import { SpamClassifierComponent } from './components/spam-classifier/spam-classifier.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spam_filtering_analysis_visualization';
  onConfirmClick(spamClassifier: SpamClassifierComponent): void {
    if (spamClassifier) {
      const textAreaValue = spamClassifier.getTextAreaValue();
      console.log('Text in the textarea:', textAreaValue);
      // Perform any other actions with the text as needed
    }
  }
}
