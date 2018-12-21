if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

$(document).ready(function() {
  setTimeout(
    function() {
      var host = window.location.origin;
      $('#iframe_nodes_connected_by_date').attr('src',host+'/graphs/nodes_connected_by_date');
      $('#iframe_top_50_subtasks_success_by_date').attr('src',host+'/graphs/top_50_subtasks_success_by_date');
      $('#iframe_golem-network').attr('src',host+'/graphs/golem-network');
      $('#iframe_avg_daily_subtasks_totals').attr('src',host+'/graphs/avg_daily_subtasks_totals');
      $('#iframe_avg_daily_failed_totals').attr('src',host+'/graphs/avg_daily_failed_totals');
      $('#iframe_avg_daily_unique_totals').attr('src',host+'/graphs/avg_daily_unique_totals');
      $('#iframe_new_unique_node_count_per_snapshot').attr('src',host+'/graphs/new_unique_node_count_per_snapshot');

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
    }, 500);
  $('.all_nodes_dt').DataTable({
    scrollX: "100%",
    scrollY: 500,
    lengthMenu: [[25, 100, -1], [25, 100, "All"]]
  });
  $('.dataTables_length').addClass('bs-select');
  $('#iframe_global_network_data_history').attr('src',window.location.origin+'/graphs/global_network_data_history');
});
