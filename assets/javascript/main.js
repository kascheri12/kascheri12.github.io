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
  
  var opts = {
    angle: 0.15, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.6, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    
  };
  // var target = document.getElementById('guage_percent_change_subtasks_success_past_day'); // your canvas element
  // var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  // gauge.maxValue = 3000; // set max gauge value
  // gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  // gauge.animationSpeed = 32; // set animation speed (32 is default value)
  // gauge.set(1250); // set actual value

});
$('.dataTables_length').addClass('bs-select');
