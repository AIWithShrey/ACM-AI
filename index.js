$(document).ready(function() {
    // Define the logo
    var logo = $('<img>', { 
        id: 'logo',
        src: 'assets/Logo.png', // replace with the correct path to your logo
        alt: 'Site Logo',
        href: "https://aiwithshrey.github.io"
        
    });
    logo.css({
        'width': '100px', // reduce the width
        'height': '100px', // add a height
        'position': 'fixed', // change the position to fixed
        'top': '0', // position at the top
        'left': '0' // position at the left
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
});

    