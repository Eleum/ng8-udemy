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

  // task
  secret = "password: fuck off";
  isSecretShown = false;
  logs = [];

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

  showSecret() {
    this.isSecretShown = !this.isSecretShown;
    this.logs.push({ date: Date.now(), status: this.isSecretShown });
  }

  getLogStyle(index: number) {
    return index > 4 ? "blue" : "white";
  }
}
