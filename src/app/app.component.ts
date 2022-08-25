import { Component } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TableDemo';
  Bangdulieu = new FormGroup({
    NamePP : new FormControl(''),
    Age : new FormControl(''),
    Address : new FormControl('')
  })
  SayanNamePP : string ;
  SayanAge : number ;
  SayanAddress : string;
  OnClick(){
    this.SayanNamePP = this.Bangdulieu.get('NamePP').value;
    this.SayanAge = this.Bangdulieu.get('Age').value;
    this.SayanAddress = this.Bangdulieu.get('Address').value; 
    console.log(this.Bangdulieu.get('SayanAge').value)
  }
}
