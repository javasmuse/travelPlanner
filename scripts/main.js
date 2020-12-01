document.querySelector("#destination_deets_form").addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    let destinationName = event.target.elements["destiny".value];
    let destinationLocation = event.target.elements["location".value];
    let destinationPhoto = event.target.elements["photo".value];
    let destinationDesc = event.target.elements["describ".value];

    resetFormValues(event.target);

    let destinationCard = createDestinationCard(
        destinationName, destinationLocation, destinationPhoto, destinationDesc
    );

    let wishListContainer = document.querySelector("#destination_container");

    if (wishListContainer.children.length === 0) {
        document.querySelector("#title").innerHTML = "My WishList"
    }

    document.querySelector("#destination_container").appendChild(destinationCard);
}

function resetFormValues(form) {
    for (var i = 0; i < form.length; i++) {
        form.elements[i].value = "";
    }
}

function createDestinationCard(destiny, location, photo, describ) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.style.width = "15rem";
    card.style.height = "fit-content";
    card.style.margin = "20px";

    let img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("alt", name);

    let constantPhotoUrl = "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
    if (photoUrl.length === 0) {
        img.setAttribute("src", constantPhotoUrl);
    } else {
        img.setAttribute("src", photoUrl);
    }

    card.appendChild(img);

    // Create the card body with the destination name, location, and description and append it to the card
    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    var cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    var cardSubtitle = document.createElement("h6");
    cardSubtitle.setAttribute("class", "card-subtitle mb-2 text-muted");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    // Only add description text if the user entered some
    if (description.length !== 0) {
        var cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text");
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    var buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("class", "buttons_container");

    var cardEditBtn = document.createElement("button");
    cardEditBtn.setAttribute("class", "btn btn-warning");
    cardEditBtn.innerText = "Edit";
    cardEditBtn.addEventListener("click", editDestination);

    var cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.setAttribute("class", "btn btn-danger");
    cardDeleteBtn.innerText = "Remove";
    cardDeleteBtn.addEventListener("click", removeDestination);

    buttonsContainer.appendChild(cardEditBtn);
    buttonsContainer.appendChild(cardDeleteBtn);

    cardBody.appendChild(buttonsContainer);

    card.appendChild(cardBody);

    return card;
}

function editDestination(event) {
    var cardBody = event.target.parentElement.parentElement;
    var title = cardBody.children[0];
    var subTitle = cardBody.children[1];