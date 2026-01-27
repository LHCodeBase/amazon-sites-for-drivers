const elSiteQuery = document.getElementById("site-query");
const clearInput = document.getElementById("clear-input");
const elSite = document.getElementById("site");
const elWarningsUl = document.getElementById("warnings-ul");
const elRoutes = document.getElementById("preferredRoutes");
const elGoButton = document.getElementById("go-button");
const elNav = document.getElementById("nav");
const welcomeMsg = "Select site";

elSite.innerText = welcomeMsg;

function setSite(e) {
			if (siteIds.includes(e.target.value)) {
			/* Site Id */
			elSite.innerText = e.target.value;

			/* Take focus off nav */
			elSite.focus();
			

			/* grave notation doesn't work for this you must use bracket notation */

			/* Warnings */
			elWarningsUl.innerText = "";
			if (sites[e.target.value]["warnings"].length) {
				sites[e.target.value]["warnings"].forEach((text) => {
					let li = document.createElement("li");
					li.innerText = text;
					elWarningsUl.appendChild(li);
				})
			}

			/* Route */
			elRoutes.innerText = "";
			if (sites[e.target.value]["routes"].length) {
				sites[e.target.value]["routes"].forEach((text) => {
					let li = document.createElement("li");
					li.innerText = text;
					elRoutes.appendChild(li);
				})
			}
		}
}


/* Clear everything first */
elSiteQuery.addEventListener('change',
	(e) => {
		setSite(e);
	}
);


elSiteQuery.addEventListener('click',
	(e) => {
		if (siteIds.includes(e.target.value)) {
			e.target.value = "";
		}
	}
);

clearInput.addEventListener('click', 
	(e) => {
		elSiteQuery.value = "";
		elSite.innerText = welcomeMsg;
		elWarningsUl.innerText = "";
		elRoutes.innerText = "";
	}
);

