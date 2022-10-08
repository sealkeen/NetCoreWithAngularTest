import { Component, Input } from '@angular/core'

@Component({
    selector: 'volume-control-absolute',
    templateUrl: './volume-control-absolute.component.html',
    styleUrls: ['./volume-control-absolute.component.css']
})

export class VolumeControlAbsolute {   
    @Input() parentHeight : number
    
    getElementHeight() : string
    {
        //console.log(this.parentHeight)
        return this.parentHeight + 'px';
    }
}