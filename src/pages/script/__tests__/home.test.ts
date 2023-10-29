import { createDogCard } from '../home';

test('createDogCard should create a dog card element', () => {
    const dogData = {
        dogName: 'Test Dog',
        image: 'test.jpg',
    };

    const dogCard = createDogCard(dogData);

    expect(dogCard).not.toBeNull();
    expect(dogCard?.classList).toContain('dog-card');

    const h2Element = dogCard?.querySelector('h2');
    expect(h2Element).not.toBeNull();
    if (h2Element) {
        expect(h2Element.textContent).toBe('Test Dog');
    }});


import { updateFavoriteButton } from '../home'; // Passe den Pfad entsprechend an

describe('updateFavoriteButton function', () => {
    test('it should update the button text and background color for a favorite', () => {
        const button = document.createElement('button');
        button.textContent = 'Zu Favoriten hinzufügen';
        button.style.backgroundColor = '#3498db';

        expect(button.textContent).toBe('Zu Favoriten hinzufügen');
        expect(button.style.backgroundColor).toBe('rgb(52, 152, 219)');

        updateFavoriteButton(button, true);

        expect(button.textContent).toBe('Als Favorit entfernen');
        expect(button.style.backgroundColor).toBe('rgb(204, 0, 0)');
    });
});
