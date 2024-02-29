const personal_details = [
    {
        "person-address":
            "Shadman Colony, Rehman Shaheed Road, Noor Street, House #03",
        "person-email": "realnajmiter@gmail.com",
        "person-name": "Najam Ul Hassan",
        "person-phone": "+923405962392",
        "person-title": "Web Developer",
        "person-website": "najmiter.github.io",
    },
];
const work_experiences = [
    {
        "job-company": "netflix",
        "job-description":
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi numquam totam, magnam voluptatum dolorum laboriosam nulla nam debitis? Tempore, placeat.",
        "job-location": "usa",
        "job-period": "2016 - 2018",
        "job-title": "senior developer",
    },
    {
        "job-company": "google",
        "job-description":
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi numquam totam, magnam voluptatum dolorum laboriosam nulla nam debitis? Tempore, placeat.",
        "job-location": "uk",
        "job-period": "2018 - 2021",
        "job-title": "team manager",
    },
    {
        "job-company": "microsoft",
        "job-description":
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi numquam totam, magnam voluptatum dolorum laboriosam nulla nam debitis? Tempore, placeat.",
        "job-location": "new york, usa",
        "job-period": "2021 - 2022",
        "job-title": "graphic designer",
    },
];
const skills = [
    {
        "person-skill": "C++",
        "person-skill-percentage": 40,
    },
    {
        "person-skill": "JS",
        "person-skill-percentage": 40,
    },
    {
        "person-skill": "photoshop",
        "person-skill-percentage": 60,
    },
    {
        "person-skill": "C",
        "person-skill-percentage": 4,
    },
    {
        "person-skill": "python",
        "person-skill-percentage": 55,
    },
    {
        "person-skill": "rust",
        "person-skill-percentage": 30,
    },
    {
        "person-skill": "graphics",
        "person-skill-percentage": 20,
    },
    {
        "person-skill": "video editing",
        "person-skill-percentage": 10,
    },
    {
        "person-skill": "swift",
        "person-skill-percentage": 45,
    },
    {
        "person-skill": "html",
        "person-skill-percentage": 40,
    },
    {
        "person-skill": "css",
        "person-skill-percentage": 43,
    },
];
const educations = [
    {
        "degree-description":
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi numquam totam, magnam voluptatum dolorum laboriosam nulla nam debitis? Tempore, placeat.",
        "degree-location": "helan",
        "degree-period": "2016 - 2018",
        "degree-school": "public school",
        "degree-title": "matric",
    },
    {
        "degree-description":
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi numquam totam, magnam voluptatum dolorum laboriosam nulla nam debitis? Tempore, placeat.",
        "degree-location": "phalia",
        "degree-period": "2018 - 2020",
        "degree-school": "pgc",
        "degree-title": "inter",
    },
    {
        "degree-description":
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi numquam totam, magnam voluptatum dolorum laboriosam nulla nam debitis? Tempore, placeat.",
        "degree-location": "phalia",
        "degree-period": "2021 - 2025",
        "degree-school": "uog",
        "degree-title": "bscs",
    },
];

const handle_input = (elements) => {
    const object = {};

    for (const element of elements) {
        const input = document.getElementById(element);

        if (!input.value) return;

        object[element] = input.value;
    }

    elements.forEach(
        (element) => (document.getElementById(element).value = "")
    );

    return object;
};

const update_my_text = (id, text, array) => {
    if (id) {
        document.getElementById(id).textContent =
            `${array.length} ${text} added`;
    }
};

const save_data_into = (data, into, id, text) => {
    if (data) {
        into.push(data);

        update_my_text(id, text, into);

        poopup("Data saved successfully", "hsl(var(--constructive))");
        return true;
    } else {
        poopup("Please fill in all the fields", "hsl(var(--destructive))");
        return false;
    }
};

const poopup = (msg, color) => {
    const poop = document.getElementById("poopup");
    poop.textContent = msg;
    poop.style.color = color;

    poop.classList.add("poop");

    setTimeout(() => {
        poop.classList.remove("poop");
        poop.textContent = "";
    }, 3.5 * 1000);
};
