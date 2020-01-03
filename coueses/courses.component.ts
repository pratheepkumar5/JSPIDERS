import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "courses", // component name
  //render template
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class coursesComponent implements OnInit {
  //to use services pr api we need to use controctor
  // dependancy injuction is => private http: HttpClient
  constructor(private http: HttpClient) {
    this.http.get("http://api.github.com/users").subscribe(user => {
      console.log(user);
    });
  }

  ngOnInit() {
    /* window
        .fetch("http://api.github.com/users")
        .then(data => {
          data
            .json()
            .then(info => {
              console.log(info);
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }*/
  }
  /* languages = ["expressjs", "java", "python", "c++", "angular", "react"];
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
         dob: new Date("09/05/1998"),
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
         dob: new Date("03/12/1997"),
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
         ducation: "BE",
         dob: new Date("09/19/1998"),
         companyname: "infosys",
         salary: 30000,
         location: "mysure"
       }
     ];
     addnewuser() {
       this.users.push({
         name: "ram",
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
       });
     }
     removeUser(u) {
       let index = this.users.indexOf(u);
       this.users.splice(index, 1);
     }
   }
   */
}
