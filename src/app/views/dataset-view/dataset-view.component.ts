import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { storageEndpoint } from '../../endpoints/api';
import { Item } from '../../model';

@Component({
  selector: 'app-dataset-view',
  templateUrl: './dataset-view.component.html',
  styleUrl: './dataset-view.component.css'
})
export class DatasetViewComponent implements OnInit {
  items: Item[] = [];

  ngOnInit(): void {
      const storeUrl = storageEndpoint;
      axios.get(storeUrl)
        .then((response) => {
          const data = response.data;
          this.items = data;
        })
        .catch((error)=> {
          console.log(error);
        });
  }
}
