import { fetchApiData } from './api';

export function createDogCard(dogData: any) {
    const dogCard = document.createElement('div');
    dogCard.classList.add('dog-card');

    const img = document.createElement('img');
    img.alt = dogData.dogName;
    const imageLoader = new Image();
    let error = document.createElement('p');
    error.textContent = "Leider kein Bild vorhanden!";
    error.style.display = 'none';
    dogCard.appendChild(error);

    imageLoader.onerror = function() {
        console.log("error");
        img.style.display = 'none';
        error.style.display = 'block';
    };

    imageLoader.onload = function() {
        img.style.display = 'block';
        error.style.display = 'none';
        img.src = dogData.image;
    };

    imageLoader.src = dogData.image;
    const h2 = document.createElement('h2');
    h2.textContent = dogData.dogName;
    h2.id = dogData.dogName;

    const button = document.createElement('button');
    button.classList.add('add-to-favorites');
    button.textContent = 'Zu Favoriten hinzufügen';
    button.disabled = true;

    dogCard.appendChild(img);
    dogCard.appendChild(h2);
    dogCard.appendChild(button);

    return dogCard;
}

// Funktion zum Rendern der API-Daten in den Container
async function renderApiData(apiData: any[]) {
    const apiDataContainer = document.getElementById('apiDataContainer');
    if (apiDataContainer) {
        for (const dogName in apiData) {
            const dogImage = await fetchApiData('https://dog.ceo/api/breed/' + dogName + '/images/random');
            const dogData = {"dogName": dogName, "image": dogImage.message};
            const dogCard = createDogCard(dogData);
            apiDataContainer.appendChild(dogCard);
        }
    }
}

function updateFavoriteButton(button: any, isFavorite: boolean) {
    if (button) {
        if (isFavorite) {
            button.textContent = 'Als Favorit entfernen';
            button.style.backgroundColor = '#c00';
        } else {
            button.textContent = 'Zu Favoriten hinzufügen';
            button.style.backgroundColor = '#3498db';
        }
    }
}

function showFavorites() {
    const favoritesContainer = document.getElementById('favoritesContainer');
    if (favoritesContainer) {
        const ul = document.createElement('ul');
        ul.classList.add("favorites-list");
        let item = "";
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        for (const dogName of favorites) {
            const listItem = document.createElement('li');
            listItem.textContent = dogName;
            listItem.classList.add("favorite-item");
            ul.appendChild(listItem);
        }
        favoritesContainer.appendChild(ul);
    }
}

// Zeige das Ladesymbol, wenn die Seite geladen wird
window.addEventListener('load', () => {
    const loadingIcon = document.getElementById('loading-icon');
    if (loadingIcon) {
        loadingIcon.style.display = 'block';
    }
});

function showNotification(message: string, success = true) {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.textContent = message;
        notification.style.backgroundColor = success ? '#4CAF50' : '#ff0000';
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
}

// Hauptfunktion, um die Seite zu initialisieren
async function init() {
    // API-Daten abrufen
    console.log("TEST Deployment/Main Branch");
    const apiData = await fetchApiData('https://dog.ceo/api/breeds/list/all');
    // API-Daten in den Container rendern
    await renderApiData(apiData.message);
    const loadingIcon = document.getElementById('loading-icon');
    if (loadingIcon) {
        loadingIcon.style.display = 'none';
    }
    // Event-Handler für Hinzufügen und Entfernen von Favoriten
    const addToFavoritesButtons = document.getElementsByClassName('add-to-favorites');
    for (const button of addToFavoritesButtons) {
        button.disabled = false;

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const selectedDogCar = button.closest('.dog-card');
        const h2Element = selectedDogCar.querySelector('h2');
        if (h2Element) {
            const dogName = h2Element.id;
            if (favorites.includes(dogName)) {
                updateFavoriteButton(button, true);
            }
        }
    }
    if (addToFavoritesButtons) {
        for (const button of addToFavoritesButtons) {
            button.addEventListener('click', (event) => {
                const selectedDogCard = event.target.closest('.dog-card');
                if (selectedDogCard) {
                    const h2Element = selectedDogCard.querySelector('h2');
                    if (h2Element) {
                        const dogName = h2Element.id;
                        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                        if (!favorites.includes(dogName)) {
                            // Hinzufügen des Hundes zu localStorage, wenn er noch nicht vorhanden ist
                            favorites.push(dogName);
                            favorites.sort();
                            localStorage.setItem('favorites', JSON.stringify(favorites));
                            showNotification(dogName + ' wurde zu Favoriten hinzugefügt', true);
                            updateFavoriteButton(button, true);
                        } else {
                            const updatedFavorites = favorites.filter(item => item !== dogName);
                            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
                            showNotification(dogName + ' wurde aus Favoriten entfernt', false);
                            updateFavoriteButton(button, false);
                        }
                    }
                }
            });
        }
    }
}

// Seite initialisieren, sobald das DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
    init();
    showFavorites();
});
