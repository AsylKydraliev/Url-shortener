import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSend() {
    console.log(this.form.value);
  }
}
