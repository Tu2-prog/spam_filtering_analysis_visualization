import { Component, Injectable } from '@angular/core';
import { SpamClassifierComponent } from '../../components/spam-classifier/spam-classifier.component';
import axios from 'axios';
import { apiEndpoint } from '../../endpoints/api';
import { storageEndpoint } from '../../endpoints/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
@Injectable()
export class HomeComponent {
  selectedOption: string = "0";

  constructor() {}

  onConfirmClick(spamClassifier: SpamClassifierComponent): void {
    if (spamClassifier) {
      const textAreaValue = spamClassifier.getTextAreaValue();
      const request = {
        content: textAreaValue,
        classifier: this.selectedOption
      }
      const classifyUrl = apiEndpoint + "/classify";
      const storeUrl = storageEndpoint + "/create";
      console.log(request)
      axios.post(classifyUrl, request)
        .then((response) => {
          // Hier kannst du auf die Vorhersage zugreifen
          const prediction = response.data.prediction;
          console.log("Prediction:", prediction);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      axios.post(storeUrl, request)
      .then(() => {
        console.log("Storing was succesfull");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  }
}
