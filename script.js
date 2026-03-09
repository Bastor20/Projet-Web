// ===========================
// LIGHTBOX
// Affiche une photo en grand au clic
// ===========================

function ouvrirLightbox(img) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("active");

    lightboxImg.onclick = function(e) {
        e.stopPropagation();
    };
}

function fermerLightbox() {
    document.getElementById("lightbox").classList.remove("active");
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        fermerLightbox();
    }
});

// ===========================
// BOUTON DÉTAILS PROJETS
// Affiche ou cache la description d'un projet au clic
// ===========================

function toggleDetails(id) {
    var details = document.getElementById(id);
    var bouton = details.previousElementSibling;

    if (details.classList.contains("visible")) {
        details.classList.remove("visible");
        bouton.textContent = "Voir les détails ▾";
    } else {
        details.classList.add("visible");
        bouton.textContent = "Masquer les détails ▴";
    }
}

// ===========================
// BOUTON RECORDS ATHLÉTISME
// Affiche le tableau de records au clic
// ===========================

function afficherRecords() {
    var tableau = document.getElementById("tableau-records");
    var bouton = document.getElementById("btn-records");

    if (tableau.classList.contains("visible")) {
        tableau.classList.remove("visible");
        bouton.textContent = "Afficher mes records ▾";
    } else {
        tableau.classList.add("visible");
        bouton.textContent = "Masquer les records ▴";
    }
}

// ===========================
// DATE DE DERNIÈRE VISITE
// Affiche la date et heure de la visite dans le footer
// ===========================

var elementDate = document.getElementById("derniere-visite");

if (elementDate) {
    var maintenant = new Date();
    var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };
    elementDate.textContent = maintenant.toLocaleString("fr-FR", options);
}
