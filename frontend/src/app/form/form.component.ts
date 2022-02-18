import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  onSend() {
    const link = this.form.value;
    this.httpService.onPost(link).subscribe(() => {
      this.form.resetForm();
    });
  }
}
