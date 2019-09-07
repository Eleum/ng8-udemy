import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.sass"]
})
export class ServerComponent implements OnInit {
  serverStatus = "offline";

  constructor() { }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
