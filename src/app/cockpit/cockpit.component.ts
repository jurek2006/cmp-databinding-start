// cockpit.component.ts
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	// przypisanie do właściwości obiektów EmitterObject (czyli takich, które mogą emitować własne zdarzenia)
	@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	@Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	newServerName = '';
  	newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
  	// emitowanie eventu z przekazaniem danych
    this.serverCreated.emit({
    	serverName: this.newServerName,
    	serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
  	// emitowanie eventu z przekazaniem danych
    this.blueprintCreated.emit({
    	serverName: this.newServerName,
    	serverContent: this.newServerContent
    });
  }
}
