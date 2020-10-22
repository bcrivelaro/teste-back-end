formRequestControl = function () {
  var serverUrl = 'http://localhost:8000/v1/contacts';
  var $element = $('#contact-form');
  var $button = $element.find('#send-form-btn');
  var $email = $element.find('#email');
  var $name = $element.find('#name');

  $button.on('click', handleRequest.bind(this));

  function handleRequest() {
    if (validFields()) {
      sendFormData();
    }
  }

  function validFields() {
    handleEmailField();
    handleNameField();

    return validEmailField() && validNameField();
  }

  function validEmailField() {
    var email = $email.val();
    var re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  }

  function handleEmailField() {
    if (validEmailField()) {
      $email.removeClass('is-invalid');
    } else {
      $email.addClass('is-invalid');
    }
  }

  function validNameField() {
    var name = $name.val();

    return name != '';
  }

  function handleNameField() {
    if (validNameField()) {
      $name.removeClass('is-invalid');
    } else {
      $name.addClass('is-invalid');
    }
  }

  function sendFormData() {
    data = {
      contact: {
        email: $email.val(),
        name: $name.val(),
      },
    };

    handleElementsBeforePost();

    $.ajax({
      type: 'POST',
      url: serverUrl,
      data: data,
      success: function (response) {
        handleElementsAfterSuccessPost();
      },
      error: function (response) {
        handleElementsAfterFailedPost();
      },
    });
  }

  function handleElementsBeforePost() {
    $button.attr('disabled', 'disabled');
    $button.addClass('disabled');
    $button.html('Enviando...');
  }

  function handleElementsAfterSuccessPost() {
    $('#notice-success').show();
    setTimeout(function () {
      $('#notice-success').fadeOut();
    }, 3000);

    $button.html('Enviar');
    $button.removeClass('disabled');
    $button.attr('disabled', false);
    $email.val('');
    $name.val('');
  }

  function handleElementsAfterFailedPost() {
    $('#notice-failure').show();
    setTimeout(function () {
      $('#notice-failure').fadeOut();
    }, 3000);

    $button.html('Enviar');
    $button.removeClass('disabled');
    $button.attr('disabled', false);
    $email.val('');
    $name.val('');
  }
};

$(document).ready(function () {
  formRequestControl();
});
