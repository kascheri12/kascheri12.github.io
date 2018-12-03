$(document).ready(function() {
  $('.top_dt').DataTable({
    scrollX: "100%",
    scrollY: 300,
    searching: false,
    paging: false,
    order: [[ 0, "desc" ],[ 3, "desc" ]],
    bInfo: false
  });
  $('#perc-change-subtasks-success').DataTable({
    scrollX: "100%",
    scrollY: 300,
    searching: false,
    paging: false,
    order: [[ 0, "desc" ]],
    bInfo: false
  });
  $('.all_nodes_dt').DataTable({
    scrollX: "100%",
    scrollY: 500,
    lengthMenu: [[25, 100, -1], [25, 100, "All"]]
  });
});
$('.dataTables_length').addClass('bs-select');
