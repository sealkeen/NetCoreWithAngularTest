import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class SideNavStylingService {
    private isLeftNavClosed = true;
    private isRightNavClosed = true;
    private sideBarWidth: string;

    private updateNavBarsWidth()
    {
        this.sideBarWidth = `calc(0.5 * (100vw) ${(window.screen.width > window.screen.height) ? '- var(--scrollbar-width)' : '' })`
    }

    public toggleLeftNavVisibility()
    {
        this.isLeftNavClosed = !this.isLeftNavClosed;
    }

    public toggleRightNavVisibility()
    {
        this.isRightNavClosed = !this.isRightNavClosed;
    }

    public getLeftSideBarWidth() : string
    {
        if(this.isLeftNavClosed) {
            return ""
        } else {
            this.updateNavBarsWidth();
            return this.sideBarWidth
        }
    }

    public getRightSideBarWidth() : string
    {        
        if(this.isLeftNavClosed) {
            return ""
        } else {
            this.updateNavBarsWidth();
            return this.sideBarWidth
        }
    }

    public getLeftNavClass()
    {
        return this.isLeftNavClosed ? "closed-nav" : "";
    }

    public getRightNavClass()
    {
        return this.isRightNavClosed ? "closed-nav" : "";
    }
}