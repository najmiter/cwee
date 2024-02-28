const handle_input = (elements) => {
    const object = {};

    for (const element of elements) {
        const input = document.getElementById(element);

        if (!input.value) return;

        object[element.replaceAll("-", "_")] = input.value;
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
    } else {
        console.error("please fill all the fields");
    }
};
