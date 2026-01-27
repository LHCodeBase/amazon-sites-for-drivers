const userQuery = document.getElementById("site-query");
const clearInput = document.getElementById("clear-input");
const elSite = document.getElementById("site");
const elWarningsUl = document.getElementById("warnings-ul");
const elRoutes = document.getElementById("preferredRoutes");
const welcomeMsg = "Select site";

elSite.innerText = welcomeMsg;


/* Clear everything first */
userQuery.addEventListener('change',
	(e) => {
		if (siteIds.includes(e.target.value)) {
			/* Site Id */
			elSite.innerText = e.target.value;

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
);


userQuery.addEventListener('click',
	(e) => {
		if (siteIds.includes(e.target.value)) {
			e.target.value = "";
		}
	}
);

clearInput.addEventListener('click', 
	(e) => {
		userQuery.value = "";
		elSite.innerText = welcomeMsg;
		elWarningsUl.innerText = "";
		elRoutes.innerText = "";
	}
);

