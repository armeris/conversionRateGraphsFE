import { Component } from '@angular/core';
import { Http } from '@angular/http';
import Chart from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  rates;
 
  constructor(private http: Http) {}

  ngOnInit(){
    this.http.get('http://localhost:3000/rates')
      .subscribe(res => this.rates = res.json());
  }
}
