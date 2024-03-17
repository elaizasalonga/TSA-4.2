const figurines = [
  {
    name: "Hirono",
    overlayText: "Little Mischief series",
    image:
      "https://prod-america-res.popmart.com/default/5_ZVFFZu7ckA_1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    description:
      "It's always the cutest ones that are deemed to be the naughtiest too!  Let's see if you can keep up with <b> Hirono Little Mischief Series </b> as he's been busy playing pranks and getting himself into trouble. Nobody can stay angry with Hirono!",
    material: "PVC/ABS",
    size: "5.3 - 10.1 cm",
    blindBoxRules: "Blind Box refers to the type of packaging that keeps the collectible toy as a mystery until it is opened. Blind boxes typically come in series that shows a collection; some figurines are rarer to find than others, these are referred to as secret, hidden or chase figures.",
    price: "$15.99",
  },

  {
    name: "Zsiga",
    overlayText: "Twins Series",
    image:
      "https://prod-america-res.popmart.com/default/20231229_172733_745217__1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    description:
      "Propelled by the surging tide of progress, carried along by the words of others, Zsiga's own reflection becomes blurred. And so, in the empty space, a mirror gives birth to another version of Zsiga, tightly linked from skin to flesh. Please, take a moment to pause – we need to have a conversation.",
    material: "PVC/ABS",
    size: "Height about 7-9 cm",
    blindBoxRules: "Blind Box refers to the type of packaging that keeps the collectible toy as a mystery until it is opened. Blind boxes typically come in series that shows a collection; some figurines are rarer to find than others, these are referred to as secret, hidden or chase figures.",
    price: "$17.99",
  },
  {
    name: "Skullpanda",
    overlayText: "The Ink Plum Blossom Series",
    image:
      "https://prod-america-res.popmart.com/default/20231030_173333_009457__1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    description:
      "Come, let's enjoy the beauty of life together under the moonlight and amidst the peaceful atmosphere of SKULLPANDA. Let's be inspired by the delicate charm of blooming plum blossoms. Join us in savoring life's lovely moments with <b> SKULLPANDA The Ink Plum Blossom Series. </b>",
    material: "PVC/ABS",
    size: "Height about 8 cm",
    blindBoxRules: "Blind Box refers to the type of packaging that keeps the collectible toy as a mystery until it is opened. Blind boxes typically come in series that shows a collection; some figurines are rarer to find than others, these are referred to as secret, hidden or chase figures.",
    price: "$15.99",
  },
  {
    name: "Pucky",
    overlayText: "Sleeping Forest Series",
    image:
      "https://prod-america-res.popmart.com/default/01_bFyUUJkAZJ_1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    description:
      "PUCKY is a silent and delicate creature that loves to dream. Embrace the forest's magic, take a deep breath, and let PUCKY take you on the magical journey of your dreams! Embrace the Forest with PUCKY where the incarnates various plants in the Sleeping Forest, each with unique hairstyles and dreamy expressions.",
    material: "PVC/ABS",
    size: "5 - 9.8 cm",
    blindBoxRules: "Blind Box refers to thetype of packaging that keeps the collectible toy as a mystery until it is opened. Blind boxes typically come in series that shows a collection; some figurines are rarer to find than others, these are referred to as secret, hidden or chase figures.",
    price: "$15.99",
  },
];

let popupOpen = false;

function generateFigurinesCards() {
  const figurinesList = document.getElementById("figurinesList");
  figurinesList.innerHTML = "";

  figurines.slice(0, 4).forEach((figurine, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-4", "position-relative");
    card.setAttribute("data-index", index);

    card.innerHTML = `
          <h5 class="card-title">${figurine.name}</h5>
              <img src="${figurine.image}" class="card-img-top" alt="${figurine.name}">
              
              <div class="card-overlay">
                  <p class="overlay-text">${figurine.overlayText}</p>
              </div>
          `;
    card.addEventListener("click", () => openPopup(figurine));
    figurinesList.appendChild(card);
  });
}

function openPopup(figurine) {
  const popup = document.getElementById("popup");

  if (!popupOpen) {
    popup.innerHTML = `
            <div class="popup-content">
              <div class="popup-image">
                <img src="${figurine.image}" class="popup-img" alt="${figurine.name}">
              </div>
              <div class="popup-info">
                <h2>${figurine.name}</h2>
                <p><strong>Material:</strong> ${figurine.material}</p>
                <p><strong>Size:</strong> ${figurine.size}</p>
                <p>${figurine.description}</p>
                <p><strong>Blind Box Rules:</strong> ${figurine.blindBoxRules}</p>
                <p><strong>Price:</strong> ${figurine.price}</p>
              </div>
            </div>
          `;
    popup.style.display = "block";
    popupOpen = true;
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  popupOpen = false;
}

document.getElementById("menuButton").addEventListener("click", closePopup);
generateFigurinesCards();