import { Component } from '@angular/core';
import {MockComposition} from './media-streamer/store/components/mock-composition.component'
import { MockCompositionModel } from './media-streamer/store/models/mock-composition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  composition: MockCompositionModel ;
}
