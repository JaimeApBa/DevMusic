import { Tracks } from './../../../models/tracks.model';
import { TrackService } from 'src/app/services/track.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../../components/modal/modal.service';


@Component({
  selector: 'app-info-tracks',
  templateUrl: './info-tracks.component.html',
  styles: []
})
export class InfoTracksComponent implements OnInit {
  @Input() public track;
  lyric: string;
  info: Tracks[];
  nolyric: boolean;

  constructor(
    public _trackService: TrackService,
    public _modalService: ModalService
  ) { }

  ngOnInit() {
  }
// Get info Tracks
  infoTracks(id) {
    return this._trackService.getInfoTrack(id)
            .subscribe((resp: any) => {
              console.log(resp);
            });
  }
  // Download Track
  downloadTrack(id) {
    this._trackService.downloadFile(id);
  }
  // Get lyrics
  lyricsTracks(id) {
    this._trackService.getInfoTrack(id)
    .subscribe((resp: any) => {
      if (resp[0].lyrics !== '') {
        this._modalService.showModal(resp[0].lyrics );
      } else {
        this._modalService.showModal('No hay letra para esta canción');
      }
    });
  }

}
