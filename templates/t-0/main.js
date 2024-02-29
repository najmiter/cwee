const cwee = JSON.parse(localStorage.getItem("cwee"));
const elements = JSON.parse(localStorage.getItem("elements"));
const sections = Object.keys(cwee);

// console.log(cwee["personal_details"]);
// console.log(elements["personal_details_elements"]);

const main = document.createElement("main");
main.setAttribute("class", "wrapper");
const section_div = document.createElement("hr");
section_div.setAttribute("class", "section-dividor");

const header = CreatePersonalDetails(cwee["personal_details"].at(0));
main.appendChild(header);
main.appendChild(document.createElement("hr"));

const work_section = CreateWorkExperience(cwee["work_experiences"]);
main.appendChild(work_section);
main.appendChild(section_div.cloneNode());

const skill_section = CreateSkills(cwee["skills"]);
main.appendChild(skill_section);
main.appendChild(section_div.cloneNode());

const education_section = CreateEducation(cwee["educations"]);
main.appendChild(education_section);
main.appendChild(section_div.cloneNode());

document.getElementById("jism").appendChild(main);

const progress_bar = document.querySelectorAll(".progress");
progress_bar.forEach((bar) => {
    if (bar.getAttribute("value") < 50) {
        bar.style.setProperty("--_clr-progrees", "var(--clr-dim)");
    }
});

print(document);
