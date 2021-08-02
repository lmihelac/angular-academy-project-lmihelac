import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export interface IReviewFormData {
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
  @Output() addReview: EventEmitter<IReviewFormData> = new EventEmitter(); //typeat ovo


  public reviewFormGroup: FormGroup = new FormGroup(
    {
    comment: new FormControl('',[Validators.required]),
    rating: new FormControl('', [Validators.required]),
    }
  );


	public onAddReview(): void{
    this.addReview.emit(this.reviewFormGroup.value);
    this.reviewFormGroup.reset();
}

}
