import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'barchart',
  template: `
  <div>
    <div style="display:block">
    <canvas baseChart
    [datasets]="barChartData"
    [labels]="barChartLabels"
    [options]="barChartOptions"
    [legend]="barChartLegend"
    [chartType]="barChartType"></canvas>   
</div>
</div>  
  `,

})
export class BarchartComponent implements OnInit {

  public barChartOptions={
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels=['2006','2007','2008'];
  public barChartType='bar';
  public barChartLegend =true;
  public barChartData = [
    {data: [65,75,85],label:'Series A'},
    {data: [28,48,58],label:'Series B'} 
  ] 
  constructor() { }

  ngOnInit() {
  }

}
