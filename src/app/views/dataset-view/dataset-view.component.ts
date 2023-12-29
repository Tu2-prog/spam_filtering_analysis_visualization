import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { storageEndpoint } from '../../endpoints/api';
import { Item } from '../../model';

@Component({
  selector: 'app-dataset-view',
  templateUrl: './dataset-view.component.html',
  styleUrl: './dataset-view.component.css'
})
export class DatasetViewComponent implements OnInit {
  items: Item[] = [];

  constructor(private router: Router) {}

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

  private convertArrayToCSV(array: any[]): string {
    const csvRows = array.map(item => Object.values(item).join(','));
    return ['COntent,Classifier,Result', ...csvRows].join('\n');
  }

  async deleteDataset(): Promise<void> {
    const url = storageEndpoint + "/deleteall";
    try {
      const response = await axios.delete(url);
      window.alert(response.status);
      const fetchDataResponse = await axios.get(storageEndpoint);
      const data = fetchDataResponse.data;
      this.items = data;
      this.router.navigate(["data"]);
    } catch (error) {
      window.alert("An error occurred while validating the token");
    }
  }

  async downloadData(): Promise<void> {
    const url = storageEndpoint;

    axios.get(url)
      .then((response) => {
        const data = response.data;
        const csvContent = this.convertArrayToCSV(data);
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'data.csv';
        link.click();
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        window.alert('An error occurred while fetching the data');
      });
  }
}
