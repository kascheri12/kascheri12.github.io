$(document).ready(function() {
  $('.top_dt').DataTable({
    scrollX: true,
    scrollY: 600,
    searching: false,
    paging: false,
    order: [[ 1, "desc" ]],
    bInfo: false
  });
});
$('.dataTables_length').addClass('bs-select');
