const userQuery = document.getElementById("site-choice");
const clearInput = document.getElementById("clear-input");
const elSite = document.getElementById("site");

userQuery.addEventListener('change',
	(e) => {
		if (siteIds.includes(e.target.value)) {
			elSite.innerText = e.target.value;
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
