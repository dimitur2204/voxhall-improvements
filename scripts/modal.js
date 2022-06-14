var dialogEl = document.getElementById("my-dialog");
var dialog = new A11yDialog(dialogEl);

if (sessionStorage.getItem("hasViewedDialog") !== "true") {
	setTimeout(() => {
		dialog.show();
		sessionStorage.setItem("hasViewedDialog", "true");
	}, 1000);
}
