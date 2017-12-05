import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TwitterService } from '../../services/twitter.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent {
  public tweets = [];
  public twitterForm = new FormGroup({
    displayName: new FormControl('realdonaldtrump')
  });

  constructor(
    private twitterService: TwitterService
  ) { }

  public fetch() {
    const value = this.twitterForm.controls['displayName'].value;
    this.twitterService.fetch(value).subscribe((result) => {
      this.tweets = result as any[];
    });
  }
}
