// Define the logo
var logo = $('<img>', { 
    id: 'logo',
    src: 'assets/Logo.png', // replace with the correct path to your logo
    alt: 'Site Logo',
    href: "https://aiwithshrey.github.io"
});

logo.css({
    'width': '50px', // reduce the width
    'height': '50px', // reduce the height
    'position': 'fixed', // keep the position as fixed
    'top': '10px', // position at the top
    'right': '10px' // position at the right
});

logo.hover(
    function() {
        $(this).css('transform', 'scale(1.2)');
    },
    function() {
        $(this).css('transform', 'scale(1)');
    }
);

// Append the logo to the body
$('body').append(logo);