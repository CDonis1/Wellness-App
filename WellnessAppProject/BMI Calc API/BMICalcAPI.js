var hamburger = {
    menu: document.querySelector("#NavMenuIcon"),
    links: document.querySelector(".NavLinks"),

    toggle: function () { //decide if it toggle in or toggle out
        if (this.menu.classList.contains("toggle")) {
            this.menu.classList.toggle("toggle");
            this.toggleOut();
        }
        else {
            this.menu.classList.toggle("toggle");
            this.toggleIn();
        }
    },
    toggleIn: function () {
        this.menu.src = "assets/icon/x-icon.svg";
        this.menu.style.color = "#a6f";
        this.links.style.display = "block";
        this.links.style.animation = "toggleIn 0.3s";
        this.links.style.right = "0vw";
    },
    toggleOut: function () {
        this.menu.src = "assets/icon/hamburger-icon.svg";
        this.menu.style.color = "#ffd506";
        this.links.style.animation = "toggleOut 0.3s";
        this.links.style.right = "-101vw";
    },
    toggleClick: function () {
        this.menu.src = "assets/icon/hamburger-icon.svg";
        this.menu.style.color = "#ffd506";
        this.links.style.animation = "toggleOut 0.3s";
        this.links.style.right = "-101vw";
    }
}

//nav buttons
hamburger.menu.addEventListener("click", function () { hamburger.toggle() });
hamburger.links.addEventListener("click", function () { hamburger.toggleClick() });
document.addEventListener("click", function (event) {
    var isClickInsideMenu = hamburger.menu.contains(event.target);

    if (!isClickInsideMenu) {
        if (hamburger.menu.classList.contains("toggle")) {
            hamburger.menu.classList.toggle("toggle");
            hamburger.toggleOut();
        }
    }
});

var input = {
    weight: document.querySelector("#input-weight"),
    height: document.querySelector("#input-height"),
    warning: document.querySelector(".warning"),

    whichInput: function () {

    },

    invalidInput: function () {

    },

    validInput: function () {

    }
};

//
//TO BUILD
//detect which the actual used input and direct it to a valid/invalid function 
//

input.weight.addEventListener("onkeypress", function () {
    var value = input.weight.value;

    if (isNaN(value)) {
        input.whichInput("weight", function () { invalidInput() });
    }
});
