const cwee = {
    personal_details,
    work_experiences,
    skills,
    educations,
};

const elements = {
    personal_details_elements: person_elements,
    work_experiences_elements: job_elements,
    skills_elements: skill_elements,
    educations_elements: education_elements,
};

const print_resume_btn = document.getElementById("print-resume-btn");

print_resume_btn.addEventListener("click", () => {
    localStorage.setItem("cwee", JSON.stringify(cwee));
    localStorage.setItem("elements", JSON.stringify(elements));
    window.location.href = "./templates/t-0/main.html";
    console.log("acha");
});
