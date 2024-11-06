import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon:string="fa-eye-slash";
  constructor(){}
  private opts = [
    { key: 'Sélection'},
    { key: 'Cabinet IT'},
    { key: 'Freelance' },
    { key: 'Client Final'}
  ];
  get firstSelectOptions() {
    return this.opts.map(({key}) => key);
  }
  ngOnInit(): void {
  
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type ="text" : this.type ="password";
  }
}
