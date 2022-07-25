import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; // Programacion Reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    album: 'Giolì & Assia',
    name: 'BEBE (Official Video)',
    url: '',
    _id: 1,
  };

  /* La lista acontinuacion se hace con el fin de escalabilidad
  Por si se requiere crear mas de una subscription, simplemente las agregamos
  */
  listObservers$:Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const observe1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo cancion.....', response);
      }
    );

    this.listObservers$ = [observe1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach( u => u.unsubscribe())
  }
}
