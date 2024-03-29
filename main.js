const personal_details_save_btn = document.getElementById(
    "persnoal-details-save-btn"
);

const work_experience_save_btn = document.getElementById(
    "work-experience-save-btn"
);

const skill_save_btn = document.getElementById("skill-save-btn");
const education_save_btn = document.getElementById("education-save-btn");

///
//// HANDLERS
///

personal_details_save_btn.addEventListener("click", () => {
    const data = handle_personal_details_save_btn();

    /// clear previous (if any)
    personal_details.length = 0;
    const didwe = save_data_into(data, personal_details);
    if (didwe) {
        const dis = document.getElementById("section-personal-details");
        dis.style.pointerEvents = "none";
        dis.style.opacity = "0.5";
        dis.style.userSelect = "none";
    }

    toggle_print_resume_btn_interactivity();
});

work_experience_save_btn.addEventListener("click", () => {
    const data = handle_work_experience_save_btn();

    save_data_into(
        data,
        work_experiences,
        "experience-added-count",
        "experience(s)"
    );

    toggle_print_resume_btn_interactivity();
});

skill_save_btn.addEventListener("click", () => {
    toggle_print_resume_btn_interactivity();
    const data = handle_skill_save_btn();

    if (data) {
        const exp = +data["person-skill-percentage"];
        data["person-skill-percentage"] = exp > 100 ? 100 : exp < 0 ? 0 : exp;

        save_data_into(data, skills, "skills-added-count", "skill(s)");
    } else {
        poopup("Please fill in all the fields", "hsl(var(--destructive))");
    }

    toggle_print_resume_btn_interactivity();
});

education_save_btn.addEventListener("click", () => {
    toggle_print_resume_btn_interactivity();
    const data = handle_education_save_btn();

    save_data_into(data, educations, "education-added-count", "degree(s)");

    toggle_print_resume_btn_interactivity();
});
