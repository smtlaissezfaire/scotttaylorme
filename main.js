(function () {
  const list = document.getElementById("project-list");
  const projects = window.PROJECTS || [];

  projects.forEach(function (project) {
    const item = document.createElement("li");
    item.className = "project-card";

    const tag = document.createElement("span");
    tag.className = "project-tag";
    tag.textContent = project.tag;

    const title = document.createElement("h3");
    title.className = "project-title";

    if (project.url) {
      const link = document.createElement("a");
      link.href = project.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = project.name;
      title.appendChild(link);
    } else {
      title.textContent = project.name;
    }

    const description = document.createElement("div");
    description.className = "project-description";

    project.description.split("\n\n").forEach(function (paragraph) {
      const part = document.createElement("p");
      part.textContent = paragraph.trim();
      description.appendChild(part);
    });

    item.appendChild(tag);
    item.appendChild(title);
    item.appendChild(description);

    if (project.url) {
      const visit = document.createElement("a");
      visit.className = "project-link";
      visit.href = project.url;
      visit.target = "_blank";
      visit.rel = "noopener noreferrer";
      visit.textContent = "Visit →";
      item.appendChild(visit);
    }

    list.appendChild(item);
  });
})();
