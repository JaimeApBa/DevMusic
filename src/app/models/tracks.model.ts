import { Stats } from './stats.model';

export class Tracks {

    constructor(
        public name: string,
        public duration: string,
        public artist_id: string,
        public artist_name: string,
        public artist_idstr: string,
        public album_name: string,
        public album_id: string,
        public license_ccurl: string,
        public position: string,
        public releasedate: string,
        public album_image: string,
        public audio: Date,
        public audiodownload: string,
        public prourl: string,
        public shorturl: string,
        public shareurl: string,
        public image: string,
        public stats: Stats

    ) {}
}
