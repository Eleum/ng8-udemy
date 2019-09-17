import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.sass"]
})
export class ServerComponent implements OnInit {
  serverName = "";
  serverStatus = "offline";
  servers = ["Test server", "Test server 2"];

  constructor() {
    this.serverStatus = Math.random() >= 0.5 ? "online" : "offline";
  }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
   this.servers.push(this.serverName);
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }
}
