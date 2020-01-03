import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: string = "This login page how are you 💯🔢";
  logiData() {}

  log(username) {
    console.log(username.value);
  }

  submit(form) {
    console.log(form.value);
  }
  constructor() {}

  ngOnInit() {}
}
