import { Component, OnInit } from '@angular/core';
import {timeout} from 'q';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
state = false;
oncreate = 'not created yet';
serverName = '';
  constructor() {
    setTimeout(() => {this.state = true; }, 2000);
  }
0.368;
  ngOnInit() {
  }
  onCreatServer() {
        this.oncreate = 'Server Created';
    }
    onUpdateSertver(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}
