$(document).ready(function() {
  $('.top_dt').DataTable({
    scrollX: true,
    scrollY: 200
    ,searching:false
    ,paging:simple
  });
});
$('.dataTables_length').addClass('bs-select');
