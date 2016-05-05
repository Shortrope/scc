// Wait for DOM creation before accessing elements 
$(document).ready(function () {
    

  // Create a reference to the local PouchDB
  var db = new PouchDB('scc_mario');

  db.info().then(function (info) {
    log('db_name: ' + info.db_name);
    log('doc_count: ' + info.doc_count);
  });
  
  // Get reference to all form elements
  var $firstname = $('#firstname'),
      $lastname = $('#lastname'),
      $email = $('#email'),
      $phone = $('#phone'),
      $subject = $('#subject'),
      $message = $('#message'),
      $submitBtn = $('#submit-btn'),
      $resetBtn = $('#reset-btn');


  // Our submit event handler
  $submitBtn.on('click', function (evt) {
    evt.preventDefault();
    
    // Validate form fields
    
    // Prepare the JSON doc
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
    
    // Clear all form fields
    $firstname.val('');
    $lastname.val('');
    $email.val('');
    $phone.val('');
    $subject.val('');
    $message.val('');
    $submitBtn.val('');
    $resetBtn.val('');

  });




/////////////////////////////////////////////////////////////
//  Helper Functions

  function log(msg) {
    window.console.log(msg);
  }
});
