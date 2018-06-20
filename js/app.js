

/* filters throught the image and dislays images has a caption that matches 
    the user input and hides rest of he images  */ 

 $('.myInput').keyup(event => {
    // declares a variable that select input form the html file.
    const valueInput = $('.myInput').val().toLowerCase();
    // selects and shows all images. 
    $('img').show();
    // checks if the user enter something or not
    if (valueInput !== '') {
        // if the user entered value, show only matches the image caption. 
        $('img').not('[title*="' + valueInput + '"]').hide();
    }
});


