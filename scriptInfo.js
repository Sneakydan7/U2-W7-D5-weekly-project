const params = new URLSearchParams(window.location.search);
const itemId = params.get("_id");

const URL_ITEM = "https://striveschool-api.herokuapp.com/api/product/" + itemId;

window.onload = () => {
  fetch(URL_ITEM, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWVkNjI1NGU4ODAwMTgzZjE4OGMiLCJpYXQiOjE2OTk2MDYyMzEsImV4cCI6MTcwMDgxNTgzMX0.il0AUW1BBuBE2WMFVPMYGY_QfIMpFiSaMEBmeBy-2YE",
    },
  })
    .then((res) => res.json())
    .then((product) => {
      const { name, description, brand, imageUrl, price } = product;

      let img = document.createElement("img");
      img.className = "img-fluid rounded object-fit-cover";
      img.src = imageUrl;
      img.style.height = "500px";

      let imageBox = document.getElementById("image");
      imageBox.appendChild(img);

      let title = document.createElement("h1");
      title.className = "h1 text-white";
      title.innerText = name;
      let nameBox = document.getElementById("name");
      nameBox.appendChild(title);
      let subtitle = document.createElement("p");
      subtitle.className = "h5 fst-italic text-light";
      subtitle.innerText = description;

      let descBox = document.getElementById("description");
      descBox.appendChild(subtitle);

      let brnd = document.createElement("p");
      brnd.className = "h5  text-light";
      brnd.innerText = brand;

      let brndBox = document.getElementById("brand");
      brndBox.appendChild(brnd);

      let prices = document.createElement("button");
      prices.className = "btn btn-light ";
      prices.innerText = price + "$";

      let priceBox = document.getElementById("price");
      priceBox.appendChild(prices);
    });
};
