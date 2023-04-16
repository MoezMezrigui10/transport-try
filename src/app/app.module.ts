import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientModule } from './clients/client.module';
import { CompanyModule } from './company/company.module';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from './custom-material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutModule } from './about/about.module';
import { ClientService } from './clients/client.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { NewComponentComponent } from './new-component/new-component.component';
import { TransporterComponent } from './transporter/transporter.component';
import { TransporterListComponent } from './transporter/transporter-list/transporter-list.component';


@NgModule({
  declarations: [AppComponent, NavigationComponent, NewComponentComponent, TransporterComponent, TransporterListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ClientModule,
    CompanyModule,
    AboutModule,
    SharedModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule {}
