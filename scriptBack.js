let form = document.getElementById("form");
const params = new URLSearchParams(window.location.search);
const itemId = params.get("_id");
console.log(itemId);
const method = itemId ? "PUT" : "POST";
const URL_ITEM = "https://striveschool-api.herokuapp.com/api/product/" + itemId;
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
      });
  }
};
form.onsubmit = function (e) {
  e.preventDefault();
  const phoneObj = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imgurl").value,
    price: document.getElementById("price").value,
  };

  fetch("https://striveschool-api.herokuapp.com/api/product", {
    method,
    body: JSON.stringify(phoneObj),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWVkNjI1NGU4ODAwMTgzZjE4OGMiLCJpYXQiOjE2OTk2MDYyMzEsImV4cCI6MTcwMDgxNTgzMX0.il0AUW1BBuBE2WMFVPMYGY_QfIMpFiSaMEBmeBy-2YE",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((product) => {
      alert("Prodotto aggiunto con successo !");
    });
};
