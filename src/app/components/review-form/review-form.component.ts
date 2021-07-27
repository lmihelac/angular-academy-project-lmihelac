import { Component, ChangeDetectionStrategy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewFormComponent  {


  public reviewFormGroup: FormGroup = new FormGroup(
    {
    comment: new FormControl('',[Validators.required]),
    rating: new FormControl('', [Validators.required]),
    }
  );


}
