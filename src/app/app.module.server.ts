import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    SeriesModule
    
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
