import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  userName = "";
  alertName = "";
  alertCreationStatus = "no alert was created";
  isAlertCreated = false;
  alerts = ["Test server", "Test server 2"];

  allowNewServer = false; // example

  displayStatus = false;
  displayStatusLogs = [];

  // as an example of property binding
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  createAlert() {
    this.isAlertCreated = true;
    this.alerts.push(this.alertName);
  }

  // as an example of event binding
  onUserNameChange(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }

  displayDetails() {
    this.displayStatus = !this.displayStatus;
    this.displayStatusLogs.push(`${Date.now().toLocaleString("ru-RU")} - ${this.displayStatus ? "shown" : "hidden"}`);
  }
}
