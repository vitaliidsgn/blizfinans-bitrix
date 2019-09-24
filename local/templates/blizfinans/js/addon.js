$(function () {
    $('body').on('submit', '.loan-in-phone__form, .help-contacts__form', function (e) {
        e.preventDefault();

        var form = $(this),
            phone = $(this).find('input[type="tel"]').val();

        if (phone.length === 0 || phone.indexOf('_') > 0) {
            form.find('.form-input-note').html('Укажите корректный номер телефона');
        } else {
            form.find('.form-input-note').html('');
            $.post('/ajax/form-phone.php', form.serialize(), function (answer) {
                form.find('.form-input-note').html(answer);
                form.find('input[type="tel"]').val('')
            });
        }
    });
});