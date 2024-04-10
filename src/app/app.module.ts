import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { TableModule } from 'primeng/table'
import { ProgressBarModule } from 'primeng/progressbar'
import { TagModule } from 'primeng/tag';
import { ChartModule } from 'primeng/chart';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MegaMenuModule } from 'primeng/megamenu';
import { Menu, MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InteractionDetailsComponent } from './interaction-details/interaction-details.component';
import { PersonaDetailsComponent } from './persona-details/persona-details.component';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { TooltipModule } from 'primeng/tooltip';
import { HomeComponent } from './home/home.component';
import { SearchMeetingComponent } from './search-meeting/search-meeting.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PanelModule } from 'primeng/panel';
import { FootfallAnalysisComponent } from './footfall-analysis/footfall-analysis.component';
import { RouterModule } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { BranchAtmFootfallComponent } from './branch-atm-footfall/branch-atm-footfall.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InteractionDetailsComponent,
    PersonaDetailsComponent,
    HomeComponent,
    SearchMeetingComponent,
    FootfallAnalysisComponent,
    BranchAtmFootfallComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppLayoutModule,
    TableModule,
    ProgressBarModule,
    TagModule,
    ChartModule,
    BadgeModule,
    ButtonModule,
    InputTextareaModule,
    InputGroupModule,
    InputGroupAddonModule,
    ScrollPanelModule,
    MenuModule,
    MenubarModule,
    CardModule,AvatarModule,
    ChipModule,
    TooltipModule,
    FloatLabelModule,
    AutoCompleteModule,
    PanelModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
