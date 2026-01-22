const userQuery = document.getElementById("site-choice");
const clearInput = document.getElementById("clear-input");
const elSite = document.getElementById("site");
const elWarningsUl = document.getElementById("warnings-ul");
const elPreferredRoutes = document.getElementById("preferredRoutes");

function createWarningItem(warnings) {
		if (warnings.length > 0) {
			for (let i = 0; i < warnings; i++) {
				elWarningsUl.foreach((e) => {
					let li = document.createElement("li");
					li.innerText = warnings[i];
					elWarningsUl.appendChild(li);
				})
			}
		}
}

userQuery.addEventListener('change',
	(e) => {
		if (siteIds.includes(e.target.value)) {
			elSite.innerText = e.target.value;
			// Need to make 'sites' contain dict with key being siteId
			/* grave notation doesn't work for this
				* you must use bracket notation */
			createWarningItem(sites[e.target.value]);
			// elWarningsUl.innertext = sites[e.target.value].warnings;
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
	}
);
