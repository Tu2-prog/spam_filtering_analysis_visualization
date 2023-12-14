import { Component, Injectable } from '@angular/core';
import { SpamClassifierComponent } from '../../components/spam-classifier/spam-classifier.component';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
@Injectable()
export class HomeComponent {
  onConfirmClick(spamClassifier: SpamClassifierComponent): void {
    if (spamClassifier) {
      const textAreaValue = spamClassifier.getTextAreaValue();
      const request = {
        text: spamClassifier.getTextAreaValue()
      }
      console.log('Text in the textarea:', textAreaValue);
      console.log('Environment Variable ', environment.apiURL);
      console.log('Request Body: ', request);
    }
  }
}
