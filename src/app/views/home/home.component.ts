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
  is_spam: boolean | undefined;
  constructor() {}

  onConfirmClick(spamClassifier: SpamClassifierComponent): void {
    if (spamClassifier) {
      const textAreaValue = spamClassifier.getTextAreaValue();
      const request = {
        content: textAreaValue,
        classifier: this.selectedOption,
        result: ""
      }
      const classifyUrl = apiEndpoint + "/classify";
      const storeUrl = storageEndpoint + "/create";
      console.log(request)
      axios.post(classifyUrl, request)
        .then((response) => {
          const prediction = response.data.prediction;
          console.log("Prediction:", prediction);
          this.is_spam = (prediction == 1)
          if(!this.is_spam){
            request.result = "This is a ham";
          }
          axios.post(storeUrl, request);
        })
        .catch((error) => {
          window.alert(error);
        });
    }
  }
}
