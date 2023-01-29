import { Component, Inject } from '@angular/core';
import { Composition } from './../../../media-streamer/models/composition'
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'fetch-compositions',
    templateUrl: './fetch-compositions.component.html',
    styleUrls: ['./../../../media-streamer/store/mock-data.component.css']
})

export class FetchCompositions {
    public compositions: Composition[] = [];

    constructor() {
        console.log('fetching compositions from ' + environment.apiUrl + '/GetJSONCompositionsPage');
        fetch(environment.apiUrl + '/GetJSONCompositionsPage')
            .then(response => response.json())
            .then(data => {
                this.compositions = data;
            })
            .catch(error => console.error(error));
    }
}