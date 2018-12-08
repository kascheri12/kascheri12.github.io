---
title: Dashboard
---

# Golem Network Dashboard

<br />

#### Percentage change in past day

<details>
<summary><strong>Details</strong></summary>

  <p>This value represents the percentage change of the sum of subtasks_success of active nodes in the latest snapshot and the same metric from yesterday's last snapshot.</p>

  <h5>Analysis</h5>

  <p>There are many reasons for drastic movement here even if the same extreme movement is not reflected in the node count.</p>

  <p>A single node with a large number of subtasks_success might exit the network for a time and this would demonstrate a dtrasitc decrease in this metric but the overall node count would not change so drastically.</p>
</details>

<br />

<div class="row">
  <div class='col-xs-12 col-lg-4'>
    <h5>Subtasks Success</h5>
    <div class='category_div'>
      <canvas class='canvas_gauge' id='gauge_percent_change_subtasks_success_past_day'></canvas>
      <span class='span_gauge_value' id='span_gauge_percent_change_subtasks_success_past_day'></span>
    </div>
  </div>
  <div class='col-xs-12 col-lg-4'>
    <h5>Subtasks Timeout</h5>
    <div class='category_div'>
      <canvas class='canvas_gauge' id='gauge_percent_change_subtasks_timeout_past_day'></canvas>
      <span class='span_gauge_value' id='span_gauge_percent_change_subtasks_timeout_past_day'></span>
    </div>
  </div>
  <div class='col-xs-12 col-lg-4'>
    <h5>Subtasks Error</h5>
    <div class='category_div'>
      <canvas class='canvas_gauge' id='gauge_percent_change_subtasks_error_past_day'></canvas>
      <span class='span_gauge_value' id='span_gauge_percent_change_subtasks_error_past_day'></span>
    </div>
  </div>
</div>

<style>
.canvas_gauge {
  position:relative;
  display:inline-block;
}
.span_gauge_value {
  position:absolute;
  text-align:center;
  left:0;right:0;bottom:-15px;
  font-size:20px;
}
.span_gauge_value::after {
  content: '%';
}
.category_div {
  position:relative;
  float:left;
  display:block;
}
</style>
<script>
$(document).ready(function() {
  var opts1,opts2,opts3;
  var opts1 = opts2 = opts3 = {
  angle: 0, // The span of the gauge arc
  lineWidth: 0.44, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#aaa' // Fill color
  },
  staticLabels: {
    font: '20px sans-serif',  // Specifies font
    labels: [-50,-30,-10,10,30,50],  // Print labels at these values
    color: '#aaa',  // Optional: Label text color
    fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  colorStart: '#CF0E00',   // Colors
  colorStop: '#E0E0E0',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support
  };
  
  var target1 = document.getElementById('gauge_percent_change_subtasks_success_past_day'); // your canvas element
  var target2 = document.getElementById('gauge_percent_change_subtasks_timeout_past_day'); // your canvas element
  var target3 = document.getElementById('gauge_percent_change_subtasks_error_past_day'); // your canvas element

  var gauge1 = new Gauge(target1).setOptions(opts1); // create sexy gauge!
  gauge1.maxValue = 50; // set max gauge value
  gauge1.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge1.animationSpeed = 10; // set animation speed (32 is default value)
  gauge1.set(0.4504); // set actual value
  gauge1.setTextField(document.getElementById('span_gauge_percent_change_subtasks_success_past_day'),3);
  
  var gauge2 = new Gauge(target2).setOptions(opts2); // create sexy gauge!
  gauge2.maxValue = 50; // set max gauge value
  gauge2.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge2.animationSpeed = 10; // set animation speed (32 is default value)
  gauge2.set(-0.2397); // set actual value
  gauge2.setTextField(document.getElementById('span_gauge_percent_change_subtasks_timeout_past_day'),3);
  
  var gauge3 = new Gauge(target3).setOptions(opts3); // create sexy gauge!
  gauge3.maxValue = 50; // set max gauge value
  gauge3.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge3.animationSpeed = 10; // set animation speed (32 is default value)
  gauge3.set(0.8696); // set actual value
  gauge3.setTextField(document.getElementById('span_gauge_percent_change_subtasks_error_past_day'),3);
});

</script>

<br />

[comment]: <> (Inject of data tables)
<div class='row'>

<div class='col-xs-12 col-sm-12 col-lg-12 col-xl-12' style='padding:10px;'>
  <h4>Percent change of total subtasks success by day</h4>
  <table id='perc-change-subtasks-success' class='table display nowrap table-bordered table-sm' width='100%'>
    <thead>
      <tr><th scope='col'>snapshot_date</th><th scope='col'>sum_subtasks_success</th><th scope='col'>percent_increase_prev_day_subtask_success</th><th scope='col'>sum_subtasks_timeout</th><th scope='col'>percent_increase_prev_day_subtask_timeout</th><th scope='col'>sum_subtasks_error</th><th scope='col'>percent_increase_prev_day_subtask_error</th></tr>
    </thead>
    <tbody>
      <tr><td scope='row'>2018-12-08</td><td>72704</td><td>0.4504</td><td>4578</td><td>-0.2397</td><td>2900</td><td>0.8696</td></tr><tr><td>2018-12-07</td><td>72378</td><td>-4.8196</td><td>4589</td><td>-9.2366</td><td>2875</td><td>-15.2168</td></tr><tr><td>2018-12-06</td><td>76043</td><td>-7.2352</td><td>5056</td><td>-8.9829</td><td>3391</td><td>-0.7028</td></tr><tr><td>2018-12-05</td><td>81974</td><td>0.4756</td><td>5555</td><td>1.4612</td><td>3415</td><td>-2.3449</td></tr><tr><td>2018-12-04</td><td>81586</td><td>-0.6164</td><td>5475</td><td>-2.8739</td><td>3497</td><td>-6.0451</td></tr><tr><td>2018-12-03</td><td>82092</td><td>4.3273</td><td>5637</td><td>4.4082</td><td>3722</td><td>11.5039</td></tr><tr><td>2018-12-02</td><td>78687</td><td>-5.2854</td><td>5399</td><td>-1.2619</td><td>3338</td><td>-7.4064</td></tr><tr><td>2018-12-01</td><td>83078</td><td>1.2875</td><td>5468</td><td>-0.9600</td><td>3605</td><td>-3.8667</td></tr><tr><td>2018-11-30</td><td>82022</td><td>16.4341</td><td>5521</td><td>27.0948</td><td>3750</td><td>24.7505</td></tr><tr><td>2018-11-29</td><td>70445</td><td>None</td><td>4344</td><td>None</td><td>3006</td><td>None</td></tr>
    </tbody>
  </table>
</div>

<div class='col-xs-12 col-lg-6 col-xl-4' style='padding:10px;'>
  <h5>Top 50 Subtasks Success</h5>
  <table class='top_dt table display nowrap table-bordered table-sm' width='100%'>
    <thead>
      <tr><th scope='col'>subtasks_success</th><th scope='col'>node_name</th><th scope='col'>short_node_id</th><th scope='col'>snapshot_date</th><th scope='col'>cpu_cores</th><th scope='col'>allowed_resource_size</th><th scope='col'>allowed_resource_memory</th></tr>
    </thead>
    <tbody>
      <tr><td scope='row'>1620</td><td>grunt</td><td>0022abe511</td><td>2018-12-07 02:47:12</td><td>7</td><td>2097150.0</td><td>9437180.0</td></tr><tr><td>1064</td><td>ryzenGolem</td><td>ea132c2185</td><td>2018-12-08 06:47:12</td><td>12</td><td>108896000.0</td><td>5242880.0</td></tr><tr><td>1061</td><td>DonsDell</td><td>bfbd973bfd</td><td>2018-12-08 06:47:12</td><td>5</td><td>658529000.0</td><td>14120500.0</td></tr><tr><td>1012</td><td>xeqres</td><td>c01a28b851</td><td>2018-12-08 06:47:12</td><td>3</td><td>1048580.0</td><td>5242880.0</td></tr><tr><td>963</td><td>cryptodave</td><td>dc068d492b</td><td>2018-12-08 06:47:12</td><td>9</td><td>27048800.0</td><td>10485800.0</td></tr><tr><td>926</td><td>DK18</td><td>b37d4a4ad2</td><td>2018-12-07 19:02:12</td><td>3</td><td>83886100.0</td><td>8912900.0</td></tr><tr><td>916</td><td>BoSox9</td><td>24eb4e2c1f</td><td>2018-12-08 06:47:12</td><td>15</td><td>52428800.0</td><td>23068700.0</td></tr><tr><td>910</td><td>DK16</td><td>cae4745f9d</td><td>2018-12-07 12:57:12</td><td>3</td><td>104858000.0</td><td>8912900.0</td></tr><tr><td>900</td><td>DK11</td><td>e0f6876a75</td><td>2018-12-07 16:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>891</td><td>GolemGuy</td><td>24c9f0722f</td><td>2018-12-08 06:47:12</td><td>5</td><td>16749200.0</td><td>25128400.0</td></tr><tr><td>882</td><td>Ryzen8core</td><td>8475b3a5f5</td><td>2018-12-08 06:47:12</td><td>12</td><td>63720300.0</td><td>10659200.0</td></tr><tr><td>879</td><td>GolemMultiCore</td><td>735abafcb3</td><td>2018-12-08 06:47:12</td><td>15</td><td>71303200.0</td><td>17825800.0</td></tr><tr><td>876</td><td>DK26</td><td>1c6c008734</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>8912900.0</td></tr><tr><td>875</td><td>LilaSchwarz</td><td>5c141cff47</td><td>2018-12-08 06:47:12</td><td>5</td><td>125249000.0</td><td>12544600.0</td></tr><tr><td>859</td><td>DK12</td><td>6bf6602ed9</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>857</td><td>coduyen</td><td>3bf155f147</td><td>2018-12-08 06:47:12</td><td>11</td><td>104858000.0</td><td>36700200.0</td></tr><tr><td>854</td><td>DK17</td><td>629439ff3a</td><td>2018-12-07 19:02:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>850</td><td>DK25</td><td>f14b7a141a</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>838</td><td>DK22</td><td>f5785c737f</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>831</td><td>DK20</td><td>31a2601e02</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>818</td><td>Fuzzy Golem</td><td>06af924c46</td><td>2018-12-08 06:47:12</td><td>5</td><td>373293000.0</td><td>19922900.0</td></tr><tr><td>803</td><td>mainichi</td><td>08dfebdc9c</td><td>2018-12-08 06:47:12</td><td>10</td><td>134555000.0</td><td>23657000.0</td></tr><tr><td>799</td><td>DK19</td><td>89d1e6953d</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>772</td><td>Node-ByZohaib</td><td>eb4732ff31</td><td>2018-12-08 06:47:12</td><td>14</td><td>132913000.0</td><td>12279000.0</td></tr><tr><td>755</td><td>DK23</td><td>bcae614d6a</td><td>2018-12-07 19:42:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>755</td><td>DK13</td><td>356626023e</td><td>2018-12-08 02:52:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>737</td><td>Kinezumi</td><td>9d39a4a596</td><td>2018-12-02 12:47:12</td><td>7</td><td>83043900.0</td><td>24117200.0</td></tr><tr><td>732</td><td>Cloud9</td><td>8905205743</td><td>2018-12-08 06:47:12</td><td>11</td><td>24937400.0</td><td>17825800.0</td></tr><tr><td>702</td><td>DK24</td><td>b2483f1942</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>685</td><td>WishMeLuck1</td><td>fa52fe0e2e</td><td>2018-12-08 06:47:12</td><td>11</td><td>73184000.0</td><td>12507400.0</td></tr><tr><td>680</td><td>DK5</td><td>58d5956491</td><td>2018-12-08 02:07:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>677</td><td>Vicente</td><td>0d3c417e55</td><td>2018-12-08 06:47:12</td><td>7</td><td>665142000.0</td><td>5786400.0</td></tr><tr><td>668</td><td>DK4</td><td>bfba7469f4</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>8912900.0</td></tr><tr><td>664</td><td>DK27</td><td>7a81a0207e</td><td>2018-12-07 17:17:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>641</td><td>PILLAGER</td><td>7ce29c9105</td><td>2018-12-08 06:47:12</td><td>14</td><td>762421000.0</td><td>49828300.0</td></tr><tr><td>632</td><td>DK-golem6</td><td>b9d72465a1</td><td>2018-12-08 06:47:12</td><td>3</td><td>50426000.0</td><td>9357020.0</td></tr><tr><td>624</td><td>golem-spliff-osx</td><td>5015bfd932</td><td>2018-12-08 06:47:12</td><td>2</td><td>861267000.0</td><td>5662310.0</td></tr><tr><td>619</td><td>Fuzzy Golem 2</td><td>cce082b147</td><td>2018-12-08 06:47:12</td><td>2</td><td>995424000.0</td><td>18874400.0</td></tr><tr><td>602</td><td>Pukerud</td><td>1fca5d276c</td><td>2018-12-08 05:02:12</td><td>14</td><td>132053000.0</td><td>11901500.0</td></tr><tr><td>585</td><td>JulianoThreadrip</td><td>70179e7897</td><td>2018-12-07 10:57:12</td><td>20</td><td>13787300.0</td><td>10485800.0</td></tr><tr><td>585</td><td>klopsknoedel</td><td>c82b9e2435</td><td>2018-12-08 06:47:12</td><td>6</td><td>94371800.0</td><td>9387830.0</td></tr><tr><td>579</td><td>MSI</td><td>2ff806ca2c</td><td>2018-12-08 06:47:12</td><td>6</td><td>21521300.0</td><td>11534300.0</td></tr><tr><td>573</td><td>DuttyNode</td><td>6d1649c4e8</td><td>2018-12-08 06:47:12</td><td>4</td><td>129051000.0</td><td>6291460.0</td></tr><tr><td>571</td><td>EyeIsBoss</td><td>6bbeb79e20</td><td>2018-12-08 06:47:12</td><td>7</td><td>765245000.0</td><td>25137600.0</td></tr><tr><td>563</td><td>trancephorm</td><td>213a71706a</td><td>2018-12-08 06:47:12</td><td>5</td><td>234482000.0</td><td>20964000.0</td></tr><tr><td>559</td><td>MMX99</td><td>6d24d6189a</td><td>2018-12-08 06:37:12</td><td>10</td><td>62914600.0</td><td>10485800.0</td></tr><tr><td>556</td><td>DK-golem8</td><td>27cf695f59</td><td>2018-12-07 13:22:12</td><td>3</td><td>104858000.0</td><td>9357020.0</td></tr><tr><td>554</td><td>AbdArthurdent</td><td>7803d4a14e</td><td>2018-12-08 06:47:12</td><td>7</td><td>146801000.0</td><td>17836200.0</td></tr><tr><td>553</td><td>macgyver</td><td>4e92f89baa</td><td>2018-12-08 06:47:12</td><td>28</td><td>73400300.0</td><td>9437180.0</td></tr><tr><td>541</td><td>gm</td><td>f97856d3c2</td><td>2018-12-08 06:47:12</td><td>1</td><td>142178000.0</td><td>3145730.0</td></tr>
    </tbody>
  </table>
</div>

<div class='col-xs-12 col-lg-6 col-xl-4' style='padding:10px;'>
  <h5>Top 50 Subtasks Error</h5>
  <table class='top_dt table display nowrap table-bordered table-sm' width='100%'>
    <thead>
      <tr><th scope='col'>subtasks_error</th><th scope='col'>node_name</th><th scope='col'>short_node_id</th><th scope='col'>snapshot_date</th><th scope='col'>cpu_cores</th><th scope='col'>allowed_resource_size</th><th scope='col'>allowed_resource_memory</th></tr>
    </thead>
    <tbody>
      <tr><td scope='row'>183</td><td>grunt</td><td>0022abe511</td><td>2018-12-07 02:47:12</td><td>7</td><td>2097150.0</td><td>9437180.0</td></tr><tr><td>166</td><td>DK24</td><td>b2483f1942</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>157</td><td>cryptodave</td><td>dc068d492b</td><td>2018-12-08 06:47:12</td><td>9</td><td>27048800.0</td><td>10485800.0</td></tr><tr><td>134</td><td>Sivir</td><td>f61c8405ba</td><td>2018-12-08 06:47:12</td><td>3</td><td>1048580.0</td><td>9397440.0</td></tr><tr><td>114</td><td>mine</td><td>d4545af398</td><td>2018-12-08 06:47:12</td><td>7</td><td>1048580.0</td><td>9290800.0</td></tr><tr><td>106</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2018-12-08 06:47:12</td><td>3</td><td>127225000.0</td><td>6274830.0</td></tr><tr><td>97</td><td>Bloopd</td><td>fcab66f556</td><td>2018-12-04 13:52:12</td><td>2</td><td>10485800.0</td><td>5310540.0</td></tr><tr><td>95</td><td>CM</td><td>deb4a9c8f0</td><td>2018-12-07 17:47:12</td><td>6</td><td>15426800.0</td><td>5242880.0</td></tr><tr><td>93</td><td>mrkmerc</td><td>2e00892ac8</td><td>2018-12-08 06:47:12</td><td>3</td><td>336651000.0</td><td>15627400.0</td></tr><tr><td>83</td><td>sparklenose</td><td>b76d24a6fd</td><td>2018-12-03 11:27:12</td><td>5</td><td>157286000.0</td><td>8388610.0</td></tr><tr><td>77</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2018-12-08 06:47:12</td><td>1</td><td>878157000.0</td><td>6260780.0</td></tr><tr><td>74</td><td>DuttyNode</td><td>6d1649c4e8</td><td>2018-12-08 06:47:12</td><td>4</td><td>129051000.0</td><td>6291460.0</td></tr><tr><td>70</td><td>Flaci75</td><td>6d31161d92</td><td>2018-12-07 06:27:12</td><td>3</td><td>104858000.0</td><td>3119550.0</td></tr><tr><td>63</td><td>Elizabeth</td><td>3e54698dce</td><td>2018-12-07 13:42:12</td><td>2</td><td>725474000.0</td><td>5093570.0</td></tr><tr><td>59</td><td>DK6</td><td>e6ab95ae5a</td><td>2018-12-07 22:32:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>59</td><td>DK13</td><td>356626023e</td><td>2018-12-08 02:52:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>56</td><td>DK12</td><td>6bf6602ed9</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>50</td><td>klopsknoedel</td><td>c82b9e2435</td><td>2018-12-08 06:47:12</td><td>6</td><td>94371800.0</td><td>9387830.0</td></tr><tr><td>49</td><td>MMX99</td><td>6d24d6189a</td><td>2018-12-08 06:37:12</td><td>10</td><td>62914600.0</td><td>10485800.0</td></tr><tr><td>48</td><td>HomePC w10</td><td>21c1954eb1</td><td>2018-12-08 06:47:12</td><td>4</td><td>1048580.0</td><td>8388610.0</td></tr><tr><td>47</td><td></td><td>89cc383411</td><td>2018-12-07 17:12:12</td><td>6</td><td>6291460.0</td><td>12535900.0</td></tr><tr><td>45</td><td>DK8</td><td>fc09208d6f</td><td>2018-12-08 04:12:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>45</td><td>macgyver</td><td>4e92f89baa</td><td>2018-12-08 06:47:12</td><td>28</td><td>73400300.0</td><td>9437180.0</td></tr><tr><td>44</td><td>DK17</td><td>629439ff3a</td><td>2018-12-07 19:02:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>43</td><td>MMZ68</td><td>6557e52dad</td><td>2018-12-08 06:47:12</td><td>7</td><td>52428800.0</td><td>11534300.0</td></tr><tr><td>41</td><td>DK11</td><td>e0f6876a75</td><td>2018-12-07 16:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>40</td><td>nodeone</td><td>e0a9b3e00a</td><td>2018-11-30 04:12:21</td><td>5</td><td>92710800.0</td><td>10026700.0</td></tr><tr><td>40</td><td>DK23</td><td>bcae614d6a</td><td>2018-12-07 19:42:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>40</td><td>HypnoNode</td><td>aa99d9e417</td><td>2018-12-08 06:47:12</td><td>3</td><td>17380600.0</td><td>3670020.0</td></tr><tr><td>40</td><td>Vicente</td><td>0d3c417e55</td><td>2018-12-08 06:47:12</td><td>7</td><td>665142000.0</td><td>5786400.0</td></tr><tr><td>40</td><td>DK19</td><td>89d1e6953d</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>39</td><td>Pukerud</td><td>1fca5d276c</td><td>2018-12-08 05:02:12</td><td>14</td><td>132053000.0</td><td>11901500.0</td></tr><tr><td>39</td><td>Jambo</td><td>0aa3346fc0</td><td>2018-12-08 06:47:12</td><td>3</td><td>9280040.0</td><td>6180020.0</td></tr><tr><td>38</td><td>The_Bras_Node</td><td>873bd46534</td><td>2018-12-04 19:02:12</td><td>3</td><td>5242880.0</td><td>6244450.0</td></tr><tr><td>38</td><td>DK10</td><td>28fdc5a919</td><td>2018-12-06 04:12:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>37</td><td>DK18</td><td>b37d4a4ad2</td><td>2018-12-07 19:02:12</td><td>3</td><td>83886100.0</td><td>8912900.0</td></tr><tr><td>37</td><td>DK7</td><td>d1effca797</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>37</td><td>dollarbone</td><td>e224e508e8</td><td>2018-12-08 06:47:12</td><td>6</td><td>5865300.0</td><td>10759700.0</td></tr><tr><td>36</td><td>Node-ByZohaib</td><td>eb4732ff31</td><td>2018-12-08 06:47:12</td><td>14</td><td>132913000.0</td><td>12279000.0</td></tr><tr><td>36</td><td>sifotes_main</td><td>49dad8a6f7</td><td>2018-12-08 06:47:12</td><td>6</td><td>10485800.0</td><td>8388610.0</td></tr><tr><td>36</td><td>Almightyg73</td><td>9453522248</td><td>2018-12-08 06:47:12</td><td>6</td><td>104143000.0</td><td>5537570.0</td></tr><tr><td>36</td><td>plumbus</td><td>611f591f51</td><td>2018-12-08 06:47:12</td><td>6</td><td>52428800.0</td><td>8388610.0</td></tr><tr><td>34</td><td></td><td>bff195a144</td><td>2018-12-05 07:47:12</td><td>11</td><td>1048580.0</td><td>24452700.0</td></tr><tr><td>34</td><td>Forever_A-gator</td><td>8484883572</td><td>2018-12-05 10:27:12</td><td>7</td><td>122520000.0</td><td>6150060.0</td></tr><tr><td>34</td><td>DK27</td><td>7a81a0207e</td><td>2018-12-07 17:17:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>34</td><td>MIG-ETH</td><td>867f600af6</td><td>2018-12-08 06:47:12</td><td>3</td><td>94371800.0</td><td>11534300.0</td></tr><tr><td>33</td><td>eggsparkle</td><td>31591d04f7</td><td>2018-12-05 16:42:12</td><td>7</td><td>39997900.0</td><td>12492900.0</td></tr><tr><td>33</td><td>DK25</td><td>f14b7a141a</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>33</td><td>Fuzzy Golem 3</td><td>f74fc3f305</td><td>2018-12-08 06:47:12</td><td>3</td><td>799822000.0</td><td>6290010.0</td></tr><tr><td>32</td><td>mZoleee</td><td>9a98bc7729</td><td>2018-12-08 06:47:12</td><td>3</td><td>20971500.0</td><td>4194300.0</td></tr>
    </tbody>
  </table>
</div>

<div class='col-xs-12 col-lg-6 col-xl-4' style='padding:10px;'>
  <h5>Top 50 Subtasks Timeout</h5>
  <table class='top_dt table display nowrap table-bordered table-sm' width='100%'>
    <thead>
      <tr><th scope='col'>subtasks_timeout</th><th scope='col'>node_name</th><th scope='col'>short_node_id</th><th scope='col'>snapshot_date</th><th scope='col'>cpu_cores</th><th scope='col'>allowed_resource_size</th><th scope='col'>allowed_resource_memory</th></tr>
    </thead>
    <tbody>
      <tr><td scope='row'>168</td><td>DK17</td><td>629439ff3a</td><td>2018-12-07 19:02:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>153</td><td>austinav1</td><td>c1b1592c16</td><td>2018-12-06 06:02:12</td><td>3</td><td>293601000.0</td><td>7340030.0</td></tr><tr><td>145</td><td>Fat80y</td><td>3599f32da4</td><td>2018-12-08 06:47:12</td><td>6</td><td>73682400.0</td><td>12505700.0</td></tr><tr><td>139</td><td>DK27</td><td>7a81a0207e</td><td>2018-12-07 17:17:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>133</td><td>DK5</td><td>58d5956491</td><td>2018-12-08 02:07:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>133</td><td>DK25</td><td>f14b7a141a</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>131</td><td>DK22</td><td>f5785c737f</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>131</td><td></td><td>de002b1df0</td><td>2018-12-08 06:47:12</td><td>1</td><td>1048580000.0</td><td>8388610.0</td></tr><tr><td>130</td><td>Zoey</td><td>a517033a35</td><td>2018-12-08 06:47:12</td><td>1</td><td>397568000.0</td><td>8178580.0</td></tr><tr><td>124</td><td>DiamondGolem</td><td>09fd5d0bd6</td><td>2018-12-07 10:07:12</td><td>2</td><td>21543000.0</td><td>11523800.0</td></tr><tr><td>116</td><td>DK11</td><td>e0f6876a75</td><td>2018-12-07 16:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>115</td><td>DK20</td><td>31a2601e02</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>103</td><td>DK6</td><td>e6ab95ae5a</td><td>2018-12-07 22:32:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>89</td><td>gm</td><td>f97856d3c2</td><td>2018-12-08 06:47:12</td><td>1</td><td>142178000.0</td><td>3145730.0</td></tr><tr><td>84</td><td>DK16</td><td>cae4745f9d</td><td>2018-12-07 12:57:12</td><td>3</td><td>104858000.0</td><td>8912900.0</td></tr><tr><td>83</td><td>DK18</td><td>b37d4a4ad2</td><td>2018-12-07 19:02:12</td><td>3</td><td>83886100.0</td><td>8912900.0</td></tr><tr><td>83</td><td>waffledonkey2003</td><td>be7e5eec73</td><td>2018-12-08 06:47:12</td><td>12</td><td>52428800.0</td><td>20971500.0</td></tr><tr><td>78</td><td>DK23</td><td>bcae614d6a</td><td>2018-12-07 19:42:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>77</td><td>cryptohnode1</td><td>efb810bac8</td><td>2018-12-08 06:47:12</td><td>39</td><td>269233000.0</td><td>2986420.0</td></tr><tr><td>75</td><td>DK4</td><td>bfba7469f4</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>8912900.0</td></tr><tr><td>69</td><td>grunt</td><td>0022abe511</td><td>2018-12-07 02:47:12</td><td>7</td><td>2097150.0</td><td>9437180.0</td></tr><tr><td>68</td><td>xeqres</td><td>c01a28b851</td><td>2018-12-08 06:47:12</td><td>3</td><td>1048580.0</td><td>5242880.0</td></tr><tr><td>66</td><td>DK26</td><td>1c6c008734</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>8912900.0</td></tr><tr><td>63</td><td>superluis018</td><td>2cb753e34e</td><td>2018-12-08 06:47:12</td><td>3</td><td>78643200.0</td><td>8388610.0</td></tr><tr><td>62</td><td>DEDICATEDfastSSD</td><td>d3849667d4</td><td>2018-12-08 06:47:12</td><td>2</td><td>260364000.0</td><td>9983450.0</td></tr><tr><td>60</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2018-12-08 06:47:12</td><td>1</td><td>878157000.0</td><td>6260780.0</td></tr><tr><td>55</td><td>Fat80y 3</td><td>bcc87a9746</td><td>2018-12-08 06:47:12</td><td>3</td><td>19044700.0</td><td>9382160.0</td></tr><tr><td>53</td><td>moon0</td><td>c298c45088</td><td>2018-12-08 06:47:12</td><td>1</td><td>32505900.0</td><td>12479500.0</td></tr><tr><td>51</td><td>Durin2</td><td>b9340eeb6d</td><td>2018-12-08 06:47:12</td><td>1</td><td>52428800.0</td><td>5242880.0</td></tr><tr><td>50</td><td>m_node01</td><td>5df112fcd3</td><td>2018-12-01 04:17:21</td><td>2</td><td>52428800.0</td><td>4194300.0</td></tr><tr><td>49</td><td>DK19</td><td>89d1e6953d</td><td>2018-12-08 06:47:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>48</td><td>JumpNode2</td><td>4ef31fa7ec</td><td>2018-12-02 14:32:12</td><td>1</td><td>392369000.0</td><td>2865280.0</td></tr><tr><td>47</td><td>abcdefyyy</td><td>f57cfbf9b3</td><td>2018-12-08 06:47:12</td><td>3</td><td>11534300.0</td><td>4194300.0</td></tr><tr><td>47</td><td>Loki_Golem_1</td><td>aa62bc6250</td><td>2018-12-08 06:47:12</td><td>15</td><td>222218000.0</td><td>56615200.0</td></tr><tr><td>46</td><td>Kinezumi</td><td>9d39a4a596</td><td>2018-12-02 12:47:12</td><td>7</td><td>83043900.0</td><td>24117200.0</td></tr><tr><td>46</td><td>golemnode587394</td><td>036671814f</td><td>2018-12-08 06:47:12</td><td>3</td><td>1048580.0</td><td>5737510.0</td></tr><tr><td>44</td><td>Fat80y 1</td><td>a5157c6d80</td><td>2018-12-08 06:47:12</td><td>3</td><td>481752000.0</td><td>12543800.0</td></tr><tr><td>43</td><td>bigarmsbiggut</td><td>f080031296</td><td>2018-12-08 06:47:12</td><td>2</td><td>40182400.0</td><td>4955690.0</td></tr><tr><td>42</td><td>DonsDell</td><td>bfbd973bfd</td><td>2018-12-08 06:47:12</td><td>5</td><td>658529000.0</td><td>14120500.0</td></tr><tr><td>42</td><td>mainnet-gf-0 git</td><td>d7ce2191b8</td><td>2018-12-08 06:47:12</td><td>1</td><td>1048580.0</td><td>3033830.0</td></tr><tr><td>40</td><td>Vicente</td><td>0d3c417e55</td><td>2018-12-08 06:47:12</td><td>7</td><td>665142000.0</td><td>5786400.0</td></tr><tr><td>39</td><td>plowplow</td><td>02eae79914</td><td>2018-11-30 14:47:21</td><td>2</td><td>209715000.0</td><td>16777200.0</td></tr><tr><td>38</td><td>DK13</td><td>356626023e</td><td>2018-12-08 02:52:12</td><td>3</td><td>104858000.0</td><td>5242880.0</td></tr><tr><td>36</td><td>WishMeLuck1</td><td>fa52fe0e2e</td><td>2018-12-08 06:47:12</td><td>11</td><td>73184000.0</td><td>12507400.0</td></tr><tr><td>36</td><td>LilaSchwarz</td><td>5c141cff47</td><td>2018-12-08 06:47:12</td><td>5</td><td>125249000.0</td><td>12544600.0</td></tr><tr><td>35</td><td>Flaci75</td><td>6d31161d92</td><td>2018-12-07 06:27:12</td><td>3</td><td>104858000.0</td><td>3119550.0</td></tr><tr><td>35</td><td>Mario_exe</td><td>90e1023ad6</td><td>2018-12-08 06:47:12</td><td>3</td><td>102637000.0</td><td>12582900.0</td></tr><tr><td>34</td><td>barpaum</td><td>bb83e4e849</td><td>2018-12-07 15:57:12</td><td>11</td><td>91807200.0</td><td>7646930.0</td></tr><tr><td>33</td><td>mainnet-gf-2 git</td><td>eacdc65513</td><td>2018-12-08 06:47:12</td><td>1</td><td>1048580.0</td><td>3033830.0</td></tr><tr><td>33</td><td>Dog_Workstation</td><td>429ece51a7</td><td>2018-12-08 06:47:12</td><td>1</td><td>2934420.0</td><td>2806620.0</td></tr>
    </tbody>
  </table>
</div>

<div class='col-xs-12 col-lg-6 col-xl-4' style='padding:10px;'>
  <h5>Top 50 RS Tasks Count</h5>
  <table class='top_dt table display nowrap table-bordered table-sm' width='100%'>
    <thead>
      <tr><th scope='col'>rs_tasks_cnt</th><th scope='col'>node_name</th><th scope='col'>short_node_id</th><th scope='col'>snapshot_date</th><th scope='col'>cpu_cores</th><th scope='col'>allowed_resource_size</th><th scope='col'>allowed_resource_memory</th></tr>
    </thead>
    <tbody>
      <tr><td scope='row'>1010</td><td></td><td>61cd12cd67</td><td>2018-12-07 09:57:12</td><td>11</td><td>1048580.0</td><td>24452700.0</td></tr><tr><td>596</td><td>Tasty Doe</td><td>1f8e0cdf90</td><td>2018-12-08 06:47:12</td><td>1</td><td>1048580.0</td><td>6130370.0</td></tr><tr><td>556</td><td>ImALumberJack</td><td>839b655694</td><td>2018-12-08 06:47:12</td><td>7</td><td>1048580.0</td><td>24709800.0</td></tr><tr><td>482</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2018-12-08 06:47:12</td><td>2</td><td>1048580.0</td><td>7340030.0</td></tr><tr><td>204</td><td>fzhut</td><td>efc9be5e59</td><td>2018-12-08 06:47:12</td><td>1</td><td>1048580.0</td><td>6130390.0</td></tr><tr><td>54</td><td></td><td>e6d8e92427</td><td>2018-12-05 07:47:12</td><td>11</td><td>1048580.0</td><td>24452700.0</td></tr><tr><td>11</td><td>RenderWithGolem</td><td>2d68813374</td><td>2018-12-01 14:17:12</td><td>1</td><td>1048580.0</td><td>1048580.0</td></tr><tr><td>11</td><td>Phillip-test</td><td>a6389e8e79</td><td>2018-12-03 16:27:12</td><td>3</td><td>1048580.0</td><td>50280600.0</td></tr><tr><td>10</td><td></td><td>9ea5ab4e86</td><td>2018-12-06 01:57:12</td><td>11</td><td>1048580.0</td><td>24452700.0</td></tr><tr><td>6</td><td>cppawel</td><td>d51c299bf5</td><td>2018-12-07 04:47:12</td><td>3</td><td>1048580.0</td><td>6034320.0</td></tr><tr><td>5</td><td></td><td>b8c686409f</td><td>2018-12-03 07:47:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>5</td><td>Risperker</td><td>a9d91958d6</td><td>2018-12-03 15:47:12</td><td>5</td><td>1048580.0</td><td>12525100.0</td></tr><tr><td>4</td><td>RWG-testnet</td><td>bf3899f9c2</td><td>2018-12-03 14:12:12</td><td>3</td><td>1048580.0</td><td>12319100.0</td></tr><tr><td>3</td><td></td><td>c655c4771a</td><td>2018-11-30 06:37:21</td><td>2</td><td>1048580.0</td><td>4701180.0</td></tr><tr><td>3</td><td></td><td>01090e3877</td><td>2018-11-30 10:32:21</td><td>2</td><td>1048580.0</td><td>4701180.0</td></tr><tr><td>3</td><td>Bad Wolf</td><td>9d5cb6e59b</td><td>2018-11-30 12:12:21</td><td>2</td><td>50137500.0</td><td>8992910.0</td></tr><tr><td>3</td><td></td><td>b977047110</td><td>2018-12-03 11:42:12</td><td>3</td><td>1048580.0</td><td>4701180.0</td></tr><tr><td>3</td><td>oncoming storm</td><td>6c15fa96c1</td><td>2018-12-03 11:47:12</td><td>2</td><td>30880800.0</td><td>7947580.0</td></tr><tr><td>3</td><td>Szadok</td><td>6015c9f98f</td><td>2018-12-05 08:07:12</td><td>4</td><td>122005000.0</td><td>17616100.0</td></tr><tr><td>3</td><td>MS_laptop</td><td>4968a9358d</td><td>2018-12-07 13:17:12</td><td>7</td><td>1048580.0</td><td>24591400.0</td></tr><tr><td>3</td><td>bogusz_</td><td>389d6e81ae</td><td>2018-12-07 13:52:12</td><td>2</td><td>85756800.0</td><td>2698260.0</td></tr><tr><td>3</td><td>Scyther</td><td>a3020d305e</td><td>2018-12-07 17:17:12</td><td>3</td><td>127826000.0</td><td>12582900.0</td></tr><tr><td>2</td><td></td><td>ba23846180</td><td>2018-11-30 06:12:21</td><td>7</td><td>1048580.0</td><td>24667200.0</td></tr><tr><td>2</td><td></td><td>9c010d54c2</td><td>2018-12-04 04:37:12</td><td>4</td><td>1048580.0</td><td>17825800.0</td></tr><tr><td>2</td><td></td><td>3c9ebdb65d</td><td>2018-12-04 09:52:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td>igor test</td><td>57821077d0</td><td>2018-12-05 03:52:12</td><td>3</td><td>1048580.0</td><td>12130300.0</td></tr><tr><td>2</td><td></td><td>6ba883fa5a</td><td>2018-12-05 06:27:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td></td><td>26c5a8c50f</td><td>2018-12-05 06:57:12</td><td>7</td><td>1048580.0</td><td>12230100.0</td></tr><tr><td>2</td><td></td><td>dc177397c5</td><td>2018-12-05 07:07:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td></td><td>8980c07285</td><td>2018-12-05 07:42:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td>test-golem</td><td>fcce9e2555</td><td>2018-12-06 03:27:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td></td><td>74412d539e</td><td>2018-12-06 06:32:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td></td><td>85732b0ecb</td><td>2018-12-07 06:02:12</td><td>11</td><td>1048580.0</td><td>24548200.0</td></tr><tr><td>1</td><td></td><td>94c3e06a11</td><td>2018-12-05 03:37:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>c185d4ed82</td><td>2018-12-05 04:37:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>e440ffc0ea</td><td>2018-12-05 05:52:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>47bc1282eb</td><td>2018-12-05 06:17:12</td><td>7</td><td>1048580.0</td><td>12230100.0</td></tr><tr><td>1</td><td></td><td>4b0b04b0d5</td><td>2018-12-05 06:42:12</td><td>7</td><td>1048580.0</td><td>12230100.0</td></tr><tr><td>1</td><td></td><td>351a3e2e8b</td><td>2018-12-05 08:17:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>126074c1af</td><td>2018-12-05 09:17:12</td><td>7</td><td>1048580.0</td><td>12230100.0</td></tr><tr><td>1</td><td>BBTTestNode</td><td>8388887a56</td><td>2018-12-05 19:02:12</td><td>31</td><td>1048580.0</td><td>50232200.0</td></tr><tr><td>1</td><td></td><td>58f81cac03</td><td>2018-12-06 03:37:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>5542fa8940</td><td>2018-12-06 06:07:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>45ef349c6e</td><td>2018-12-06 06:27:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>373d08a015</td><td>2018-12-06 07:52:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>4a6ab985e7</td><td>2018-12-06 08:42:12</td><td>7</td><td>1048580.0</td><td>12230100.0</td></tr><tr><td>1</td><td></td><td>5f3d555b61</td><td>2018-12-06 09:37:12</td><td>7</td><td>1048580.0</td><td>12230100.0</td></tr><tr><td>1</td><td></td><td>f0122ea466</td><td>2018-12-06 10:02:12</td><td>7</td><td>1048580.0</td><td>12230100.0</td></tr><tr><td>1</td><td></td><td>a8855c0503</td><td>2018-12-07 05:47:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>ee90532522</td><td>2018-12-07 09:27:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr>
    </tbody>
  </table>
</div>

<div class='col-xs-12 col-lg-6 col-xl-4' style='padding:10px;'>
  <h5>Top 50 RS Finished Task Count</h5>
  <table class='top_dt table display nowrap table-bordered table-sm' width='100%'>
    <thead>
      <tr><th scope='col'>rs_finished_task_cnt</th><th scope='col'>node_name</th><th scope='col'>short_node_id</th><th scope='col'>snapshot_date</th><th scope='col'>cpu_cores</th><th scope='col'>allowed_resource_size</th><th scope='col'>allowed_resource_memory</th></tr>
    </thead>
    <tbody>
      <tr><td scope='row'>210</td><td></td><td>61cd12cd67</td><td>2018-12-07 09:57:12</td><td>11</td><td>1048580.0</td><td>24452700.0</td></tr><tr><td>182</td><td>Tasty Doe</td><td>1f8e0cdf90</td><td>2018-12-08 06:47:12</td><td>1</td><td>1048580.0</td><td>6130370.0</td></tr><tr><td>182</td><td>fzhut</td><td>efc9be5e59</td><td>2018-12-08 06:47:12</td><td>1</td><td>1048580.0</td><td>6130390.0</td></tr><tr><td>158</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2018-12-08 06:47:12</td><td>2</td><td>1048580.0</td><td>7340030.0</td></tr><tr><td>101</td><td>ImALumberJack</td><td>839b655694</td><td>2018-12-08 06:47:12</td><td>7</td><td>1048580.0</td><td>24709800.0</td></tr><tr><td>54</td><td></td><td>e6d8e92427</td><td>2018-12-05 07:47:12</td><td>11</td><td>1048580.0</td><td>24452700.0</td></tr><tr><td>11</td><td>RenderWithGolem</td><td>2d68813374</td><td>2018-12-01 14:17:12</td><td>1</td><td>1048580.0</td><td>1048580.0</td></tr><tr><td>10</td><td>Phillip-test</td><td>a6389e8e79</td><td>2018-12-03 16:27:12</td><td>3</td><td>1048580.0</td><td>50280600.0</td></tr><tr><td>10</td><td></td><td>9ea5ab4e86</td><td>2018-12-06 01:57:12</td><td>11</td><td>1048580.0</td><td>24452700.0</td></tr><tr><td>6</td><td>cppawel</td><td>d51c299bf5</td><td>2018-12-07 04:47:12</td><td>3</td><td>1048580.0</td><td>6034320.0</td></tr><tr><td>4</td><td>RWG-testnet</td><td>bf3899f9c2</td><td>2018-12-03 14:12:12</td><td>3</td><td>1048580.0</td><td>12319100.0</td></tr><tr><td>4</td><td>Risperker</td><td>a9d91958d6</td><td>2018-12-03 15:47:12</td><td>5</td><td>1048580.0</td><td>12525100.0</td></tr><tr><td>3</td><td></td><td>c655c4771a</td><td>2018-11-30 06:37:21</td><td>2</td><td>1048580.0</td><td>4701180.0</td></tr><tr><td>3</td><td></td><td>b977047110</td><td>2018-12-03 11:42:12</td><td>3</td><td>1048580.0</td><td>4701180.0</td></tr><tr><td>3</td><td>oncoming storm</td><td>6c15fa96c1</td><td>2018-12-03 11:47:12</td><td>2</td><td>30880800.0</td><td>7947580.0</td></tr><tr><td>3</td><td>Szadok</td><td>6015c9f98f</td><td>2018-12-05 08:07:12</td><td>4</td><td>122005000.0</td><td>17616100.0</td></tr><tr><td>3</td><td>MS_laptop</td><td>4968a9358d</td><td>2018-12-07 13:17:12</td><td>7</td><td>1048580.0</td><td>24591400.0</td></tr><tr><td>3</td><td>Scyther</td><td>a3020d305e</td><td>2018-12-07 17:17:12</td><td>3</td><td>127826000.0</td><td>12582900.0</td></tr><tr><td>2</td><td></td><td>01090e3877</td><td>2018-11-30 10:32:21</td><td>2</td><td>1048580.0</td><td>4701180.0</td></tr><tr><td>2</td><td>Bad Wolf</td><td>9d5cb6e59b</td><td>2018-11-30 12:12:21</td><td>2</td><td>50137500.0</td><td>8992910.0</td></tr><tr><td>2</td><td></td><td>3c9ebdb65d</td><td>2018-12-04 09:52:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td>igor test</td><td>57821077d0</td><td>2018-12-05 03:52:12</td><td>3</td><td>1048580.0</td><td>12130300.0</td></tr><tr><td>2</td><td></td><td>6ba883fa5a</td><td>2018-12-05 06:27:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td></td><td>dc177397c5</td><td>2018-12-05 07:07:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td></td><td>8980c07285</td><td>2018-12-05 07:42:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td></td><td>85732b0ecb</td><td>2018-12-07 06:02:12</td><td>11</td><td>1048580.0</td><td>24548200.0</td></tr><tr><td>1</td><td></td><td>ba23846180</td><td>2018-11-30 06:12:21</td><td>7</td><td>1048580.0</td><td>24667200.0</td></tr><tr><td>1</td><td></td><td>b8c686409f</td><td>2018-12-03 07:47:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>9c010d54c2</td><td>2018-12-04 04:37:12</td><td>4</td><td>1048580.0</td><td>17825800.0</td></tr><tr><td>1</td><td></td><td>f0535efc01</td><td>2018-12-04 06:57:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>d24993af27</td><td>2018-12-04 13:02:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>94c3e06a11</td><td>2018-12-05 03:37:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>1cba7ae8d1</td><td>2018-12-05 04:12:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>c185d4ed82</td><td>2018-12-05 04:37:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>e440ffc0ea</td><td>2018-12-05 05:52:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>47bc1282eb</td><td>2018-12-05 06:17:12</td><td>7</td><td>1048580.0</td><td>12230100.0</td></tr><tr><td>1</td><td></td><td>4b0b04b0d5</td><td>2018-12-05 06:42:12</td><td>7</td><td>1048580.0</td><td>12230100.0</td></tr><tr><td>1</td><td></td><td>71b8a7bf1d</td><td>2018-12-05 07:07:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>78a2ee74ef</td><td>2018-12-05 07:47:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>351a3e2e8b</td><td>2018-12-05 08:17:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>5542fa8940</td><td>2018-12-06 06:07:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>45ef349c6e</td><td>2018-12-06 06:27:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>74412d539e</td><td>2018-12-06 06:32:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>373d08a015</td><td>2018-12-06 07:52:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>aa57c5b565</td><td>2018-12-06 08:37:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>f097d457a2</td><td>2018-12-07 01:52:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>a8855c0503</td><td>2018-12-07 05:47:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>ee90532522</td><td>2018-12-07 09:27:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>b1a463183f</td><td>2018-12-07 11:12:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td>bogusz_</td><td>389d6e81ae</td><td>2018-12-07 13:52:12</td><td>2</td><td>85756800.0</td><td>2698260.0</td></tr>
    </tbody>
  </table>
</div>

<div class='col-xs-12 col-lg-6 col-xl-4' style='padding:10px;'>
  <h5>Top 50 RS Finished Ok Count</h5>
  <table class='top_dt table display nowrap table-bordered table-sm' width='100%'>
    <thead>
      <tr><th scope='col'>rs_finished_ok_cnt</th><th scope='col'>node_name</th><th scope='col'>short_node_id</th><th scope='col'>snapshot_date</th><th scope='col'>cpu_cores</th><th scope='col'>allowed_resource_size</th><th scope='col'>allowed_resource_memory</th></tr>
    </thead>
    <tbody>
      <tr><td scope='row'>99</td><td></td><td>61cd12cd67</td><td>2018-12-07 09:57:12</td><td>11</td><td>1048580.0</td><td>24452700.0</td></tr><tr><td>26</td><td></td><td>e6d8e92427</td><td>2018-12-05 07:47:12</td><td>11</td><td>1048580.0</td><td>24452700.0</td></tr><tr><td>10</td><td></td><td>9ea5ab4e86</td><td>2018-12-06 01:57:12</td><td>11</td><td>1048580.0</td><td>24452700.0</td></tr><tr><td>9</td><td>Phillip-test</td><td>a6389e8e79</td><td>2018-12-03 16:27:12</td><td>3</td><td>1048580.0</td><td>50280600.0</td></tr><tr><td>6</td><td>Tasty Doe</td><td>1f8e0cdf90</td><td>2018-12-08 06:47:12</td><td>1</td><td>1048580.0</td><td>6130370.0</td></tr><tr><td>6</td><td>ImALumberJack</td><td>839b655694</td><td>2018-12-08 06:47:12</td><td>7</td><td>1048580.0</td><td>24709800.0</td></tr><tr><td>4</td><td>Risperker</td><td>a9d91958d6</td><td>2018-12-03 15:47:12</td><td>5</td><td>1048580.0</td><td>12525100.0</td></tr><tr><td>3</td><td></td><td>c655c4771a</td><td>2018-11-30 06:37:21</td><td>2</td><td>1048580.0</td><td>4701180.0</td></tr><tr><td>3</td><td>RenderWithGolem</td><td>2d68813374</td><td>2018-12-01 14:17:12</td><td>1</td><td>1048580.0</td><td>1048580.0</td></tr><tr><td>3</td><td>oncoming storm</td><td>6c15fa96c1</td><td>2018-12-03 11:47:12</td><td>2</td><td>30880800.0</td><td>7947580.0</td></tr><tr><td>3</td><td>RWG-testnet</td><td>bf3899f9c2</td><td>2018-12-03 14:12:12</td><td>3</td><td>1048580.0</td><td>12319100.0</td></tr><tr><td>3</td><td>cppawel</td><td>d51c299bf5</td><td>2018-12-07 04:47:12</td><td>3</td><td>1048580.0</td><td>6034320.0</td></tr><tr><td>3</td><td>MS_laptop</td><td>4968a9358d</td><td>2018-12-07 13:17:12</td><td>7</td><td>1048580.0</td><td>24591400.0</td></tr><tr><td>2</td><td></td><td>b977047110</td><td>2018-12-03 11:42:12</td><td>3</td><td>1048580.0</td><td>4701180.0</td></tr><tr><td>2</td><td></td><td>3c9ebdb65d</td><td>2018-12-04 09:52:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td>igor test</td><td>57821077d0</td><td>2018-12-05 03:52:12</td><td>3</td><td>1048580.0</td><td>12130300.0</td></tr><tr><td>2</td><td></td><td>6ba883fa5a</td><td>2018-12-05 06:27:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td></td><td>dc177397c5</td><td>2018-12-05 07:07:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td></td><td>8980c07285</td><td>2018-12-05 07:42:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>2</td><td>Szadok</td><td>6015c9f98f</td><td>2018-12-05 08:07:12</td><td>4</td><td>122005000.0</td><td>17616100.0</td></tr><tr><td>2</td><td></td><td>85732b0ecb</td><td>2018-12-07 06:02:12</td><td>11</td><td>1048580.0</td><td>24548200.0</td></tr><tr><td>2</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2018-12-08 06:47:12</td><td>2</td><td>1048580.0</td><td>7340030.0</td></tr><tr><td>1</td><td></td><td>01090e3877</td><td>2018-11-30 10:32:21</td><td>2</td><td>1048580.0</td><td>4701180.0</td></tr><tr><td>1</td><td>Bad Wolf</td><td>9d5cb6e59b</td><td>2018-11-30 12:12:21</td><td>2</td><td>50137500.0</td><td>8992910.0</td></tr><tr><td>1</td><td></td><td>b8c686409f</td><td>2018-12-03 07:47:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>9c010d54c2</td><td>2018-12-04 04:37:12</td><td>4</td><td>1048580.0</td><td>17825800.0</td></tr><tr><td>1</td><td></td><td>f0535efc01</td><td>2018-12-04 06:57:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>94c3e06a11</td><td>2018-12-05 03:37:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>26c5a8c50f</td><td>2018-12-05 06:57:12</td><td>7</td><td>1048580.0</td><td>12230100.0</td></tr><tr><td>1</td><td></td><td>71b8a7bf1d</td><td>2018-12-05 07:07:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>78a2ee74ef</td><td>2018-12-05 07:47:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td>golem1234</td><td>0253d0d0bf</td><td>2018-12-06 05:32:12</td><td>11</td><td>1048580.0</td><td>24452700.0</td></tr><tr><td>1</td><td></td><td>45ef349c6e</td><td>2018-12-06 06:27:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>74412d539e</td><td>2018-12-06 06:32:12</td><td>11</td><td>1048580.0</td><td>24536800.0</td></tr><tr><td>1</td><td></td><td>ea434a2be3</td><td>2018-12-06 07:12:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>f097d457a2</td><td>2018-12-07 01:52:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>68893cf110</td><td>2018-12-07 06:12:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td></td><td>50ec941441</td><td>2018-12-07 06:52:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>1</td><td>fzhut</td><td>efc9be5e59</td><td>2018-12-08 06:47:12</td><td>1</td><td>1048580.0</td><td>6130390.0</td></tr><tr><td>0</td><td></td><td>8bbac85d22</td><td>2018-12-02 13:12:12</td><td>15</td><td>1048580.0</td><td>12542300.0</td></tr><tr><td>0</td><td></td><td>1c44549dd5</td><td>2018-12-03 11:52:12</td><td>1</td><td>1048580.0</td><td>1535030.0</td></tr><tr><td>0</td><td>Avins</td><td>793ca6a557</td><td>2018-12-06 05:22:12</td><td>7</td><td>165863000.0</td><td>25117500.0</td></tr><tr><td>0</td><td>Shams</td><td>1472f61f21</td><td>2018-12-06 05:47:12</td><td>11</td><td>1048580.0</td><td>12582900.0</td></tr><tr><td>0</td><td>liondk</td><td>0d331e44b2</td><td>2018-12-06 15:02:12</td><td>7</td><td>1048580.0</td><td>18834700.0</td></tr><tr><td>0</td><td></td><td>e2cd4da7a6</td><td>2018-12-07 04:47:12</td><td>11</td><td>1048580.0</td><td>24548200.0</td></tr><tr><td>0</td><td>floyd-g01</td><td>44fbc4686a</td><td>2018-12-07 08:12:12</td><td>7</td><td>89417100.0</td><td>12582900.0</td></tr><tr><td>0</td><td>Talus</td><td>3edbb85279</td><td>2018-12-08 06:47:12</td><td>23</td><td>9437180.0</td><td>6102340.0</td></tr><tr><td>0</td><td>mrkmerc</td><td>2e00892ac8</td><td>2018-12-08 06:47:12</td><td>3</td><td>336651000.0</td><td>15627400.0</td></tr><tr><td>0</td><td>Desktop-i5</td><td>52da8662a3</td><td>2018-12-08 06:47:12</td><td>3</td><td>1048580.0</td><td>12352300.0</td></tr><tr><td>0</td><td>golem-spliff-osx</td><td>5015bfd932</td><td>2018-12-08 06:47:12</td><td>2</td><td>861267000.0</td><td>5662310.0</td></tr>
    </tbody>
  </table>
</div>

<div class='col-xs-12 col-lg-6 col-xl-4' style='padding:10px;'>
  <h5>Top 50 CPU Core Count</h5>
  <table class='top_dt table display nowrap table-bordered table-sm' width='100%'>
    <thead>
      <tr><th scope='col'>cpu_cores</th><th scope='col'>node_name</th><th scope='col'>short_node_id</th><th scope='col'>snapshot_date</th><th scope='col'>cpu_cores</th><th scope='col'>allowed_resource_size</th><th scope='col'>allowed_resource_memory</th></tr>
    </thead>
    <tbody>
      <tr><td scope='row'>63</td><td></td><td>819fa3c479</td><td>2018-12-07 21:17:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>d21faacd1c</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>9c9f20bb6d</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>34bf695cea</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>c3d23a9761</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>f87104265e</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td>ice_miner_0</td><td>d5dc1c4738</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>1db2989afe</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>6dd9644cff</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>b1c26f12ab</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>85b9164328</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>f5f643d260</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>5ad7765acc</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>7e3cea8a91</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>1af8bd40c3</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>561618eb72</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>23636fca2f</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td>golem1</td><td>c2490a5ce2</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>40f92da3c2</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>63</td><td></td><td>57ce921b99</td><td>2018-12-08 06:47:12</td><td>63</td><td>1048580.0</td><td>198089000.0</td></tr><tr><td>39</td><td>cryptohnode1</td><td>efb810bac8</td><td>2018-12-08 06:47:12</td><td>39</td><td>269233000.0</td><td>2986420.0</td></tr><tr><td>32</td><td>SuperServer</td><td>29d99e9d1c</td><td>2018-12-02 01:07:12</td><td>32</td><td>1048580.0</td><td>100581000.0</td></tr><tr><td>32</td><td>Castillos</td><td>8f9e9681c0</td><td>2018-12-04 13:17:12</td><td>32</td><td>143270000.0</td><td>13910600.0</td></tr><tr><td>32</td><td>Zanthrox</td><td>39fe33f170</td><td>2018-12-06 05:27:12</td><td>32</td><td>20497400.0</td><td>12523800.0</td></tr><tr><td>32</td><td>KOW4G02</td><td>fefade7675</td><td>2018-12-08 06:47:12</td><td>32</td><td>104858000.0</td><td>50331600.0</td></tr><tr><td>31</td><td>pupo</td><td>b681589b6c</td><td>2018-12-02 02:17:12</td><td>31</td><td>120756000.0</td><td>25067600.0</td></tr><tr><td>31</td><td>Spreadnode</td><td>bcda4f4dea</td><td>2018-12-03 11:37:12</td><td>31</td><td>1048580.0</td><td>25074600.0</td></tr><tr><td>31</td><td>BBTTestNode</td><td>8388887a56</td><td>2018-12-05 19:02:12</td><td>31</td><td>1048580.0</td><td>50232200.0</td></tr><tr><td>31</td><td>Threadripper-Max</td><td>832633c10d</td><td>2018-12-06 19:42:12</td><td>31</td><td>20971500.0</td><td>25069400.0</td></tr><tr><td>29</td><td>NightSky</td><td>da98bf2ac0</td><td>2018-12-08 06:47:12</td><td>29</td><td>15728600.0</td><td>12313300.0</td></tr><tr><td>28</td><td>macgyver</td><td>4e92f89baa</td><td>2018-12-08 06:47:12</td><td>28</td><td>73400300.0</td><td>9437180.0</td></tr><tr><td>27</td><td></td><td>d7c46b1d37</td><td>2018-12-08 04:32:12</td><td>27</td><td>1048580.0</td><td>12457200.0</td></tr><tr><td>27</td><td>tiger-zoo</td><td>258ab76a7c</td><td>2018-12-08 06:47:12</td><td>27</td><td>9619890.0</td><td>6122860.0</td></tr><tr><td>27</td><td>zootopia</td><td>87f1bdc964</td><td>2018-12-08 06:47:12</td><td>27</td><td>37565700.0</td><td>12192900.0</td></tr><tr><td>24</td><td>Ordi-de-jeux</td><td>09a9d523dd</td><td>2018-12-06 15:12:12</td><td>24</td><td>282504000.0</td><td>18685800.0</td></tr><tr><td>24</td><td>Cormatic</td><td>5ee5b3e65c</td><td>2018-12-08 06:47:12</td><td>24</td><td>104858000.0</td><td>20971500.0</td></tr><tr><td>23</td><td></td><td>310e73c1ff</td><td>2018-12-05 03:42:12</td><td>23</td><td>1048580.0</td><td>18501500.0</td></tr><tr><td>23</td><td>cryptono</td><td>226e019ef5</td><td>2018-12-05 08:52:12</td><td>23</td><td>1048580.0</td><td>149823000.0</td></tr><tr><td>23</td><td></td><td>0b2b95e6c4</td><td>2018-12-08 06:47:12</td><td>23</td><td>1048580.0</td><td>18503100.0</td></tr><tr><td>23</td><td>RebbeLoew</td><td>e71e44cb78</td><td>2018-12-08 06:47:12</td><td>23</td><td>1048580.0</td><td>61855300.0</td></tr><tr><td>23</td><td>Talus</td><td>3edbb85279</td><td>2018-12-08 06:47:12</td><td>23</td><td>9437180.0</td><td>6102340.0</td></tr><tr><td>22</td><td>DedoGolem</td><td>364fd5af24</td><td>2018-12-08 06:47:12</td><td>22</td><td>94565000.0</td><td>16777200.0</td></tr><tr><td>21</td><td></td><td>892d074702</td><td>2018-12-08 06:47:12</td><td>21</td><td>787915000.0</td><td>143436000.0</td></tr><tr><td>21</td><td>XATA</td><td>f98e6bd288</td><td>2018-12-08 06:47:12</td><td>21</td><td>20414600.0</td><td>27778400.0</td></tr><tr><td>20</td><td>JulianoThreadrip</td><td>70179e7897</td><td>2018-12-07 10:57:12</td><td>20</td><td>13787300.0</td><td>10485800.0</td></tr><tr><td>19</td><td>KOW3G10</td><td>851274073c</td><td>2018-12-08 04:12:12</td><td>19</td><td>200174000.0</td><td>25139600.0</td></tr><tr><td>16</td><td>Observer-k</td><td>ea33ffbea0</td><td>2018-12-08 06:47:12</td><td>16</td><td>104858000.0</td><td>10485800.0</td></tr><tr><td>15</td><td>CodeReclaimers1</td><td>bbb47c1e45</td><td>2018-11-30 06:07:21</td><td>15</td><td>1048580.0</td><td>50291900.0</td></tr><tr><td>15</td><td></td><td>8bbac85d22</td><td>2018-12-02 13:12:12</td><td>15</td><td>1048580.0</td><td>12542300.0</td></tr><tr><td>15</td><td>JohnMatrix</td><td>96ea0dafb8</td><td>2018-12-04 03:22:12</td><td>15</td><td>1048580.0</td><td>12309500.0</td></tr>
    </tbody>
  </table>
</div>

</div>

<br /><br />
### [All Nodes by Latest Snapshop](All-Nodes-Latest-Snapshot)

<br /><br />
<div id="Count-of-distinct-nodes-connected-by-date"></div>

### Count of distinct nodes connected by date

<details>
<summary><strong>Details</strong></summary>

<p>This one is pretty straight-forward. Snapshots only include active nodes, inactive node data is not being collected during a snapshot.</p>

<p>Upgraded to sql database; [link to sql query](https://github.com/kascheri12/golem_util/blob/2d735f74a1f4b16f4e3b9eb58d75d01e9fedcf7b/analyze_data.py#L1221)</p>
</details>
<br />
<iframe id="iframe_nodes_connected_by_date" style="width:100%;height:600px" src=""></iframe>

<br /><br />
<div id="Count-of-distinct-nodes-connected-by-date"></div>

### Top 50 successful subtasks limit 90 days

<details>
<summary><strong>Details</strong></summary>

<p>This graph is of the top 50 highest successful subtask counts, inspecting each nodes' value over the past ninety days.</p>

</details>
<br />
<iframe id="iframe_top_50_subtasks_success_by_date" style="width:100%;height:600px" src=""></iframe>

<details>
<summary>Show other graphs</summary>

<br><br><br>
<h2>These graphs are here for historical purposes but they won't be updated anymore. I will be working to replace them with new sql queries to match but the extremely inefficient way that I was generating these graphs is now in the past.</h2>
<br><br>

<div id="Golem-Network-Summary"></div>

### Golem Network Summary

<details>
<summary><strong>Details</strong></summary>

<p>This is a summary of some standard resources along with a basic active node count. The three values for CPU Cores, Allowed Resource Memory, and Allowed Resource Size are found based on summing the corresponding values of the active nodes in a snapshot and dividing each by the number of snapshots.</p>

</details>
<br />
<iframe id="iframe_golem-network" style="width:100%;height:600px" src=""></iframe>


<div id="Average-Daily-Subtasks-Totals"></div>

### Average Daily Subtask Totals

<details>
<summary><strong>Details</strong></summary>

<p>This is a summary of some standard resources along with a basic active node count. The three values for CPU Cores, Allowed Resource Memory, and Allowed Resource Size are found based on summing the corresponding values of the active nodes in a snapshot and dividing each by the number of snapshots.</p>

<p>This one shows the average values per day of snapshots of new unique nodes, subtasks requested, and subtasks computed on the date. Many nodes can come and go throughout the day so I thought that an average amongst the snapshots collected per day would work as a standard daily metric for these graphs.</p>

<p>The function that builds these values is [get_avg_daily_subtask_totals()](https://github.com/kascheri12/golem_util/blob/4b40695b16f120776a49613bf94678f732ef2b93/analyze_data.py#L701).</p>
<p>
Here's pseudo code for the functions:
<ul>
  <li>[get_avg_requested_subtasks_on_date(list_nodes_on_date,distinct_timestamps_on_date)](https://github.com/kascheri12/golem_util/blob/4b40695b16f120776a49613bf94678f732ef2b93/analyze_data.py#L646)</li>
  <ul>
    <li>total_count_requested_subtasks = sum( requested_subtasks ) in list_nodes_on_date</li>
    <li>return total_count_requested_subtasks / len(distinct_timestamp_on_date)</li>
  </ul>
  <li>[get_avg_subtasks_completed_on_date(list_nodes_on_date,distinct_timestamps_on_date)](https://github.com/kascheri12/golem_util/blob/4b40695b16f120776a49613bf94678f732ef2b93/analyze_data.py#L650)</li>
  <ul>
    <li>total_count_requested_subtasks = sum( requested_subtasks ) in list_nodes_on_date</li>
    <li>return total_count_subtasks_success / len(distinct_timestamps_on_date)</li>
  </ul>
</ul>
</p>

<p>The reason that the average total completed subtasks on a given date is greater than the average requested subtasks is because this is only a snapshot in time of the nodes that are connected. A node that has completed subtasks for another might still be connected to the network while the requested has since left the network thereby removing that count from future snapshots while it is disconnected.</p>

</details>
<br />
<iframe id="iframe_avg_daily_subtasks_totals" style="width:100%;height:600px" src=""></iframe>


<div id="Average-Daily-Failed-Totals"></div>

### Average Daily Failed Totals
<br />
<iframe id="iframe_avg_daily_failed_totals" style="width:100%;height:600px" src=""></iframe>

<div id="Average-New-Unique-Node-Count-per-Day"></div>

### Average New Unique Node Count per Day

<details>
<summary><strong>Details</strong></summary>

<p>Node ID's collected and referenced below are only ones collected in the time that I've been collecting data.</p>

<p>
Pseudo code:
<ul>
  <li>[get_avg_new_unique_node_count_on_date(date)](https://github.com/kascheri12/golem_util/blob/4b40695b16f120776a49613bf94678f732ef2b93/analyze_data.py#L630)</li>
  <ul>
    <li>Gather lists of distinct_node_ids_logged_on_date, distinct_timestamps_on_date, and distinct_node_ids_logged_before_date</li>
    <li>Get new_unique_nodes_on_date from distinct_node_ids_logged_on_date that are not in distinct_node_ids_logged_before_date</li>
    <li>return len(new_unique_nodes_on_date)/len(distinct_timestamps_on_date)</li>
  </ul>
</ul>
</p>
</details>
<br />
<iframe id="iframe_avg_daily_unique_totals" style="width:100%;height:600px" src=""></iframe>


<div id="New-Unique-Node-Count-per-Snapshot"></div>

### New Unique Node Count per Snapshot

<details>
<summary><strong>Details</strong></summary>

<p>This one takes the longest to build because of the iterative nature of continuing to compare a growing list of values in the past that are not newly unique nodes anymore.</p>
<p>
Pseudo code:
<ul>
  <li>[build_y_axis_dict_for_new_unique_over_last_days(x_axis)](https://github.com/kascheri12/golem_util/blob/4b40695b16f120776a49613bf94678f732ef2b93/analyze_data.py#L258)</li>
  <ul>
    <li>Iterate throughout each timestamp on the x_axis</li>
    <ul>
      <li>Find distinct_ids_before_ts</li>
      <li>Then find new_nodes_this_ts from all_nodes_this_ts not in distinct_id_before_ts</li>
      <li>Find cnt_distinct_ts_for_new_nodes</li>
      <li>avg_new_for_ts = len(new_nodes_this_ts) / cnt_distinct_ts_for_new_nodes</li>
    </ul>
  </ul>
</ul>
</p>
</details>
<br />
<iframe id="iframe_new_unique_node_count_per_snapshot" style="width:100%;height:600px" src=""></iframe>

</details>
