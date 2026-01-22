/* NOTE: just make a separate siteIds.json file */
let sites = null;
let siteIds = new Array;
let count = 0;

fetch("./data/siteListMaster.json")
	.then(response => response.json())
	.then(values => {
		sites = values["sites"];
	})
	.catch(error => {
		console.log(error)
	});

fetch("./data/siteIds.json")
	.then(response => response.json())
	.then(values => {
		siteIds=values["sites"];
		// siteIds.push(values["sites"]);
		let list = document.getElementById('site-list');
		for (var i = 0; i < siteIds.length; i++) {
			let option = document.createElement("option");
			option.innerText = siteIds[i];
			list.appendChild(option);
		}
	})
	.catch(error => {
		console.log(error)
	});
