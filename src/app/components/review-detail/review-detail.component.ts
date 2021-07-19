import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
