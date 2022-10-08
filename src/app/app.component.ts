import { Component } from '@angular/core';
import { SideNavStylingService } from './services/side-nav-styling-service/side-nav-styling-service.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private sidenavStylingService: SideNavStylingService)
    {
        document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
    }
    title = 'app';
}
