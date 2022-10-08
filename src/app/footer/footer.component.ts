import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core'

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
    constructor(private el: ElementRef)
    {

    }
    public getFooterHeight() : number {
        return this.el.nativeElement.offsetHeight;
    }
}