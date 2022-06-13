var dialogEl = document.getElementById("my-dialog");
var dialog = new A11yDialog(dialogEl);

dialog.on("show", function (dialogEl, triggerEl) {
	console.log(dialogEl);
	console.log(triggerEl);
});
if (localStorage.getItem("hasViewedDialog") !== "true") {
	setTimeout(() => {
		dialog.show();
		localStorage.setItem("hasViewedDialog", "true");
	}, 1000);
}
