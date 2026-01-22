import { NgFor } from '@angular/common';
import { CountDownItem } from './countdown-items';
import { Component, computed, DestroyRef, inject, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [
    NgFor
  ],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit {

  public readonly LEFT_TIME = input<number>(0);
  public readonly SECONDS_REMAINING = signal<number>(0);
  public readonly FORMATTED_REMAINING = computed(() => this.formattedTime(this.SECONDS_REMAINING()));

  constructor() {
    const TIMER_ID = setInterval(() => {
      this.SECONDS_REMAINING.update(v => Math.max(v - 1, 0));
    }, 1000);

    const DESTROY_REF = inject(DestroyRef);
    DESTROY_REF.onDestroy(() => clearInterval(TIMER_ID));
  }

  public ngOnInit(): void {
    this.SECONDS_REMAINING.set(this.LEFT_TIME());
  }

  private formattedTime(totalSeconds: number): CountDownItem[] {
    const T = new Date(totalSeconds*1000);
    const FORMATED_ALL_RESULT: CountDownItem[] = [
      {
        id: 0,
        time: T.getDate(),
        unity: 'DAYS'
      }, 
      {
        id: 1,
        time: T.getHours(),
        unity: 'HRS'
      }, 
      {
        id: 2,
        time: T.getMinutes(),
        unity: 'MINS',
      }, 
      {
        id: 3,
        time: T.getSeconds(),
        unity: 'SECS',
      }
    ];

    return FORMATED_ALL_RESULT;
  }
}
