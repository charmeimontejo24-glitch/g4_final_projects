/* =========================================================
   BELLADORE
   HOME PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProduct(event, productLink) {

    event.preventDefault();


    const productCard = productLink.closest(".product-card");


    const productName =
        productCard.getAttribute("data-product");


    const productPrice =
        productCard.getAttribute("data-price");


    const productDescription =
        productCard.getAttribute("data-description");


    document.getElementById("modalProductName").textContent =
        productName;


    document.getElementById("modalProductPrice").textContent =
        productPrice;


    document.getElementById("modalProductDescription").textContent =
        productDescription;


    document.getElementById("productModal").classList.add("show");


    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE PRODUCT MODAL
========================================================= */

function closeProduct() {

    document
        .getElementById("productModal")
        .classList.remove("show");


    document.body.style.overflow = "auto";

}


/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("productModal");


    if (event.target === modal) {

        closeProduct();

    }

});


/* =========================================================
   CLOSE MODAL WITH ESC KEY
========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeProduct();

    }

});


/* =========================================================
   ADD TO BAG
========================================================= */

function addToBag() {

    const productName =
        document.getElementById("modalProductName").textContent;


    alert(
        productName +
        " has been added to your bag!"
    );

}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

window.addEventListener("scroll", function() {

    const navbar =
        document.querySelector(".navbar");


    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(8, 7, 7, 0.97)";

    } else {

        navbar.style.background =
            "#080707";

    }

});


/* =========================================================
   SMOOTH SCROLL FOR HOME PAGE BUTTON
========================================================= */

document.addEventListener("DOMContentLoaded", function() {


    const exploreButton =
        document.querySelector(
            '.gold-button[href="#best-sellers"]'
        );


    if (exploreButton) {

        exploreButton.addEventListener(
            "click",
            function(event) {

                event.preventDefault();


                const section =
                    document.getElementById(
                        "best-sellers"
                    );


                if (section) {

                    section.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            }
        );

    }


});

/* =========================================================
   END OF HOME PAGE CHARM PROPERTY
========================================================= */
