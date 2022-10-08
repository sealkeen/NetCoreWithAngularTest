import { Component, Input } from '@angular/core'
import { CompositionModel } from './../models/composition-model'

@Component({
    selector: 'composition-view',
    templateUrl: './composition-view.component.html',
    styleUrls: ['./composition-view.component.css']
})

export class CompositionView {
    @Input() id : string
    @Input() artist: string
    @Input() title: string

    public async play(): Promise<void> {
        if(this.id.includes(':')) {
            console.log('loadDirect: $("#player-audio-element")[0] is %j', 
                (<HTMLAudioElement>document.getElementsByClassName("player-audio-element")[0]));
            document.getElementsByClassName("player-source-element")[0].setAttribute('src', this.id);
            let loadPromise = new Promise( () => (<HTMLAudioElement>document.getElementsByClassName("player-audio-element")[0]).load());
            if (loadPromise !== undefined) {
                loadPromise.then(() => {
                    (<HTMLAudioElement>document.getElementsByClassName("player-audio-element")[0]).play()
                    return true;
                }).catch((error: any) => {
                    if (error.name === "NotAllowedError") {
                        console.log('Load audio promise failure. NotAllowed Error.');
                    } else {
                        console.log('Load or playback error. ' + error);
                    }
                });
            }
        } else {

        }
    }
}