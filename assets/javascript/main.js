$(document).ready(function() {
  $('.top_dt').DataTable({
    scrollX: true,
    scrollY: 300,
    searching: false,
    paging: false,
    order: [[ 0, "desc" ]],
    bInfo: false,
    responsive: true
  });
});
$('.dataTables_length').addClass('bs-select');
