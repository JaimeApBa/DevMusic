import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Tracks } from '../../models/tracks.model';
import { Playlist } from 'src/app/models/playlist.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styles: []
})
export class PlaylistComponent implements OnInit {

  playlist: Playlist[];

  constructor(
    public _playlistService: PlaylistService
  ) { }

  ngOnInit() {
    this.cargarTracksPlaylist();
  }

  cargarTracksPlaylist () {
    this._playlistService.cargarTracksPlaylists()
        .subscribe( (resp: any) => {
          console.log(resp);
          this.playlist = resp.results;

          console.log(this.playlist);
        });
  }

}
