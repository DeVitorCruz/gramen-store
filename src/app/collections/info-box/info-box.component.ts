import { Component, input } from '@angular/core';
import { InfoBoxItem } from '../info-box-item';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { BreakLastWordPipe } from '../../shared/break-last-word/break-last-word.pipe';
import { BreakMode } from '../../shared/break-last-word/BreakMode';
import { MatIconModule } from '@angular/material/icon';
import { CountdownComponent } from '../../shared/countdown/countdown.component';
import { FormsModule } from "@angular/forms";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-box',
  imports: [
    NgFor,
    BreakLastWordPipe,
    MatIconModule,
    CountdownComponent,
    NgIf,
    FormsModule,
    RouterLink,
    CommonModule
],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent {
  public readonly DATA = input.required<InfoBoxItem>();
  public readonly OPTION = input<number | undefined>(undefined);
  public readonly MODE = input<BreakMode>('last');
  public readonly FULL_TIME_COUNT_DOWN = input<number>(0);
}
