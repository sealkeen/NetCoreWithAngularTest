import { Component, Input } from '@angular/core'
import { MockCompositionModel } from './../models/mock-composition'

@Component({
    selector: 'mock-composition',
    templateUrl: './mock-composition.component.html',
    styleUrls: ['./mock-composition.component.css']
})

export class MockComposition {
    @Input() id : string
    @Input() artist: string
    @Input() title: string
}