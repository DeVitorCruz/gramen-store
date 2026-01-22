import { Component, OnInit } from "@angular/core";
import { InfoBarComponent } from "../../collections/menu-bars/info-bar/info-bar.component";
import { NavigateBarComponent } from "../../collections/menu-bars/navigate-bar/navigate-bar.component";
import { TOOL_BAR_INFO } from "./info-bar-features/TOOL_BAR_INFO";
import { WRAPP_MENU_ELEMENTS } from "./navigate-bar-features/WRAPP_MENU_ELEMENTS"; 
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "../../collections/footer/footer.component";
import { SwitchThemesService } from "../themes-collections/switch-themes/switch-themes.service";
import { CommonModule } from "@angular/common";
import { StickyOnScrollDirective } from "../../shared/sticky-on-scroll/sticky-on-scroll.directive";

@Component({
    selector: 'app-furnitureStore',
    imports: [
        InfoBarComponent,
        NavigateBarComponent,
        RouterOutlet,
        CommonModule,
        StickyOnScrollDirective,
        FooterComponent
    ],
    templateUrl: './furniture-store.component.html',
    styleUrl: './furniture-store.component.scss'
}) 
export class FurnitureStore implements OnInit {
    public readonly TOOL_BAR_INFO = TOOL_BAR_INFO;
    public readonly WRAPP_MENU_ELEMENTS = WRAPP_MENU_ELEMENTS;
    
    constructor(public switchThemesService: SwitchThemesService) {}

    public ngOnInit(): void {
       this.setThemesFurniture();
    }

    public setThemesFurniture(): void {
        this.switchThemesService.setTheme('furniture-theme');
    }
}