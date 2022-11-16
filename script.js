const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

  // Здесь твой код
  const name = form.querySelector("#name").value;
  const secondName = form.querySelector("#secondName").value;
  const email = form.querySelector("#email").value;
  const phone = form.querySelector("#phone").value;

  // fetch('http://46.21.248.81:3001/user'
  fetch('https://polinashneider.space/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      secondName,
      email,
      phone
    })
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      alert(data);
      form.reset();
    })
    .catch((error) => {
      alert(error);
    })

});
