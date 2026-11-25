const projectsList = document.querySelector("#projects-list");

if (projectsList) {
    fetch("/projects")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Projects request failed (${response.status})`);
            }

            return response.json();
        })
        .then(projects => {
            projects.forEach(project => {
                const item = document.createElement("li");
                const name = document.createElement("strong");
                const description = document.createElement("p");

                name.textContent = project.name;
                description.textContent = project.description;
                item.append(name, description);
                projectsList.append(item);
            });
        })
        .catch(error => {
            console.error("Unable to load projects:", error);
            projectsList.textContent = "Projects could not be loaded. Please try again later.";
        });
}