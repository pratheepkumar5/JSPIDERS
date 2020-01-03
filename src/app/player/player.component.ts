import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  private playerUrl =
    "https://cricapi.com/api/playerStats?apikey=a8ObwDXpGlQWXxpl4NRcCflUm3G2&pid=35320";
  constructor(private http: HttpClient) {}
  playerInfo;
  searchPlayer(player) {
    this.http.get<any>(`${this.playerUrl}${player}`).subscribe(user => {
      //console.log(user);
      this.playerInfo = user.data;
    });
  }

  ngOnInit() {}
}
