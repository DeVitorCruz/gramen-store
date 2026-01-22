import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { THEMES } from '../themes/THEMES';

@Injectable({
  providedIn: 'root'
})
export class SwitchThemesService {
  private renderer!: Renderer2;
  private currentThemeSubject = new BehaviorSubject<string>('furniture-theme');
  public currentTheme$: Observable<string> = this.currentThemeSubject.asObservable();
  private readonly THEMES: string[] = THEMES;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.setInitialTheme();
  }

  public setTheme(themeName: string): void {
    
    if (!this.THEMES.includes(themeName)) {
      console.error(`Invalid theme name: ${themeName}. Available themes: ${this.THEMES.join(', ')}`);
      return;
    }

    const PREVIOUS_THEME = this.currentThemeSubject.getValue();

    if (PREVIOUS_THEME) {
      this.renderer.removeClass(this.document.body, PREVIOUS_THEME);
    }

    this.renderer.addClass(this.document.body, themeName);

    this.currentThemeSubject.next(themeName);
    localStorage.setItem('theme', themeName);
  }

  private setInitialTheme(): void {
    const SAVED_THEME = localStorage.getItem('theme');
    const THEME_TO_APPLY = SAVED_THEME && this.THEMES.includes(SAVED_THEME) ? SAVED_THEME : 'furniture-theme';

    this.setTheme(THEME_TO_APPLY);
  }
}
