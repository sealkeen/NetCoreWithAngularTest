import { Component } from '@angular/core'
import { SideNavStylingService } from '../../services/side-nav-styling-service/side-nav-styling-service.component';

@Component({
    selector: 'bottom-right-nav',
    templateUrl: './bottom-right-nav.component.html',
    styleUrls: ['./../side-nav.component.css']
})

export class BottomRightNav { 
    constructor(public styleService: SideNavStylingService) { 
        
    }
    public displayWidth = 0;
    public openRightNav() {
        (<HTMLElement>document.getElementById("bottomRightNav")).style.width = `calc(0.5 * (100vw) ${(window.screen.width > window.screen.height) ? '- var(--scrollbar-width)' : '' })`;
        //window.addEventListener('resizeend', () => { document.getElementById("bottomRightNav").style.width = $('body').width() / 2; } )
        //document.getElementById("top-page-container").style.marginRight = "250px";
        (<HTMLElement>document.querySelector("#volume-control")).classList.add('volume-control-absolute');
        (<HTMLElement>document.getElementsByClassName("navbar")[0]).style.opacity = "0.9";
        //document.getElementsByClassName("container")[0].style.opacity = 0.8;
        (<HTMLElement>document.getElementById("bottomRightNav")).style.paddingLeft = "5px"; 
        (<HTMLElement>document.getElementById("bottomRightNav")).style.paddingRight = "5px"; 
    }
    public closeRightNav() {
        (<HTMLElement>document.getElementById("bottomRightNav")).style.width = "0";
        //document.getElementById("top-page-container").style.marginRight= "0";
        (<HTMLElement>document.querySelector("#volume-control")).classList.remove('volume-control-absolute');
        (<HTMLElement>document.getElementsByClassName("navbar")[0]).style.opacity = "1";
        //document.getElementsByClassName("container")[0].style.opacity = 1;
        (<HTMLElement>document.getElementById("bottomRightNav")).style.paddingLeft = "0px"; 
        (<HTMLElement>document.getElementById("bottomRightNav")).style.paddingRight = "0px"; 
    }
}