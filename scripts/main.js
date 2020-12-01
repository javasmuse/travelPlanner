// can listen for a submit on the form or assign an id to listen for



document.getElementById("myForm").addEventListener("submit", function (event) {
    // prevent page resetting and needed for the next line
    event.preventDefault();

    let destN = document.getElementById("destname").value;
    let locate = document.getElementById("locate").value;
    let photo = document.getElementById("photo").value;
    let notes = document.getElementById("notes").value;

    let img = document.createElement("img");
    let constantPic = "https://www.snowmonkeyresorts.com/wp-content/uploads/2016/06/Photo15.jpg";

    if (photo.length === 0) {
        img.src = constantPic;
    } else {
        img.src = photo;
    }

    document.getElementById("card-one").appendChild(img);

    let newDestPara = document.createElement("p");
    newDestPara.innerHTML = destN;
    document.getElementById("card-one").appendChild(newDestPara);

    let newLocaPara = document.createElement("p");
    newLocaPara.innerHTML = locate;
    document.getElementById("card-one").appendChild(newLocaPara);

    let notesPara = document.createElement("p");
    notesPara.innerHTML = notes;
    document.getElementById("card-one").appendChild(notesPara);

    let buttonBox = document.createElement("div");
    buttonBox.setAttribute("class", "button_box");

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "button");
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", editDestination);
    buttonBox.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "button");
    deleteBtn.innerText = "Delete";
    buttonBox.appendChild(deleteBtn);

    document.getElementById("card-one").appendChild(buttonBox);

    buttonBox.style.alignSelf = "center";

    // not currently adding 'new card' - should do so 

    function editDestination(event) {
        //// here we add edits

    }

});