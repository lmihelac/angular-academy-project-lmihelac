import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Review } from 'src/app/services/review.model';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewFormComponent  {
  @Output() post: EventEmitter<Review> = new EventEmitter();

  public reviewFormGroup: FormGroup = new FormGroup(
    {
    comment: new FormControl('',[Validators.required]),
    rating: new FormControl('', [Validators.required]),
    }
  );

    public onPost(): void{
    this.post.emit(this.reviewFormGroup.value);
    this.reviewFormGroup.reset();
}
}
