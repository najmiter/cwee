const cwee = {
    personal_details,
    work_experiences,
    skills,
    educations,
};

const print_resume_btn = document.getElementById("print-resume-btn");

const toggle_print_resume_btn_interactivity = () => {
    if (
        !(
            personal_details.length > 0 &&
            work_experiences.length > 0 &&
            skills.length > 0 &&
            educations.length > 0
        )
    ) {
        print_resume_btn.style.pointerEvents = "none";
        print_resume_btn.style.opacity = 0.4;
    } else {
        print_resume_btn.style.pointerEvents = "all";
        print_resume_btn.style.opacity = "1";
    }
};

print_resume_btn.addEventListener("click", () => {
    localStorage.setItem("cwee", JSON.stringify(cwee));
    window.location.href = "./templates/t-0/main.html";
});
