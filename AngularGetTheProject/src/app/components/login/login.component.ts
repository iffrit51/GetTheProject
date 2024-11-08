import { Component ,OnInit} from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  type: string = "password";
  isText: boolean = false;
  eyeIcon:string="fa-eye-slash";
  loginForm! : FormGroup;

  constructor(private fb: FormBuilder,private router: Router){ }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username: ['',Validators.required],
      password:['',Validators.required]
    })
  }
  
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type ="text" : this.type ="password";
  }
  onSubmit(){
    if(this.loginForm.valid){
      //send object data
      console.log(this.loginForm.value);
      this.router.navigateByUrl('accueil');
    }else{
      console.log(this.loginForm.value);
      this.router.navigateByUrl('accueil');
      console.log("Form invalid");
      //throw error
    }
  }
  Sinscrire(){
  this.router.navigateByUrl('signup');}
}
