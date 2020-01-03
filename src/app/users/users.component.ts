import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users = [
    {
      name: "manu",
      id: 1,
      photo:
        "https://cdn.pixabay.com/photo/2018/08/28/14/09/avatar-3637645__340.png",
      designation: "nodejs developer",
      doj: new Date("10/10/2015"),
      education: "BE",
      dob: new Date("11/17/1998"),
      companyname: "infosys",
      salary: 30000,
      location: "mysure"
    },
    {
      name: "prathi",
      id: 1,
      photo:
        "https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__340.png",
      designation: "nodejs developer",
      doj: new Date("10/10/2015"),
      education: "BE",
      dob: new Date("12/03/1997"),
      companyname: "infosys",
      salary: 30000,
      location: "mysure"
    },
    {
      name: "kiran",
      id: 1,
      photo:
        "https://cdn.pixabay.com/photo/2013/07/12/19/01/user-154199__340.png",
      designation: "nodejs developer",
      doj: new Date("10/10/2015"),
      education: "BE",
      dob: new Date("12/03/1997"),
      companyname: "infosys",
      salary: 30000,
      location: "mysure"
    },
    {
      name: "priya",
      id: 1,
      photo:
        "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png",
      designation: "nodejs developer",
      doj: new Date("10/10/2015"),
      education: "BE",
      dob: new Date("02/26/1997"),
      companyname: "infosys",
      salary: 30000,
      location: "mysure"
    },
    {
      name: "vishu",
      id: 1,
      photo:
        "https://cdn.pixabay.com/photo/2017/03/01/22/18/avatar-2109804__340.png",
      designation: "nodejs developer",
      doj: new Date("10/10/2015"),
      education: "BE",
      dob: new Date("19/09/1998"),
      companyname: "infosys",
      salary: 30000,
      location: "mysure"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
