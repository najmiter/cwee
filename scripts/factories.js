function CreatePersonalDetails(
    {
        "person-name": name,
        "person-title": title,
        "person-website": website,
        "person-phone": phone,
        "person-email": email,
        "person-address": address,
    },
    img = "https://i.pravatar.cc/600?img=6"
) {
    const header = document.createElement("header");

    header.innerHTML = `
                <img
                    src=${img}
                    alt=""
                    class="avatar"
                />
                <div class="name-title">
                    <h1 id="person-name" class="name text-uppercase">${name}</h1>
                    <h3 id="person-title" class="title text-uppercase">${title}</h3>
                </div>
                <div class="other-details" style="text-align: right;">
                    <div class="details-line">
                        <p id="person-email" class="detail">${email}</p>
                        <p class="icon">📧</p>
                    </div>
                    <div class="details-line">
                        <p id="person-website" class="detail">${website}</p>
                        <p class="icon">🌏</p>
                    </div>
                    <div class="details-line">
                        <p id="person-phone" class="detail">${phone}</p>
                        <p class="icon">📞</p>
                    </div>
                    <div class="details-line">
                        <p id="person-address" class="detail">${address}</p>
                        <p class="icon">🏠</p>
                    </div>
                </div>
    `;

    return header;
}

function CreateWorkExperience(works) {
    const section = document.createElement("section");
    section.setAttribute("class", "work");
    section.innerHTML = `
        <h1 class="section-title text-uppercase">
            <span class="h-icon">↣</span> WORK EXPERIENCE</h1>`;

    const ul = document.createElement("ul");
    ul.setAttribute("class", "jobs");
    for (const work of works) {
        ul.appendChild(create_work_item(work));
    }

    section.appendChild(ul);
    return section;

    function create_work_item({
        "job-title": title,
        "job-location": location,
        "job-period": period,
        "job-company": company,
        "job-description": description,
    }) {
        const li = document.createElement("li");
        li.setAttribute("class", "grid job");

        li.innerHTML = `
            <div style="grid-area: line" class="line"></div>
            <div
                style="grid-area: job1"
                class="job-details flex flex-column gap-1">
                <h2 id="job-title" class="job-title text-uppercase">${title}</h2>
                <p
                    id="job-location"
                    class="job-location text-uppercase font-w300"
                >${location}</p>
                <p id="job-period" class="job-period font-w300">${period}</p>
            </div>
            <div
                style="grid-area: job2"
                class="flex flex-column gap-1">
                <h2
                    id="job-company"
                    class="job-title text-uppercase"
                >${company}</h2>
                <p
                    id="job-description"
                    class="job-description font-w300 line-h17"
                >${description}</p>
            </div>
        `;

        return li;
    }
}

function CreateSkills(skills) {
    const section = document.createElement("section");
    section.setAttribute("class", "section-skills");
    section.innerHTML = `
        <h1 class="section-title text-uppercase">
            <span class="h-icon">↣</span> skills</h1>`;

    const ul = document.createElement("ul");
    ul.setAttribute("class", "flex flex-column text-uppercase");
    for (const skill of skills) {
        ul.appendChild(create_skill_item(skill));
    }

    section.appendChild(ul);
    // section.innerHTML += `<hr class="section-dividor" />`;
    return section;

    function create_skill_item({
        "person-skill": skill,
        "person-skill-percentage": perc,
    }) {
        const li = document.createElement("li");
        li.setAttribute("class", "grid skills-list align-center");

        li.innerHTML = `
            <span class="h-icon">⧠</span>
            <h2 id="person-skill" class="skill-name">${skill}</h2>
            <progress
                id="person-skill-percentage"
                class="progress"
                value="${perc}"
                max="100"
            ></progress>
        `;

        return li;
    }
}

function CreateEducation(degrees) {
    const section = document.createElement("section");
    section.setAttribute("class", "education");

    section.innerHTML = `
    <h1 class="section-title text-uppercase">
        <span class="h-icon">↣</span> education</h1>
    `;

    const ul = document.createElement("ul");
    ul.setAttribute("class", "jobs");
    for (const degree of degrees) {
        ul.appendChild(create_degree_item(degree));
    }

    section.appendChild(ul);
    return section;

    function create_degree_item({
        "degree-title": title,
        "degree-location": location,
        "degree-period": period,
        "degree-school": school,
        "degree-description": description,
    }) {
        const li = document.createElement("li");
        li.setAttribute("class", "grid job");

        li.innerHTML = `
            <div style="grid-area: line" class="line"></div>
            <div
                style="grid-area: job1"
                class="job-details flex flex-column gap-1"
            >
                <h2
                    id="degree-title"
                    class="job-title text-uppercase"
                >${title}</h2>
                <p
                    id="degree-location"
                    class="job-location text-uppercase font-w300"
                >${location}</p>
                <p id="degree-period" class="job-period font-w300">${period}</p>
            </div>
            <div
                style="grid-area: job2"
                class="flex flex-column gap-1"
            >
                <h2
                    id="degree-school"
                    class="job-title text-uppercase"
                >${school}</h2>
                <p
                    id="degree-description"
                    class="job-description font-w300 line-h17"
                >${description}</p>
            </div>
        `;

        return li;
    }
}
