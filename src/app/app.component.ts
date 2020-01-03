import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "jspiders";

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyBeoZLiOpXAZKWQBs7LNn6aV0rtyvjT1b8",
      authDomain: "fullstack-angular-e1e5a.firebaseapp.com",
      databaseURL: "https://fullstack-angular-e1e5a.firebaseio.com",
      projectId: "fullstack-angular-e1e5a",
      storageBucket: "fullstack-angular-e1e5a.appspot.com",
      messagingSenderId: "851466836348",
      appId: "1:851466836348:web:743bf17d0bee02334a2cf9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
