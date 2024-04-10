import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footfall-analysis',
  templateUrl: './footfall-analysis.component.html',
  styleUrl: './footfall-analysis.component.css'
})
export class FootfallAnalysisComponent {
  constructor(private router: Router){
  }

  chartOptionsFootfall = {
    title:{
      text: "Footfall"  
    },
    animationEnabled: true,
    data: [{    
      color: "blue", 
      type: "column",
      dataPointWidth: 20,
      dataPoints: [
        { x: 5, y: 71 },
        { x: 10, y: 55 },
        { x: 15, y: 50 },
        { x: 20, y: 65 },
        { x: 25, y: 95 },
        { x: 30, y: 68 },
        { x: 35, y: 28 },
        { x: 40, y: 34 },
        { x: 45, y: 14 },
        { x: 50, y: 71 },
        { x: 55, y: 55 },
        { x: 60, y: 50 },
        { x: 65, y: 65 },
        { x: 70, y: 95 },
        { x: 75, y: 68 },
        { x: 80, y: 28 },
        { x: 85, y: 34 },
        { x: 90, y: 14 }
      ]
    }]
  }	

  chartOptionsQueueLength = {
    title:{
      text: "QueueLength"  
    },
    animationEnabled: true,
    data: [{    
      color: "red", 
      type: "column",
      dataPointWidth: 20,
      dataPoints: [
        { x: 5, y: 71 },
        { x: 10, y: 55 },
        { x: 15, y: 50 },
        { x: 20, y: 65 },
        { x: 25, y: 95 },
        { x: 30, y: 68 },
        { x: 35, y: 28 },
        { x: 40, y: 34 },
        { x: 45, y: 14 },
        { x: 50, y: 71 },
        { x: 55, y: 55 },
        { x: 60, y: 50 },
        { x: 65, y: 65 },
        { x: 70, y: 95 },
        { x: 75, y: 68 },
        { x: 80, y: 28 },
        { x: 85, y: 34 },
        { x: 90, y: 14 }
      ]
    }]
  }
  
  onClickBtn(){
    this.router.navigate(['/branch-atm-footfall']);
  }
}