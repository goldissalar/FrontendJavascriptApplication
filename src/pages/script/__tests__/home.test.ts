import { createDogCard } from '../home';

test('createDogCard should create a dog card element', () => {
    const dogData = {
        dogName: 'Test Dog',
        image: 'test.jpg',
    };

    const dogCard = createDogCard(dogData);

    expect(dogCard.classList).toContain('dog-card');
    //expect(dogCard.querySelector('h2').textContent).toBe('Test Dog');
});
