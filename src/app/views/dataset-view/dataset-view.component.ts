import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { storageEndpoint } from '../../endpoints/api';

@Component({
  selector: 'app-dataset-view',
  templateUrl: './dataset-view.component.html',
  styleUrl: './dataset-view.component.css'
})
export class DatasetViewComponent implements OnInit {
  items: any[] = [];

  ngOnInit(): void {
      const storeUrl = storageEndpoint;
      axios.get(storeUrl)
        .then((response) => {
          const data = response.data;
          this.items = data;
          console.log(this.items);
        })
        .catch((error)=> {
          console.log(error);
        });
  }
}
