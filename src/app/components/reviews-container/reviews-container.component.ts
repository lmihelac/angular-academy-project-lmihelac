import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reviews-container',
  templateUrl: './reviews-container.component.html',
  styleUrls: ['./reviews-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
