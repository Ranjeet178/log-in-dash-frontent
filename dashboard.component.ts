import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
  <div class="container">
<ul class="nav nav-tabs">
  <li class="nav item">
    <a  class="nav-link" routerLink="/bar-chart">Bar chart</a>
  </li>
  <li class="nav item">
      <a  class="nav-link" routerLink="/daughnut-chart">Doughnut chart</a>
    </li>
    <li class="nav item">
        <a  class="nav-link" routerLink="/radar-chart">Radar chart</a>
      </li>
      <li class="nav item">
          <a  class="nav-link" routerLink="/pie-chart">Pie chart</a>
        </li>
</ul>

  <div><router-outlet></router-outlet></div>   

</div>  
  
  `,
 
})
export class DashboardComponent {
  
}
