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

function init_gauge(pin_value) {
  var opts = {
    angle: 0.15, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.6, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    staticLabels: {
      font: "20px sans-serif",  // Specifies font
      labels: [-50,-30,-10,10,30,50],  // Print labels at these values
      color: "#000000",  // Optional: Label text color
      fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#CF0E00',   // Colors
    colorStop: '#47DA37',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    
  };
  var target = document.getElementById('guage_percent_change_subtasks_success_past_day'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 50; // set max gauge value
  gauge.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(pin_value); // set actual value
  gauge.setTextField(document.getElementById('span_guage_percent_change_subtasks_success_past_day'),3);
}
