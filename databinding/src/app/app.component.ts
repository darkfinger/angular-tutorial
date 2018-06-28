import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'testServer', content: 'just a test'}];

    onServerAdded(event: {name: string, content: string}) {
        this.serverElements.push({
            type: 'server',
            name: event.name,
            content: event.content
        });
    }

    onBlueprintAdded(blueprintData: {name: string, content: string}) {
        this.serverElements.push({
            type: 'blueprint',
            name: blueprintData.name,
            content: blueprintData.content
        });
    }
}
