import * as SDK from "azure-devops-extension-sdk";

SDK.init();

SDK.ready().then(() => {
  document.getElementById("widget-container").innerText = "Hello from your widget!";
});
