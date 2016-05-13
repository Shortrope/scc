// Wait for DOM creation before accessing elements 
$(document).ready(function () {
    
  // Get a reference to each form element
  var $firstname = $('#firstname'),
      $lastname = $('#lastname'),
      $email = $('#email'),
      $phone = $('#phone'),
      $subject = $('#subject'),
      $message = $('#message'),
      $submitBtn = $('#submit-btn'),
      $resetBtn = $('#reset-btn'),
      $thankYou = $('#thankyou');
  // Create a reference to the local PouchDB
  var db = new PouchDB('scc_mario');

  // Log a message to the console to verify the db exists
  // db.info().then(function (info) {
  //   log('db_name: ' + info.db_name);
  //   log('doc_count: ' + info.doc_count);
  // });
  

  // Validate each field when they are filled in
  $('#contact_form :input[pattern]').blur(function () {
    validateInput($(this));
  });
  
  // Submit event handler
  // Validate all fields before submit
  $submitBtn.on('click', function () {
    var isSubmitable = true;
    $(':input[required]').each(function () {
      if ( !validateInput($(this)) ) {
        isSubmitable = false;
        $(this).focus();
        return false; // Break out of .each() loop
      }
    }); // end validate required fields

    if (isSubmitable) {
      displayThankYou();
      addDataToLocalDB();
      sendEmail();
      clearFormFields();
    } 
  }); // on submit

  //
  // Set Copyright year
  var year = (new Date()).getFullYear();
  $('.copyright').each(function(i, elem){
    elem.innerHTML = '&copy; ' + year;
  })
  
  
  
/////////////////////////////////////////////////////////////
//  Functions

  function validateInput(jqElem) {
    var myPattern = jqElem.attr('pattern');
    var isValid = (jqElem.val().search(myPattern) >= 0) ? true : false;
    if (isValid) {
      jqElem.closest('div').removeClass('invalid');
      jqElem.closest('div').addClass('valid');
    } else {
      jqElem.closest('div').removeClass('valid');
      jqElem.closest('div').addClass('invalid');
    }
    return isValid;
  }
  
  function addDataToLocalDB() {
    // Prepare the JSON doc
    if ($phone.val() == '') {
      $phone.val('No Phone');
    }
    if ($subject.val() == '') {
      $subject.val('No Subject');
    }
    if ($message.val() == '') {
      $message.val('No Message');
    }
    var doc = {
      "_id": $email.val(),
      "firstname": $firstname.val(),
      "lastname": $lastname.val(),
      "phone": $phone.val(),
      "subject": $subject.val(),
      "message": $message.val()
    }
    // Add the JSON data to the local PouchDB
    db.put(doc);
  }
  
  function sendEmail() {
    var emailMessage = $firstname.val() +' '+ $lastname.val() +'\n';
    emailMessage += $phone.val() +'\n' + $email.val() +'\n\n';
    emailMessage += $subject.val() + '\n' + $message.val();
    window.plugins.socialsharing.shareViaEmail(
      emailMessage, 
      $subject.val(),
      ['makaack@gmail.com'], // TO: must be null or an array
      null, // CC: must be null or an array
      null, // BCC: must be null or an array
      null, // FILES: can be null, a string, or an array
      onSuccess, // called when sharing worked, but also when the user cancelled sharing via email. On iOS, the callbacks' boolean result parameter is true when sharing worked, false if cancelled. On Android, this parameter is always true so it can't be used). See section "Notes about the successCallback" below.
      onError // called when sh*t hits the fan
   );
  }

  function displayThankYou() {
   $thankYou.fadeIn('slow').delay(2000).fadeOut();
  }

  function onSuccess() {
   log('email success');
  }
  function onError() {
   log('email error');
  }
  
  function clearFormFields() {
    log('In clearFormFields()');
    $firstname.val('');
    $lastname.val('');
    $email.val('');
    $phone.val('');
    $subject.val('');
    $message.val('');
  }

  function log(msg) {
    window.console.log(msg);
  }
  
  // for tshooting
  function showVals(msg) {
    log();
    log(msg)
    log('fname: ' + $firstname.val());
    log('lname: ' + $lastname.val());
    log('email: ' + $email.val());
    log('phone: ' + $phone.val());
    log('subject: ' + $subject.val());
    log('message: ' + $message.val());
    log();
  }
});
