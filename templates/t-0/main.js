let file = "";
fetch("/main.js")
    .then((res) => res.text())
    .then((file_) => (file = file_));

setTimeout(() => {
    console.log(file);
}, 2000);
