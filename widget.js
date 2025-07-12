VSS.init({ explicitNotifyLoaded: true });

VSS.ready().then(() => {
  document.getElementById("widget-container").innerText = "Hello from your widget!";
  VSS.notifyLoadSucceeded();
});
