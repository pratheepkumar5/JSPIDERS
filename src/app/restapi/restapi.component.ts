import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-restapi",
  templateUrl: "./restapi.component.html",
  styleUrls: ["./restapi.component.css"]
})
export class RestapiComponent implements OnInit {
  private playerUrl =
    "https://cricapi.com/api/playerFinder?apikey=a8ObwDXpGlQWXxpl4NRcCflUm3G2&name=";
  constructor(private http: HttpClient) {}
  playerInfo = [];
  searchPlayer(player) {
    this.http.get<any>(`${this.playerUrl}${player}`).subscribe(user => {
      console.log(user);
      this.playerInfo = user.data;
    });
  }

  ngOnInit() {}
}
