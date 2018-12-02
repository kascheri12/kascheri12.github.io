$(document).ready(function() {
  $('.top_dt').DataTable({
    scrollX: true,
    scrollY: 200,
    searching: false,
    paging: false
  });
});
$('.dataTables_length').addClass('bs-select');
