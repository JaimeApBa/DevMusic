import { Directive, HostListener } from '@angular/core';

declare function init_plugins();

@Directive({
  selector: '[appPlugins]'
})
export class PluginsDirective {

  playing = false;

  constructor( ) { }

  @HostListener('click') onClick() {
  init_plugins();
  }

}
