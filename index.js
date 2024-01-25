var logo = $('<a>', {
    href: 'https://aiwithshrey.github.io',
    target: '_blank'
}).append($('<img>', { 
    id: 'logo',
    src: 'assets/Logo.png',
    alt: 'Site Logo',
    width: '100px',
    height: '100px',
    css: {
        position: 'fixed',
        top: '10px',
        right: '600px',
        transition: 'transform 0.3s ease' // Smooth transition for the transform property
    }
})).appendTo('body'); // Assuming you want to append it to the body

// jQuery to handle the hover effect
$('#logo').hover(
    function() { // Mouse over
        $(this).css('transform', 'scale(1.2)'); // Scale up the logo
    }, 
    function() { // Mouse out
        $(this).css('transform', 'scale(1)'); // Scale back to normal
    }
);