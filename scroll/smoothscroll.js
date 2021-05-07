window.onload=async function(){
	let scrolling = false;
	console.log("loaded");

	document.body.addEventListener('keydown', async function(e) {
		console.log(e.key);
		if(e.key === "Enter"){
			scrolling = !scrolling;
			while (scrolling) {
				window.scrollTo(window.scrollX + 1, 0);
				await new Promise(r => setTimeout(r, 40)); // this is still a little too smooth...
			}
		}
	});
}