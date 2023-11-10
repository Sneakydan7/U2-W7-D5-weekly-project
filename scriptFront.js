const params = new URLSearchParams(window.location.search);
const itemId = params.get("_id");

function getProducts(url) {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWVkNjI1NGU4ODAwMTgzZjE4OGMiLCJpYXQiOjE2OTk2MDYyMzEsImV4cCI6MTcwMDgxNTgzMX0.il0AUW1BBuBE2WMFVPMYGY_QfIMpFiSaMEBmeBy-2YE",
    },
  })
    .then((res) => res.json())
    .then((product) => {
      product
        .forEach((element) => {
          const row = document.getElementById("products");

          const col = document.createElement("div");
          col.className = "col-md-4";

          const card = document.createElement("div");
          card.className = "card mb-4 shadow-sm";

          const img = document.createElement("img");
          img.className = "card-img-top object-fit-cover";
          img.style.height = "350px";
          img.src = element.imageUrl;

          const body = document.createElement("div");
          body.className = "card-body";

          const h5 = document.createElement("div");
          h5.className = "card-title h2";
          h5.innerText = element.name;

          const p = document.createElement("p");
          p.className = "card-text text-truncate";
          p.innerText = element.description;

          const cardfoot = document.createElement("div");
          cardfoot.className =
            "d-flex justify-content-between align-items-center";

          const btngroup = document.createElement("div");
          btngroup.className = "btn-group";

          const moreBtn = document.createElement("button");
          moreBtn.className = "btn btn-sm btn-outline-secondary";
          moreBtn.type = "button";
          moreBtn.innerText = "Scopri di più";

          const modifyBtn = document.createElement("button");
          modifyBtn.className = "btn btn-sm btn-danger";
          modifyBtn.type = "button";
          modifyBtn.innerText = "Modifica";

          modifyBtn.onclick = function (e) {
            window.location.assign(`./backoffice.html?_id=${element._id}`);
          };

          btngroup.appendChild(moreBtn);
          btngroup.appendChild(modifyBtn);
          cardfoot.appendChild(btngroup);

          body.appendChild(h5);
          body.appendChild(p);
          body.appendChild(cardfoot);
          card.appendChild(img);
          card.appendChild(body);
          col.appendChild(card);
          row.appendChild(col);
        })
        .catch((err) => console.log("error", err));
    });
}
window.onload = () => {
  getProducts();
};
