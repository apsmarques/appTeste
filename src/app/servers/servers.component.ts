import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  // template: `<app-server></app-server>
  //            <app-server></app-server>`,
  templateUrl: "./servers.component.html", 
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
    serverCreationStatus : string = 'No server was created';
  constructor() {
    setTimeout(()=> {
        this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Sever was created!';
  }

  onUpdateServerName(){
    
  }

}
