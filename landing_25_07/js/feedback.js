$(document).ready(function() {
    $('#phone').mask("+38 (999) 999-9999");
    let loadBtn = $('#load');
    let messageBtn = $('#message');

    $('#feedback').submit(function(event) {
        event.preventDefault();
        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            contentType: false,
            cache: false,
            processData: false,
            beforeSend: function() {
                loadBtn.html('<i class="fa fa-circle-o-notch fa-spin"></i> обработка').prop('disabled', true);
                console.log('ждём....');
            },
            success: function(result) {
                console.log(result);
                toggleMessage(result);
            },
            error: function () {
                toggleMessage('Произошла ошибка. Проверьте ввод!');
            },
            complete: function () {
                loadBtn.html('Отправить').prop('disabled', false);
                $('#feedback input, #feedback textarea').val("");
                $('#kind').prop('selected', true)
            }
        });
    });
    function toggleMessage(data) {
        messageBtn.fadeIn().html(data);
        setTimeout(() => {
            messageBtn.fadeOut()
        }, 3000);
    }
});