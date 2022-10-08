import { Component } from '@angular/core'

@Component({
    selector: 'bottom-left-nav',
    templateUrl: './bottom-left-nav.component.html',
    styleUrls: ['./../side-nav.component.css']
})

export class BottomLeftNav {
    public openLeftNav() {
        (<HTMLElement>document.getElementById("mySidenav")).style.width = `calc(0.5 * (100vw) ${(window.screen.width < window.screen.height) ? '- var(--scrollbar-width)' : '' })`;
        //window.addEventListener('resizeend', () => { document.getElementById("mySidenav").style.width = $('body').width() / 2; } )
        //document.getElementById("top-page-container").style.marginLeft = "250px";
        (<HTMLElement>document.getElementsByClassName("navbar")[0]).style.opacity = "0.9";
        //document.getElementsByClassName("container")[0].style.opacity = 0.8;
        (<HTMLElement>document.getElementById("mySidenav")).style.paddingLeft = "5px";
        (<HTMLElement>document.getElementById("mySidenav")).style.paddingRight = "5px";
    }
    public closeLeftNav() {
        (<HTMLElement>document.getElementById("mySidenav")).style.width = "0";
        //document.getElementById("top-page-container").style.marginLeft= "0";
        (<HTMLElement>document.getElementsByClassName("navbar")[0]).style.opacity = "1";
        //document.getElementsByClassName("container")[0].style.opacity = 1;
        (<HTMLElement>document.getElementById("mySidenav")).style.paddingLeft = "0px"; 
        (<HTMLElement>document.getElementById("mySidenav")).style.paddingRight = "0px"; 
    }
}