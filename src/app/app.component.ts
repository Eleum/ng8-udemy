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
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  clearUserName() {
    this.userName = "";
  }

  onUserNameChange(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }
}
