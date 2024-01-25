// Define the logo
var logo = $('<img>', { 
    id: 'logo',
    src: 'assets/Logo.png', // replace with the correct path to your logo
    alt: 'Site Logo',
    href: "https://aiwithshrey.github.io"
});

// Define the link
var link = $('<a>', {
    href: 'https://aiwithshrey.github.io'
});

// Append the logo to the link
link.append(logo);

logo.css({
    'width': '150px', // reduce the width
    'height': '150px', // reduce the height
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