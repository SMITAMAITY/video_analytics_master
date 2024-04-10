import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{  

  customerSentimentData: any[] = [];
  chartData: any;
  chartOptions: any;
  chatResponses: any[]=[];
  scrollOptions: ScrollOptions = {};
  clickCount: number = 0;
  DashboardComponent(){

  }

  ngOnInit(): void {

    this.scrollOptions = {
      behavior: 'smooth',
      
    }

    this.customerSentimentData = [];
    this.customerSentimentData.push({ category: '401K', score: 80, color: 'limegreen' });
    this.customerSentimentData.push({ category: 'Municipal Bonds', score: 60, color: 'goldenrod' });
    this.customerSentimentData.push({ category: 'Roth IRA', score: 50, color: 'goldenrod' });
    this.customerSentimentData.push({ category: 'Tax loss harvesting', score: 30, color: 'red' });
    this.customerSentimentData.push({ category: 'Tax-Managed Funds', score: 70, color: 'limegreen' });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.chartData = {
      labels: ['Positive', 'Neutral', 'Negative'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };


    this.chartOptions = {
      cutout: '60%',
    };

    

   

  }


  getAnswer() {
    if (this.clickCount == 0) {
      this.chatResponses.push({
        question: 'show customer interested areas', response: `<p>
                        Sure. Abdul is currently interested in the followiong products
                        <ul>
                          <li>401K Retirement Savings Plan</li>
                          <li>Municipal Bonds</li>
                          <li>Tax Optimization and Retirement Savings Strategy</li>
                        </ul>
                      </p>`});
    }
    else {
      this.chatResponses.push({
        question: 'show customer concerns', response: `<p>
                        Abdul is currently interested in the followiong products
                        <ul>
                          <li>Paying High taxes</li>
                          <li>Less return of investment</li>
                          <li>Financial Security about future</li>
                        </ul>
                      </p>`});
    }
    
    this.clickCount++;
    setTimeout(() => { document.getElementById("response" + (this.clickCount - 1))?.scrollIntoView(); }, 500);
    
  }
}
