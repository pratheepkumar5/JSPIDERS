import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent implements OnInit {
  users = ["manu", "vinu"];
  color = "red";

  isBtn = true;

  toggleClass = false;
  toggleState() {
    this.toggleClass = !this.toggleClass;
    console.log("work");
  }
  dynamicCss() {
    return {
      "bg-danger": true,
      color: "text-light",
      background: this.toggleClass
    };
  }

  user = [
    {
      name: "manu",
      age: 20,
      gender: "female",
      country: "india"
    },
    {
      name: "prathi",
      age: 20,
      gender: "male",
      country: "india"
    },
    {
      name: "thanu",
      age: 20,
      gender: "female",
      country: "india"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
