import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spam_filtering_analysis_visualization';

  ngOnInit(): void{
    localStorage.clear()
  }
}
