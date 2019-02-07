import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Track } from '../../classes/Track';
import { LastFmService } from '../../services/last-fm.service';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css']
})
export class TrackCardComponent implements OnInit {
  @Input() track: Track;
  newTrack = new Track();
  @Output() trackAddToWishListevent = new EventEmitter<Track>();
  @Output() trackUpdatevent = new EventEmitter<Track>();
  @Output() trackdeleteevent = new EventEmitter<string>();

  constructor(private fmService: LastFmService) { }

  ngOnInit() {
  }

  // addToPlayList() {
  //   this.newTrack.trackId = this.track.mbid;
  //   this.newTrack.trackName = this.track.name;
  //   this.newTrack.trackSinger = this.track.artist.name;
  //   this.newTrack.trackImageUrl = this.track.image[3]['#text'];
  //   this.fmService.addToPlayList(this.newTrack);
  // }
  trackAddToWishList() {
    this.trackAddToWishListevent.emit(this.track);
  }
  trackUpdate() {
    this.trackUpdatevent.emit(this.track);
  }
  trackdelete() {
    this.trackdeleteevent.emit(this.track.trackId);
  }
  }

