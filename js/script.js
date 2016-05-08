// Wait for DOM creation before accessing elements 
$(document).ready(function () {
    

  // Create a reference to the local PouchDB
  var db = new PouchDB('scc_mario');

  // Log a message to the console to verify the db exists
  db.info().then(function (info) {
    log('db_name: ' + info.db_name);
    log('doc_count: ' + info.doc_count);
  });
  
  // Get a reference to each form element
  var $firstname = $('#firstname'),
      $lastname = $('#lastname'),
      $email = $('#email'),
      $phone = $('#phone'),
      $subject = $('#subject'),
      $message = $('#message'),
      $submitBtn = $('#submit-btn'),
      $resetBtn = $('#reset-btn');


  // The submit event handler
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
  });



  // Set Copyright year
  var year = (new Date()).getFullYear();
  $('.copyright').each(function(i, elem){
    elem.innerHTML = '&copy; ' + year;
  })
      
  

/////////////////////////////////////////////////////////////
//  Helper Functions

  function log(msg) {
    window.console.log(msg);
  }
});
