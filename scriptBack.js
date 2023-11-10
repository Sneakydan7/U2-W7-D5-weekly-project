let form = document.getElementById("form");
const params = new URLSearchParams(window.location.search);
const itemId = params.get("_id");
console.log(itemId);

const method = itemId ? "PUT" : "POST";

const URL_ITEM = itemId
  ? "https://striveschool-api.herokuapp.com/api/product/" + itemId
  : "https://striveschool-api.herokuapp.com/api/product/";

window.onload = () => {
  if (itemId) {
    fetch(URL_ITEM, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWVkNjI1NGU4ODAwMTgzZjE4OGMiLCJpYXQiOjE2OTk2MDYyMzEsImV4cCI6MTcwMDgxNTgzMX0.il0AUW1BBuBE2WMFVPMYGY_QfIMpFiSaMEBmeBy-2YE",
      },
    })
      .then((resp) => resp.json())
      .then((product) => {
        const { name, description, brand, imageUrl, price } = product;
        document.getElementById("name").value = name;
        document.getElementById("description").value = description;
        document.getElementById("brand").value = brand;
        document.getElementById("imgurl").value = imageUrl;
        document.getElementById("price").value = price;

        let submit = document.getElementById("submit");
        submit.innerText = "Modifica";
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger";
        deleteBtn.innerText = "Elimina";

        deleteBtn.addEventListener("click", () => deleteItem());

        let form = document.getElementById("form");
        form.appendChild(deleteBtn);
      });
  } else {
    document.getElementById("name").value = " ";
    document.getElementById("description").value = " ";
    document.getElementById("brand").value = " ";
    document.getElementById("imgurl").value = " ";
    document.getElementById("price").value = " ";
  }
};
form.onsubmit = function (e) {
  e.preventDefault();
  const productObj = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imgurl").value,
    price: document.getElementById("price").value,
  };

  fetch(URL_ITEM, {
    method,
    body: JSON.stringify(productObj),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWVkNjI1NGU4ODAwMTgzZjE4OGMiLCJpYXQiOjE2OTk2MDYyMzEsImV4cCI6MTcwMDgxNTgzMX0.il0AUW1BBuBE2WMFVPMYGY_QfIMpFiSaMEBmeBy-2YE",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((product) => {
      if (itemId) {
        alert("Prodotto modificato con successo!");
      } else {
        alert("Prodotto creato con successo!");
        window.location.assign("./frontoffice.html");
      }
    });
};
const deleteItem = () => {
  const acceptPrompt = confirm(
    "Sei sicuro di voler eliminare il prodotto? Non verrà più visualizzato in homepage."
  );
  if (acceptPrompt) {
    fetch(URL_ITEM, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWVkNjI1NGU4ODAwMTgzZjE4OGMiLCJpYXQiOjE2OTk2MDYyMzEsImV4cCI6MTcwMDgxNTgzMX0.il0AUW1BBuBE2WMFVPMYGY_QfIMpFiSaMEBmeBy-2YE",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((deletedItem) => {
        alert("Hai eliminato l'oggetto con successo ");
        document.getElementById("name").value = " ";
        document.getElementById("description").value = " ";
        document.getElementById("brand").value = " ";
        document.getElementById("imgurl").value = " ";
        document.getElementById("price").value = " ";
      });
  }
};
