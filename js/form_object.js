$.fn.formObject = function() {

  const form = {}
  $.each($(this).serializeArray(), function (i, field) {
    form[field.name] = field.value || ''
  })

  return form
}
