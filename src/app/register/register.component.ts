import { CustomValidators } from "./../name.validators";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor() {}

  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      CustomValidators.removeSpace
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ])
  });
  get username() {
    return this.form.get("username");
  }
  get password() {
    return this.form.get("password");
  }

  ngOnInit() {}
}
