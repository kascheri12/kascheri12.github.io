$(document).ready(function() {
  $('.top_dt').DataTable({
    scrollX: true,
    scrollY: 300,
    searching: false,
    paging: false,
    order: [[ 0, "desc" ],[ 3, "desc" ]],
    bInfo: false
  });
});
$('.dataTables_length').addClass('bs-select');
