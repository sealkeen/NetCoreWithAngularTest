import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core'
import { SideNavStylingService } from '../services/side-nav-styling-service/side-nav-styling-service.component';

@Component({
    selector: 'footer-player',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterPlayer { 
    ngOnInit() {
        const body = document.querySelector('.body');
        const resizeObserver = new ResizeObserver((entries) => 
            entries.forEach(entry => {
                console.log("width", entry.contentRect.width);
                console.log("height", entry.contentRect.height);
            })
        );
    }
    constructor(private el: ElementRef, public navStyleService: SideNavStylingService)
    {

    }
    public toggleLeftSideNavStyle()
    {
        this.navStyleService.toggleLeftNavVisibility();
    }
    public toggleRightSideNavStyle()
    {
        this.navStyleService.toggleRightNavVisibility();
    }
    public getFooterHeight() : number {
        return this.el.nativeElement.offsetHeight;
    }
}