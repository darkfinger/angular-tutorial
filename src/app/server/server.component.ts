import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: ['.stateButtonClass{color : white;}']
})
export class ServerComponent {
    stateButton = 'turn on';
    itemsval = 0;
    logTab = [];
    serverID = 10;
    serverStatus = 'offline';

    onChangeState() {
        this.stateButton = this.stateButton === 'turn on' ? 'turn of' : 'turn on';
        this.logTab.push(this.stateButton);
    }

    tabLenght() {
       return this.logTab.length;
    }
}
