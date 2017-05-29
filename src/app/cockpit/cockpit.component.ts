// cockpit.component.ts
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	// przypisanie do właściwości obiektów EmitterObject (czyli takich, które mogą emitować własne zdarzenia)
	@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	@Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	// newServerName = '';
  // newServerContent = '';
  // nowa właściwość z @ViewChild
  // musimy przekazac selektor jako argument
  // tak przekazywana referencja jest typu ElementRef
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  // można by było przekazać też komponent (tutaj nie ma na to przykładu)
  // wtedy by odnosiło się do pierwszego wystąpienia komponentu
  // @ViewChild(CockpitComponent) serverContentInput;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
  	// emitowanie eventu z przekazaniem danych
    this.serverCreated.emit({
    	serverName: nameInput.value,
      // użycie nativeElement żeby dostać się 
      // do wartości value elementu do którego prowadzi referencja serverContentInput
    	serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
  	// emitowanie eventu z przekazaniem danych
    this.blueprintCreated.emit({
    	serverName: nameInput.value,
    	serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
