
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})

export class SearchComponent implements OnInit {

  @Output() inputForm = new EventEmitter();

  constructor(
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe( params => {
      const termino = params['termino'];
      this.getTracks(termino);
    });
   }

  ngOnInit() {
  }

   getTracks(termino) {
      this.inputForm.emit(termino);
   }
}
