
import { PlaylistTracks } from './playlistTrack.model';


export class Playlist {

    constructor(
        public nombre: string,
        public fecha: Date,
        public usuario: string,
        public tracks: PlaylistTracks

    ) {}
}
