let form = document.getElementById("form");

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
    method: "POST",
    body: JSON.stringify(phoneObj),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWVkNjI1NGU4ODAwMTgzZjE4OGMiLCJpYXQiOjE2OTk2MDYyMzEsImV4cCI6MTcwMDgxNTgzMX0.il0AUW1BBuBE2WMFVPMYGY_QfIMpFiSaMEBmeBy-2YE",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((product) => {
      alert("Prodotto aggiunto con successo con id :" + product._id);
    });
};
