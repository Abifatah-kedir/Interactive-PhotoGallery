
 $('.myInput').keyup(event => {

    const valueInput = $('.myInput').val().toLowerCase();
    $('img').show();

    if (valueInput !== '') {
        $('img').not('[title*="' + valueInput + '"]').hide();
    }
});


