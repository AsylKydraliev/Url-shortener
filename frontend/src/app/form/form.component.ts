import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { Link } from '../shared/link.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {
  @ViewChild('form') form!: NgForm;
  shortLink!: string;
  apiUrl = environment.apiUrl;

  constructor(private httpService: HttpService) {}

  onSend() {
    const link: Link = this.form.value;
    this.httpService.onPost(link).subscribe((link: any) => {
      this.shortLink = link.shortUrl;
      this.form.resetForm();
    });
  };
}
