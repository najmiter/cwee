const cwee = {
    personal_details,
    work_experiences,
    skills,
    educations,
};

const print_resume_btn = document.getElementById("print-resume-btn");

print_resume_btn.addEventListener("click", () => {
    localStorage.setItem("cwee", JSON.stringify(cwee));
    window.location.href = "./templates/t-0/main.html";
});
