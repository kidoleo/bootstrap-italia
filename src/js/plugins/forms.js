$(function () {
  // Inizializzazione effetto active sulle label quando i loro input valorizzati
  $('body').on('click', '.form-group input + label, .form-group textarea + label', function () {
    $(this).closest('.form-group').addClass('active');
  }).on('focusin', '.form-group input:not(.select-dropdown, .select-dropdown-search), .form-group textarea', function () {
    $(this).closest('.form-group').addClass('active');
  }).on('focusout', '.form-group input:not(.select-dropdown, .select-dropdown-search), .form-group textarea', function () {
    $(this).closest('.form-group').removeClass('active');
    $(this).siblings('label').toggleClass('active', $(this).val() !== '');
  }).on('focusout', `.form-group input[type='file'], input[class$='picker']`, function () {
    $(this).siblings('label').addClass('active');
  }).on('change', 'input:file', function (e) {
    var numFiles = e.currentTarget.files.length;
    var nomiFiles = '';
    var multi = '';
    for (i = 0; i < numFiles; i++) {
      fileSize = parseInt(e.currentTarget.files[i].size, 10) / 1024;
      filesize = Math.round(fileSize);
      nomiFiles = nomiFiles + e.currentTarget.files[i].name + ' (' + filesize + 'kb); ';
    }
    if (numFiles > 1) {
      multi = numFiles + ' file da caricare: '
    }
    $(this).siblings('.form-file-name').text(multi + nomiFiles);
  });

  $(`.form-group :input[value], input[class$='picker']`).siblings('label').addClass('active');

  $('.autocomplete').autocomplete();
});
