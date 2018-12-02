$(document).ready(function() {
  $('.top_dt').DataTable({
    scrollX: true,
    scrollY: 300,
    searching: false,
    paging: false,
    order: [[ 0, "desc" ],[ 3, "desc" ]],
    bInfo: false
  });
  $('.all_nodes_dt').DataTable({
    scrollX: true,
    scrollY: 500
  });
});
$('.dataTables_length').addClass('bs-select');
