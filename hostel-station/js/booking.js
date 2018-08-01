$(document).ready(function() {

    $('#datepicker').attr('type', 'text').datepicker({
        minDate: new Date(),
    });

   // setMinDate();
    $('#booking').submit(function(event) {
        event.preventDefault();

        changeDateFormat($('#datepicker').val());

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data:  $(this).serialize(),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            contentType: false,
            cache: false,
            processData: false,
            beforeSend: function () {

            },
            success: function(url) {
                console.log(url);
                window.open(url, '_blank');
                window.focus();
            },
            error: function () {
                console.log('Ошибка на сервере!');
            },
            complete: function () {
                $('#booking select option:first-child').prop('selected', true);
                $('#booking input[name="arrival"]').val('');
            }
        });
    });
});

function changeDateFormat (date) {
    $('#datepicker').val(`${date.split('.')[2]}-${date.split('.')[1]}-${date.split('.')[0]}`);
}

// function setMinDate() {
//     let now = new Date();
//
//     let month = now.getMonth() + 1;
//     let day = now.getDate();
//     let year = now.getFullYear();
//
//     if(month < 10)
//         month = '0' + month.toString();
//     if(day < 10)
//         day = '0' + day.toString();
//
//     let min = `${year}-${month}-${day}`;
//
//     $('#arrival').attr('min', min);
// }