const form = document.getElementById("user-form");
const submitButton = document.getElementById("submit-btn");

let timeout = null;
let errors = {
  nickName: true,
  email: true,
  password: true,
};
const mailFormatRegEx = /^[^@]+@\w+(\.\w+)+\w$/;

document.querySelectorAll(".form-box").forEach((box) => {
  const boxInput = box.querySelector("input");

  boxInput.addEventListener("keydown", (evt) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(`Input ${boxInput.name} value: `, boxInput.value);

      validation(box, boxInput);
    }, 300);
  });
});

const validation = (box, boxInput) => {
  if (boxInput.value === "") {
    showError(true, box, boxInput);
  } else {
    showError(false, box, boxInput);
  }

  if (boxInput.name == "email") {
    if (!boxInput.value.match(mailFormatRegEx)) {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  }

  if (boxInput.name == "password") {
    if (boxInput.value.length <= 6) {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  }

  submitController();
};

const showError = (check, box, boxInput) => {
  if (check) {
    box.classList.remove("form-success");
    box.classList.add("form-error");
    errors[boxInput.name] = true;
  } else {
    box.classList.remove("form-error");
    box.classList.add("form-sucess");
    errors[boxInput.name] = false;
  }
};

const submitController = () => {
  console.log(errors);
  if (errors.nickName || errors.email || errors.password) {
    submitButton.toggleAttribute("disabled", true);
  } else {
    submitButton.toggleAttribute("disabled", false);
  }
};

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  console.log([...formData]);
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});
