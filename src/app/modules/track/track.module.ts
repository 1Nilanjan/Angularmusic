import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TrackCardComponent } from './components/track-card/track-card.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { LastFmService } from './services/last-fm.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { PlayListComponent } from './components/play-list/play-list.component';


@NgModule({
  declarations: [HeaderComponent, TrackCardComponent, TrackListComponent, HomeComponent, PlayListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [LastFmService],
  exports: [HeaderComponent]
})
export class TrackModule { }
