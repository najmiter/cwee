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

const save_data_into = (data, into, id, text) => {
    if (data) {
        into.push(data);

        if (id) {
            document.getElementById(id).textContent =
                `${into.length} ${text} added`;
        }

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
