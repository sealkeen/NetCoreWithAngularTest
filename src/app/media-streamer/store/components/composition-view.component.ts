import { Component, Input } from '@angular/core'
import { CompositionModel } from './../models/composition-model'
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'composition-view',
    templateUrl: './composition-view.component.html',
    styleUrls: ['./composition-view.component.css']
})

export class CompositionView {
    @Input() id : string
    @Input() artist: string
    @Input() title: string

    constructor() { }
    public async play(): Promise<void> {
        try {
            let src;
            if (this.id.includes(':')) {
                src = this.id;
            } else {
                const response = await fetch(`${environment.apiUrl}/GetHtmlStreamPlayer/?url=${this.id}`);
                const html = await response.text();
                const htmlDom = new DOMParser().parseFromString(html, 'text/html');    
                const sourceElement = htmlDom.querySelector('#player-source-element');
                if(sourceElement && sourceElement.hasAttribute('src')){
                    src = sourceElement.getAttribute('src');
                } else {
                    throw new Error("Source element or src attribute not found in the HTML")
                }
            }
            const audio = document.getElementsByClassName("player-audio-element")[0] as HTMLAudioElement;
            audio.src = src == null ? "" : src;
            await audio.load();
            audio.play();
        } catch (error) {
            console.error(error);
        }
    }
}