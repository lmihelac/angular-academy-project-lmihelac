import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Review } from 'src/app/services/review.model';

export interface ReviewFormData {
  comment: string;
  rating: number;
}

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewFormComponent  {
  @Output() addReview: EventEmitter<ReviewFormData> = new EventEmitter(); //typeat ovo


  public reviewFormGroup: FormGroup = new FormGroup(
    {
    comment: new FormControl('',[Validators.required]),
    rating: new FormControl('', [Validators.required]),
    }
  );


	public onAddReview(): void{
    this.addReview.emit(this.reviewFormGroup.value);
    console.log(this.reviewFormGroup.value);
    this.reviewFormGroup.reset();
}

}
