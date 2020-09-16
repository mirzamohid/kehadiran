var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyZ0ohEkC-q6mu9EPmJmJgILr67B0mvo9JARrsx3CN6NjtQYAql/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})