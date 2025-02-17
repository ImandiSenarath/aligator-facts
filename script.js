const crocodileFacts = [
    "Crocodiles are reptiles and belong to the order Crocodylia.",
    "They can be found in tropical regions of Africa, Asia, the Americas, and Australia.",
    "Crocodiles are carnivorous and primarily eat fish, birds, and mammals.",
    "They have powerful jaws with a bite force that can exceed 3,000 pounds per square inch.",
    "Crocodiles can hold their breath underwater for up to an hour while waiting for prey.",
    "They are ectothermic, meaning their body temperature is regulated by their environment.",
    "Crocodiles can live for over 70 years in the wild.",
    "They have a unique ability to see in color, which helps them hunt.",
    "Crocodiles communicate through a variety of vocalizations, including hissing and growling.",
    "Some species of crocodiles can reach lengths of over 20 feet."
];

document.getElementById('factButton').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * crocodileFacts.length);
    const factDisplay = document.getElementById('factDisplay');
    
    // Fade out effect
    factDisplay.style.opacity = 0;
    
    setTimeout(() => {
        factDisplay.textContent = crocodileFacts[randomIndex];
        // Fade in effect
        factDisplay.style.opacity = 1;
    }, 500);
});
