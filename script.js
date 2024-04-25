const clickableArea = document.getElementById('clickable-area');

// Change background image on hover
clickableArea.addEventListener('mouseover', function() {
    document.body.style.backgroundImage = 'url("SelfPortraitTwo.png")';
});

// Revert background image on mouseout
clickableArea.addEventListener('mouseout', function() {
    document.body.style.backgroundImage = 'url("SelfPortraitOne.png")'; 
});

// Open new window on click
clickableArea.addEventListener('click', function() {
    window.open('1.html', '_blank', 'width=450,height=450'); 
});
