import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CnnService } from '../../services/cnn.service';

@Component({
  selector: 'app-cnn',
  templateUrl: './cnn.component.html',
  styleUrls: ['./cnn.component.scss']
})
export class CnnComponent {
  public articles = [];

  constructor(
    private cnnService: CnnService
  ) { }
  public cnnForm = new FormGroup({
    keyword: new FormControl('Donald Trump')
  });

  public search() {
    const value = this.cnnForm.controls['keyword'].value;
    this.cnnService.search(value).subscribe((result) => {
      this.articles = result as any[];
    });
  }
}
