const formData = new FormData(document.querySelector('form'));
const inputValue = formData.get("name");
console.log(inputValue);