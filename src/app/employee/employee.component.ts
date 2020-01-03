import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  employee = [
    {
      emp_id: 1,
      emp_photo:
        "https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__340.jpg",
      emp_name: "manu",
      emp_designation: "nodejs developer",
      emp_salary: 1000,
      emp_location: "mysure",
      emp_education: "BE",
      emp_doj: new Date("10/10/2015")
    },
    {
      emp_id: 1,
      emp_photo:
        "https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__340.jpg",
      emp_name: "manu",
      emp_designation: "nodejs developer",
      emp_salary: 1000,
      emp_location: "mysure",
      emp_education: "BE",
      emp_doj: new Date("10/10/2015")
    },
    {
      emp_id: 1,
      emp_photo:
        "https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__340.jpg",
      emp_name: "manu",
      emp_designation: "nodejs developer",
      emp_salary: 1000,
      emp_location: "mysure",
      emp_education: "BE",
      emp_doj: new Date("10/10/2015")
    }
  ];

  ImageUrl =
    "https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__340.jpg";
  isActive = false;
  colSpan = 5;

  click(event) {
    //alert("hello Anguralr here" + event);
    console.log(event);
  }

  username(e) {
    console.log("username is " + e.target.value);
  }

  enterEmail(c) {
    console.log(c);
  }

  constructor() {}

  ngOnInit() {
    // javaScriot
    /* var input = document.querySelector("input");
    input.addEventListener("keyup", e => {
      console.log(e.target.value); 
    });*/
  }
}
