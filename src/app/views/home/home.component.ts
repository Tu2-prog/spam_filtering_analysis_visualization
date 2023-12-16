import { Component, Injectable } from '@angular/core';
import { SpamClassifierComponent } from '../../components/spam-classifier/spam-classifier.component';
import axios from 'axios';
import { apiEndpoints } from '../../endpoints/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
@Injectable()
export class HomeComponent {
  constructor() {}

  onConfirmClick(spamClassifier: SpamClassifierComponent): void {
    if (spamClassifier) {
      const textAreaValue = spamClassifier.getTextAreaValue();
      const request = {
        text: textAreaValue
      }
      const url = apiEndpoints + "/classify";
      axios.post(url, request)
        .then((response: any) => {
          // Hier kannst du auf die Vorhersage zugreifen
          const prediction = response.data.prediction;
          console.log("Vorhersage:", prediction);
        })
        .catch((error) => {
          console.error("Fehler:", error);
        });
    }
  }
}
