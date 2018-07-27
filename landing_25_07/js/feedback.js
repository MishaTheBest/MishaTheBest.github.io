$(document).ready(function() {
    $('#phone').mask("+38 (999) 999-9999");
    let loadBtn = $('#load');
    let messageBtn = $('#message');
    let giftContainer  = document.querySelector("#gift-container");
    let giftBtn = document.querySelector("#gift_button");
    giftBtn.addEventListener("click",function () {
        giftContainer.classList.remove("show-gift-container");
    });
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
                giftContainer.classList.add("show-gift-container");
            },
            complete: function () {
                loadBtn.html('Отправить').prop('disabled', false);
                $('#feedback input, #feedback textarea').val("");
                $('#kind').prop('selected', true);
                giftContainer.classList.add("show-gift-container");
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