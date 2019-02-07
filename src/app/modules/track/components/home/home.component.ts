import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LastFmService } from '../../services/last-fm.service';
import { Track } from '../../classes/Track';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tracks: Array<Track>;

  searchValue: string;
  statusCode: number;
  errorStatus: string;
  country: string;
  constructor(private fmService: LastFmService) { }

  ngOnInit() {
    this.fmService.getLatest10Tracks().subscribe((res: any) => {
      this.tracks = res.tracks.track;
      console.log(res);
    });
  }
  trackAddToWishList(track) {
    this.fmService.addToWishList(track).subscribe(
      data => {
        // console.log('data in thumbnail', data);
        this.statusCode = data.status;
        // console.log('success msg', data.body);
        if (this.statusCode === 201) {
          console.log('Success', this.statusCode);
          // this.snackBar.open('Track Successfully added !!!', '', {
          //   duration: 1500
          // });
        }
      },
      err => {
        const errorStatus = err;
        this.statusCode = parseInt(errorStatus, 10);
        if (this.statusCode === 409) {
          // this.snackBar.open('Track already added', '', {
          //   duration: 1000
          // });
          this.statusCode = 0;
        }
      }
    );
  }

}
