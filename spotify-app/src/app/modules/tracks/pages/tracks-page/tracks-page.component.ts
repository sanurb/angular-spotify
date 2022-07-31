import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  loadDataAll(): void {
    // Se pueden trabajar como promesas tambien con .topromise() aunque esta deprecated
    this.trackService.getAllTracks$()
    .subscribe((response: TrackModel[]) => {
      this.tracksTrending =  response
    })
  }

  // ========= PROMESA ===========
  // async loadDataAll(): Promise<any> {
  //   this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
  // }

  loadDataRandom(): void {
    this.trackService.getAllRandom$()
    .subscribe((response: TrackModel[]) => {
      this.tracksRandom =  response
    })
  }

  ngOnDestroy(): void {

  }

}
