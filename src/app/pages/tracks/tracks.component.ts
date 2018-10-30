import { Component, OnInit, ElementRef } from '@angular/core';
import { TrackService } from 'src/app/services/track.service';
import { Tracks } from 'src/app/models/tracks.model';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styles: []
})
export class TracksComponent implements OnInit {

    tracks: Tracks[];
    busqueda = true;
    flag = true;
    termino: string;
    audio: any;
    time: any;
    duration: number;

    constructor(
        public _trackService: TrackService,
        public activatedRoute: ActivatedRoute
    ) {
        activatedRoute.params.subscribe( params => {
            const termino = params['termino'];
            this.cargarTracks(termino);
        });

    }

    ngOnInit() {
        this.audio = new Audio();
        this.busqueda = true;
        console.log(this.busqueda);
        this.cargarPopularTracks();
    }


    cargarPopularTracks() {

        this._trackService.cargarPopularTracks()
                .subscribe((resp: any) => {
                    this.busqueda = true;
                    this.flag = true;
                    this.tracks = resp;
                    console.log(resp);
                });
    }
    cargarTracks(termino: string) {

        if (termino !== '') {

            this._trackService.cargarTracks( termino )
                .subscribe((resp: any) => {
                    if (resp.length === 0) {
                        this.busqueda = false;
                    } else {
                        this.tracks = resp;
                        this.busqueda = true;
                        this.flag = false;
                    }
                });
        } else {
            this.cargarPopularTracks();
        }
    }

    playAudio(src, event) {
        this.allPaused();
        if (this.audio.paused) {
            this.audio.src = src;
            this.audio.load();
            this.audio.play();
            this.isPlaying (event);
            this.progressBar(event);

        } else {
            this.isPaused (event);
            this.audio.pause();
        }

    }

    progressBar(event) {
        const target = event.target || event.srcElement;

        this.audio.addEventListener('timeupdate', () => {
            this.time = (this.audio.currentTime / this.audio.duration) * 100 + '%';

            if(this.audio.currentTime === this.audio.duration) {
                this.isPaused(event);
            }

            if (target.nextSibling.classList.contains('progress-bar')) {
                target.nextSibling.style.width = this.time;
            }
        });

    }

    isPlaying (event) {
        const target = event.target || event.srcElement;
        target.classList.add('pause', 'fa-pause');
        target.classList.remove('fa-play-circle', 'play');
        target.nextSibling.classList.add('progress-bar');
    }

    isPaused (event) {
        const target = event.target || event.srcElement;
        target.classList.add('fa-play-circle', 'play');
        target.classList.remove('pause', 'fa-pause');
        target.nextSibling.classList.remove('progress-bar');
        target.nextSibling.style.width = '0px';
    }

    allPaused () {
        const target: any = document.getElementsByClassName('audio-icon');

        for ( const ref of target) {
            ref.classList.add('fa-play-circle', 'play');
            ref.classList.remove('pause', 'fa-pause');
            ref.nextSibling.classList.remove('progress-bar');
            ref.nextSibling.style.width = '0px';
        }
    }



}
