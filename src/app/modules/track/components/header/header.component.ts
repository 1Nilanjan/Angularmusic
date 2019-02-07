import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../../services/last-fm.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  branding = 'Muzix-Beta';
  firstNav = 'Home';
  firstNavUrl = '';
  secondNav = 'Playlist';
  secondNavUrl = 'play-list';


  constructor() { }

  ngOnInit() {
  }

}
