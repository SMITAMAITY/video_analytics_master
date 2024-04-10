import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { InteractionDetailsComponent } from './interaction-details/interaction-details.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { PersonaDetailsComponent } from './persona-details/persona-details.component';
import { SearchMeetingComponent } from './search-meeting/search-meeting.component';
import { FootfallAnalysisComponent } from './footfall-analysis/footfall-analysis.component';
import { BranchAtmFootfallComponent } from './branch-atm-footfall/branch-atm-footfall.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '', component: AppLayoutComponent,
      children: [
        {
          path: '', component: HomeComponent,
        },
        {
          path: 'home', component: HomeComponent,
        },
        {
          path: 'search-meetings', component: SearchMeetingComponent,
        },
        {
          path: 'dashboard', component: DashboardComponent,
        },
        {
          path: 'interaction-details', component: InteractionDetailsComponent,
        },
        {
          path: 'personal-details', component: PersonaDetailsComponent,
        },
        {
          path: 'footfall-analysis', component: FootfallAnalysisComponent,
        },
        {
          path: 'branch-atm-footfall', component: BranchAtmFootfallComponent,
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
