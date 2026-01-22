const userQuery = document.getElementById("site-choice");
const clearInput = document.getElementById("clear-input");
const elSite = document.getElementById("site");
const elWarningsUl = document.getElementById("warnings-ul");
const elPreferredRoutes = document.getElementById("preferredRoutes");


userQuery.addEventListener('change',
	(e) => {
		if (siteIds.includes(e.target.value)) {
			elSite.innerText = e.target.value;
			/* grave notation doesn't work for this you must use bracket notation */
			sites[e.target.value]["warnings"].forEach((text) => {
				let li = document.createElement("li");
				li.innerText = text;
				elWarningsUl.appendChild(li);
			})
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

