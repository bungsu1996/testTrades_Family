import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'promo-cocacola';
  konversi1: number = 0;
  hasilKonversi1: number = 0;
  errorIsi: Boolean = false;
  tampilkan1: Boolean = false;
  tampilkan2: Boolean = false;
  botolIsi = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  public onCheckIsi() {
    const botolDibeli = this.botolIsi.value;
    const a = botolDibeli * 1;
    const b = a / 2;
    const c = Math.floor(b);
    this.konversi1 = a;
    this.hasilKonversi1 = c;
    if (a < 1) {
      this.errorIsi = true;
      this.tampilkan1 = false;
    } else if (a === 1) {
      this.tampilkan2 = true;
      this.errorIsi = false;
      this.tampilkan1 = false;
    } else {
      this.tampilkan1 = true;
      this.tampilkan2 = false;
      this.errorIsi = false;
    }
  }


}
