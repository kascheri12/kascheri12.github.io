---
layout: maintenance
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
  gauge1.set(31.5589); // set actual value
  gauge1.setTextField(document.getElementById('span_gauge_percent_change_subtasks_success_past_day'),3);
  
  var gauge2 = new Gauge(target2).setOptions(opts2); // create sexy gauge!
  gauge2.maxValue = 50; // set max gauge value
  gauge2.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge2.animationSpeed = 10; // set animation speed (32 is default value)
  gauge2.set(36.7615); // set actual value
  gauge2.setTextField(document.getElementById('span_gauge_percent_change_subtasks_timeout_past_day'),3);
  
  var gauge3 = new Gauge(target3).setOptions(opts3); // create sexy gauge!
  gauge3.maxValue = 50; // set max gauge value
  gauge3.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge3.animationSpeed = 10; // set animation speed (32 is default value)
  gauge3.set(59.7235); // set actual value
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
      <tr><td scope='row'>2018-12-09</td><td>79380</td><td>31.5589</td><td>5093</td><td>36.7615</td><td>3466</td><td>59.7235</td></tr><tr><td>2018-12-08</td><td>60338</td><td>-16.6349</td><td>3724</td><td>-18.8494</td><td>2170</td><td>-24.5217</td></tr><tr><td>2018-12-07</td><td>72378</td><td>-4.8196</td><td>4589</td><td>-9.2366</td><td>2875</td><td>-15.2168</td></tr><tr><td>2018-12-06</td><td>76043</td><td>-7.2352</td><td>5056</td><td>-8.9829</td><td>3391</td><td>-0.7028</td></tr><tr><td>2018-12-05</td><td>81974</td><td>0.4756</td><td>5555</td><td>1.4612</td><td>3415</td><td>-2.3449</td></tr><tr><td>2018-12-04</td><td>81586</td><td>-0.6164</td><td>5475</td><td>-2.8739</td><td>3497</td><td>-6.0451</td></tr><tr><td>2018-12-03</td><td>82092</td><td>4.3273</td><td>5637</td><td>4.4082</td><td>3722</td><td>11.5039</td></tr><tr><td>2018-12-02</td><td>78687</td><td>-5.2854</td><td>5399</td><td>-1.2619</td><td>3338</td><td>-7.4064</td></tr><tr><td>2018-12-01</td><td>83078</td><td>1.2875</td><td>5468</td><td>-0.9600</td><td>3605</td><td>-3.8667</td></tr><tr><td>2018-11-30</td><td>82022</td><td>16.4341</td><td>5521</td><td>27.0948</td><td>3750</td><td>24.7505</td></tr><tr><td>2018-11-29</td><td>70445</td><td>None</td><td>4344</td><td>None</td><td>3006</td><td>None</td></tr>
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
      <tr><td scope='row'>23758</td><td>ruggu/1</td><td>4fd18965ad</td><td>2018-12-09 05:00:49</td><td>7</td><td>1024000.0</td><td>24633279.0</td></tr><tr><td>6852</td><td></td><td>b8c6dfd04a</td><td>2018-12-09 14:05:49</td><td>1</td><td>1024000.0</td><td>3034905.0</td></tr><tr><td>3228</td><td>bebum/1</td><td>dcfd1dd9cb</td><td>2018-12-09 06:00:49</td><td>3</td><td>1024000.0</td><td>24623451.0</td></tr><tr><td>2926</td><td>kascheri12/501</td><td>618870c3ef</td><td>2018-12-08 22:30:49</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>2897</td><td>kascheri12/501</td><td>2093380327</td><td>2018-12-08 20:54:05</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>2220</td><td>mwu-vps</td><td>c32a3294b2</td><td>2018-12-09 08:35:49</td><td>1</td><td>1024000.0</td><td>3033828.0</td></tr><tr><td>2151</td><td>ruggu/2</td><td>cd269d3109</td><td>2018-12-09 06:25:49</td><td>7</td><td>1024000.0</td><td>24633279.0</td></tr><tr><td>1942</td><td>kascheri12/502</td><td>7012dd051e</td><td>2018-12-08 20:54:05</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>1626</td><td>grunt</td><td>0022abe511</td><td>2018-12-09 16:50:49</td><td>7</td><td>2097152.0</td><td>9437184.0</td></tr><tr><td>1491</td><td>Ruggu git</td><td>2c7ad166a2</td><td>2018-12-09 03:35:49</td><td>7</td><td>1024000.0</td><td>24633279.0</td></tr><tr><td>1488</td><td>bebum/2</td><td>cd3e936b3f</td><td>2018-12-09 06:00:49</td><td>3</td><td>1024000.0</td><td>24623451.0</td></tr><tr><td>1487</td><td>kascheri12/503</td><td>4730ab4227</td><td>2018-12-08 22:30:49</td><td>1</td><td>1024000.0</td><td>2836428.0</td></tr><tr><td>1465</td><td>kascheri12/501</td><td>ef9c8a0b15</td><td>2018-12-09 07:10:49</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>1452</td><td></td><td>53fba936a5</td><td>2018-12-09 12:45:49</td><td>1</td><td>1024000.0</td><td>2839773.0</td></tr><tr><td>1407</td><td>drohlum/2</td><td>dac1f2bed3</td><td>2018-12-09 06:15:49</td><td>7</td><td>1024000.0</td><td>24633276.0</td></tr><tr><td>1350</td><td>kascheri12/501</td><td>42ed84cfb7</td><td>2018-12-09 11:20:49</td><td>1</td><td>1024000.0</td><td>2839785.0</td></tr><tr><td>1340</td><td>Rinkeby git</td><td>2d785442ba</td><td>2018-12-09 03:35:49</td><td>3</td><td>1024000.0</td><td>5985246.0</td></tr><tr><td>1334</td><td></td><td>4035a1a1ff</td><td>2018-12-09 11:35:49</td><td>1</td><td>1024000.0</td><td>3034893.0</td></tr><tr><td>1326</td><td>kascheri12/503</td><td>af26439a23</td><td>2018-12-08 22:30:49</td><td>1</td><td>1048576.0</td><td>2836428.0</td></tr><tr><td>1304</td><td>mwu-vps</td><td>6b72075d0b</td><td>2018-12-09 05:40:49</td><td>1</td><td>1024000.0</td><td>3033828.0</td></tr><tr><td>1204</td><td>Vicente</td><td>8d0db42e35</td><td>2018-12-09 00:35:49</td><td>5</td><td>481071185.0</td><td>4654276.0</td></tr><tr><td>1161</td><td>kascbheri12/503</td><td>f06e4a1199</td><td>2018-12-08 23:20:49</td><td>1</td><td>1024000.0</td><td>2836434.0</td></tr><tr><td>1116</td><td>hofry</td><td>94ab4744a3</td><td>2018-12-09 06:35:49</td><td>4</td><td>1024000.0</td><td>2048000.0</td></tr><tr><td>1080</td><td>ryzenGolem</td><td>ea132c2185</td><td>2018-12-09 16:50:49</td><td>12</td><td>108895867.0</td><td>5242880.0</td></tr><tr><td>1077</td><td>Artbox5000</td><td>68c8100cc3</td><td>2018-12-09 06:50:49</td><td>4</td><td>102440000.0</td><td>32407537.0</td></tr><tr><td>1064</td><td>kascheri12/502</td><td>2d7fc0f33a</td><td>2018-12-09 07:10:49</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>1064</td><td>DonsDell</td><td>bfbd973bfd</td><td>2018-12-09 16:50:49</td><td>5</td><td>658529094.0</td><td>14120543.0</td></tr><tr><td>1023</td><td>xeqres</td><td>c01a28b851</td><td>2018-12-09 16:50:49</td><td>3</td><td>1048576.0</td><td>5242880.0</td></tr><tr><td>989</td><td>R03 Laughing Octopus</td><td>b7da70a8bb</td><td>2018-12-09 02:15:49</td><td>7</td><td>1048576.0</td><td>24653925.0</td></tr><tr><td>965</td><td>cryptodave</td><td>dc068d492b</td><td>2018-12-09 16:50:49</td><td>9</td><td>27048764.0</td><td>10485760.0</td></tr><tr><td>936</td><td>Gforce</td><td>07511fb5e4</td><td>2018-12-09 14:55:49</td><td>11</td><td>334937163.0</td><td>9280907.0</td></tr><tr><td>928</td><td>Bebum compute</td><td>776a88fe58</td><td>2018-12-09 05:55:49</td><td>3</td><td>1024000.0</td><td>24632376.0</td></tr><tr><td>927</td><td>DK18</td><td>b37d4a4ad2</td><td>2018-12-09 16:50:49</td><td>3</td><td>83886080.0</td><td>8912896.0</td></tr><tr><td>919</td><td>BoSox9</td><td>24eb4e2c1f</td><td>2018-12-09 16:50:49</td><td>15</td><td>52428800.0</td><td>23068672.0</td></tr><tr><td>912</td><td>DK16</td><td>cae4745f9d</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr><tr><td>903</td><td>DK11</td><td>e0f6876a75</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>896</td><td>GolemGuy</td><td>24c9f0722f</td><td>2018-12-09 16:50:49</td><td>5</td><td>16749200.0</td><td>25128441.0</td></tr><tr><td>889</td><td>Ryzen8core</td><td>8475b3a5f5</td><td>2018-12-09 16:50:49</td><td>12</td><td>63720292.0</td><td>10659242.0</td></tr><tr><td>884</td><td>GolemMultiCore</td><td>735abafcb3</td><td>2018-12-09 16:50:49</td><td>15</td><td>71303168.0</td><td>17825792.0</td></tr><tr><td>880</td><td>DK26</td><td>1c6c008734</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr><tr><td>877</td><td>LilaSchwarz</td><td>5c141cff47</td><td>2018-12-09 16:50:49</td><td>5</td><td>125249170.0</td><td>12544588.0</td></tr><tr><td>861</td><td>DK12</td><td>6bf6602ed9</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>857</td><td>coduyen</td><td>3bf155f147</td><td>2018-12-09 16:50:49</td><td>11</td><td>104857600.0</td><td>36700160.0</td></tr><tr><td>856</td><td>DK17</td><td>629439ff3a</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>854</td><td>DK25</td><td>f14b7a141a</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>841</td><td>DK22</td><td>f5785c737f</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>836</td><td>Golovinae</td><td>62ec0d583b</td><td>2018-12-09 05:45:49</td><td>3</td><td>1024000.0</td><td>6115314.0</td></tr><tr><td>835</td><td>DK20</td><td>31a2601e02</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>821</td><td>Fuzzy Golem</td><td>06af924c46</td><td>2018-12-09 16:50:49</td><td>5</td><td>373293056.0</td><td>19922944.0</td></tr><tr><td>808</td><td>mainichi</td><td>08dfebdc9c</td><td>2018-12-09 16:50:49</td><td>10</td><td>131294468.0</td><td>23656995.0</td></tr>
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
      <tr><td scope='row'>256</td><td></td><td>26f7842d20</td><td>2018-12-09 09:00:49</td><td>7</td><td>1024000.0</td><td>24631935.0</td></tr><tr><td>183</td><td>grunt</td><td>0022abe511</td><td>2018-12-09 16:50:49</td><td>7</td><td>2097152.0</td><td>9437184.0</td></tr><tr><td>166</td><td>DK24</td><td>b2483f1942</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>157</td><td>cryptodave</td><td>dc068d492b</td><td>2018-12-09 16:50:49</td><td>9</td><td>27048764.0</td><td>10485760.0</td></tr><tr><td>150</td><td>ruggu/1</td><td>4fd18965ad</td><td>2018-12-09 05:00:49</td><td>7</td><td>1024000.0</td><td>24633279.0</td></tr><tr><td>134</td><td>Sivir</td><td>f61c8405ba</td><td>2018-12-09 16:50:49</td><td>3</td><td>1048576.0</td><td>9397437.0</td></tr><tr><td>132</td><td>Avalon</td><td>867e341d1a</td><td>2018-12-09 04:45:49</td><td>10</td><td>134217728.0</td><td>8388608.0</td></tr><tr><td>124</td><td>Nexus</td><td>a3564f7685</td><td>2018-12-09 04:50:49</td><td>7</td><td>31457280.0</td><td>10485760.0</td></tr><tr><td>117</td><td>ruggu/2</td><td>cd269d3109</td><td>2018-12-09 06:25:49</td><td>7</td><td>1024000.0</td><td>24633279.0</td></tr><tr><td>114</td><td>Katznode</td><td>b4fdf00b27</td><td>2018-12-09 11:45:49</td><td>7</td><td>26222072.0</td><td>6203988.0</td></tr><tr><td>114</td><td>mine</td><td>d4545af398</td><td>2018-12-09 16:50:49</td><td>7</td><td>1048576.0</td><td>9290799.0</td></tr><tr><td>112</td><td>WordPioneer SSD</td><td>2ecf729cdc</td><td>2018-12-08 21:55:49</td><td>2</td><td>300994212.0</td><td>8757304.0</td></tr><tr><td>111</td><td>CarlHeinMostert1</td><td>668cac13c3</td><td>2018-12-09 09:10:49</td><td>2</td><td>70418140.0</td><td>5242880.0</td></tr><tr><td>106</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2018-12-09 16:50:49</td><td>1</td><td>128395548.0</td><td>6290334.0</td></tr><tr><td>97</td><td>Bloopd</td><td>fcab66f556</td><td>2018-12-09 16:50:49</td><td>2</td><td>10485760.0</td><td>5310545.0</td></tr><tr><td>97</td><td>mrkmerc</td><td>2e00892ac8</td><td>2018-12-09 16:50:49</td><td>3</td><td>333302880.0</td><td>15627435.0</td></tr><tr><td>95</td><td>CM</td><td>deb4a9c8f0</td><td>2018-12-07 17:47:12</td><td>6</td><td>15426768.0</td><td>5242880.0</td></tr><tr><td>95</td><td>joejohn06</td><td>cc6694aa92</td><td>2018-12-09 11:40:49</td><td>7</td><td>13889976.0</td><td>12532674.0</td></tr><tr><td>83</td><td>DragonRagers</td><td>875a8e320c</td><td>2018-12-08 22:15:49</td><td>10</td><td>20971520.0</td><td>10485760.0</td></tr><tr><td>83</td><td>sparklenose</td><td>b76d24a6fd</td><td>2018-12-09 12:50:49</td><td>5</td><td>157286400.0</td><td>8388608.0</td></tr><tr><td>80</td><td>SerbianGolem</td><td>89f6577296</td><td>2018-12-09 15:00:49</td><td>11</td><td>73445040.0</td><td>8611536.0</td></tr><tr><td>77</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2018-12-09 16:50:49</td><td>1</td><td>878629156.0</td><td>6260778.0</td></tr><tr><td>75</td><td>DuttyNode</td><td>6d1649c4e8</td><td>2018-12-09 16:50:49</td><td>4</td><td>129050954.0</td><td>6291456.0</td></tr><tr><td>72</td><td>Lazer's Node</td><td>4f3a13778f</td><td>2018-12-09 09:25:49</td><td>6</td><td>26214400.0</td><td>8388608.0</td></tr><tr><td>70</td><td>Chillington</td><td>ae6fbfe000</td><td>2018-12-09 06:25:49</td><td>9</td><td>24786380.0</td><td>10587791.0</td></tr><tr><td>70</td><td>Flaci75</td><td>6d31161d92</td><td>2018-12-09 06:30:49</td><td>3</td><td>104857600.0</td><td>3119553.0</td></tr><tr><td>66</td><td>rjmglm1</td><td>de3ef9fbe3</td><td>2018-12-09 12:25:49</td><td>3</td><td>95679404.0</td><td>6060549.0</td></tr><tr><td>64</td><td>kaffedyr</td><td>f6343b4151</td><td>2018-12-09 10:35:49</td><td>4</td><td>411599143.0</td><td>7640583.0</td></tr><tr><td>63</td><td>Elizabeth</td><td>3e54698dce</td><td>2018-12-09 16:50:49</td><td>2</td><td>725474168.0</td><td>5093570.0</td></tr><tr><td>62</td><td>rEdLiOn_hOsTzOnE</td><td>99364612e9</td><td>2018-12-09 00:55:49</td><td>1</td><td>1024000.0</td><td>3024510.0</td></tr><tr><td>61</td><td>spacenode</td><td>9373a1752c</td><td>2018-12-09 08:05:49</td><td>2</td><td>37428480.0</td><td>5907614.0</td></tr><tr><td>59</td><td>DK13</td><td>356626023e</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>59</td><td>DK6</td><td>e6ab95ae5a</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>58</td><td>Geeraf</td><td>7afa942f6c</td><td>2018-12-09 11:10:49</td><td>1</td><td>5242880.0</td><td>1630611.0</td></tr><tr><td>58</td><td>maddie</td><td>cfe0ecd91e</td><td>2018-12-09 16:20:49</td><td>3</td><td>104857600.0</td><td>8388608.0</td></tr><tr><td>56</td><td>Chorae</td><td>14d6d5dfb0</td><td>2018-12-09 13:55:49</td><td>3</td><td>1471860.0</td><td>3107133.0</td></tr><tr><td>56</td><td>DK12</td><td>6bf6602ed9</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>53</td><td>VictorPC</td><td>a639843a04</td><td>2018-12-09 07:20:49</td><td>2</td><td>88270358.0</td><td>5003560.0</td></tr><tr><td>51</td><td>klopsknoedel</td><td>c82b9e2435</td><td>2018-12-09 16:50:49</td><td>6</td><td>94371840.0</td><td>9387834.0</td></tr><tr><td>50</td><td>oso</td><td>880b3f0cd0</td><td>2018-12-09 00:55:49</td><td>13</td><td>2426731906.0</td><td>49544456.0</td></tr><tr><td>49</td><td>DK15</td><td>90b9231bf3</td><td>2018-12-09 01:40:49</td><td>3</td><td>104857600.0</td><td>4718592.0</td></tr><tr><td>49</td><td>MMX99</td><td>6d24d6189a</td><td>2018-12-09 07:40:49</td><td>10</td><td>62914560.0</td><td>10485760.0</td></tr><tr><td>48</td><td>HomePC w10</td><td>21c1954eb1</td><td>2018-12-09 16:50:49</td><td>4</td><td>1048576.0</td><td>8388608.0</td></tr><tr><td>47</td><td></td><td>89cc383411</td><td>2018-12-07 17:12:12</td><td>6</td><td>6291456.0</td><td>12535860.0</td></tr><tr><td>47</td><td>matthewsedam-4</td><td>e90a3b877a</td><td>2018-12-09 11:10:49</td><td>1</td><td>1048576.0</td><td>1048576.0</td></tr><tr><td>45</td><td>macgyver</td><td>4e92f89baa</td><td>2018-12-09 16:50:49</td><td>28</td><td>73400320.0</td><td>9437184.0</td></tr><tr><td>45</td><td>DK8</td><td>fc09208d6f</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>44</td><td>DK17</td><td>629439ff3a</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>43</td><td>MMZ68</td><td>6557e52dad</td><td>2018-12-09 06:45:49</td><td>7</td><td>52428800.0</td><td>11534336.0</td></tr><tr><td>42</td><td>Supaeasy</td><td>fea300c286</td><td>2018-12-09 12:15:49</td><td>11</td><td>33575620.0</td><td>9406833.0</td></tr>
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
      <tr><td scope='row'>168</td><td>DK17</td><td>629439ff3a</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>162</td><td>pobtastic</td><td>7fe375a73c</td><td>2018-12-09 00:40:49</td><td>1</td><td>101045136.0</td><td>4681662.0</td></tr><tr><td>153</td><td>austinav1</td><td>c1b1592c16</td><td>2018-12-09 06:00:49</td><td>3</td><td>293601280.0</td><td>7340032.0</td></tr><tr><td>147</td><td>Fat80y</td><td>3599f32da4</td><td>2018-12-09 16:50:49</td><td>6</td><td>73682386.0</td><td>12505725.0</td></tr><tr><td>139</td><td>DK27</td><td>7a81a0207e</td><td>2018-12-07 17:17:12</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>136</td><td></td><td>de002b1df0</td><td>2018-12-08 22:00:49</td><td>1</td><td>1048576000.0</td><td>8388608.0</td></tr><tr><td>136</td><td>DK25</td><td>f14b7a141a</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>133</td><td>DK5</td><td>58d5956491</td><td>2018-12-09 02:05:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>131</td><td>DK22</td><td>f5785c737f</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>130</td><td>Zoey</td><td>a517033a35</td><td>2018-12-08 18:12:12</td><td>1</td><td>397568384.0</td><td>8178578.0</td></tr><tr><td>124</td><td>DiamondGolem</td><td>09fd5d0bd6</td><td>2018-12-09 11:05:49</td><td>2</td><td>21542999.0</td><td>11523777.0</td></tr><tr><td>116</td><td>DK11</td><td>e0f6876a75</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>115</td><td>DK20</td><td>31a2601e02</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>113</td><td>PossumGolem1</td><td>02ecf378f7</td><td>2018-12-09 10:30:49</td><td>1</td><td>211647309.0</td><td>1048576.0</td></tr><tr><td>103</td><td>DK6</td><td>e6ab95ae5a</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>93</td><td>drohlum/1</td><td>9847126522</td><td>2018-12-09 06:15:49</td><td>7</td><td>1024000.0</td><td>24633276.0</td></tr><tr><td>89</td><td>gm</td><td>f97856d3c2</td><td>2018-12-09 16:50:49</td><td>1</td><td>142178502.0</td><td>3145728.0</td></tr><tr><td>84</td><td>DK16</td><td>cae4745f9d</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr><tr><td>83</td><td>drohlum/2</td><td>cbbb325975</td><td>2018-12-09 13:05:49</td><td>7</td><td>1024000.0</td><td>24633327.0</td></tr><tr><td>83</td><td>DK18</td><td>b37d4a4ad2</td><td>2018-12-09 16:50:49</td><td>3</td><td>83886080.0</td><td>8912896.0</td></tr><tr><td>83</td><td>waffledonkey2003</td><td>be7e5eec73</td><td>2018-12-09 16:50:49</td><td>12</td><td>52428800.0</td><td>20971520.0</td></tr><tr><td>81</td><td>AUXBORG3</td><td>31b4736089</td><td>2018-12-09 02:10:49</td><td>2</td><td>16807417.0</td><td>4340734.0</td></tr><tr><td>81</td><td>manu</td><td>6de170710c</td><td>2018-12-09 09:25:49</td><td>1</td><td>1048576.0</td><td>1048576.0</td></tr><tr><td>78</td><td>DK23</td><td>bcae614d6a</td><td>2018-12-07 19:42:12</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>77</td><td>cryptohnode1</td><td>efb810bac8</td><td>2018-12-09 16:50:49</td><td>39</td><td>269232912.0</td><td>2986422.0</td></tr><tr><td>75</td><td>DK4</td><td>bfba7469f4</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr><tr><td>73</td><td>fenipugnt3</td><td>b913404a62</td><td>2018-12-09 05:20:49</td><td>1</td><td>1048950.0</td><td>1315400.0</td></tr><tr><td>69</td><td>grunt</td><td>0022abe511</td><td>2018-12-09 16:50:49</td><td>7</td><td>2097152.0</td><td>9437184.0</td></tr><tr><td>68</td><td>xeqres</td><td>c01a28b851</td><td>2018-12-09 16:50:49</td><td>3</td><td>1048576.0</td><td>5242880.0</td></tr><tr><td>66</td><td>DK26</td><td>1c6c008734</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr><tr><td>63</td><td>superluis018</td><td>2cb753e34e</td><td>2018-12-09 16:50:49</td><td>3</td><td>78643200.0</td><td>8388608.0</td></tr><tr><td>63</td><td>DEDICATEDfastSSD</td><td>d3849667d4</td><td>2018-12-09 16:50:49</td><td>2</td><td>260364048.0</td><td>9983450.0</td></tr><tr><td>60</td><td>JMHnode</td><td>c912dff2ff</td><td>2018-12-09 09:45:49</td><td>2</td><td>206817080.0</td><td>4194304.0</td></tr><tr><td>60</td><td>moon0</td><td>c298c45088</td><td>2018-12-09 16:50:49</td><td>1</td><td>32505856.0</td><td>12479472.0</td></tr><tr><td>60</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2018-12-09 16:50:49</td><td>1</td><td>878629156.0</td><td>6260778.0</td></tr><tr><td>56</td><td>KAMEHAMEHAAAA</td><td>e284b00fa0</td><td>2018-12-09 08:10:49</td><td>1</td><td>1048576.0</td><td>3029895.0</td></tr><tr><td>56</td><td>carbon</td><td>09f97ec98b</td><td>2018-12-09 10:00:49</td><td>1</td><td>419430400.0</td><td>3145728.0</td></tr><tr><td>55</td><td>Mamka</td><td>1ca371f7be</td><td>2018-12-09 05:40:49</td><td>1</td><td>903805492.0</td><td>2097152.0</td></tr><tr><td>55</td><td>ruggu/2</td><td>cd269d3109</td><td>2018-12-09 06:25:49</td><td>7</td><td>1024000.0</td><td>24633279.0</td></tr><tr><td>55</td><td>Fat80y 3</td><td>bcc87a9746</td><td>2018-12-09 16:50:49</td><td>3</td><td>19044684.0</td><td>9382164.0</td></tr><tr><td>54</td><td>AK Golem Node</td><td>e94b272b4d</td><td>2018-12-09 09:40:49</td><td>2</td><td>17665083.0</td><td>8258583.0</td></tr><tr><td>54</td><td>Durin2</td><td>b9340eeb6d</td><td>2018-12-09 16:50:49</td><td>1</td><td>52428800.0</td><td>5242880.0</td></tr><tr><td>52</td><td>spider07</td><td>f1e1d3dc57</td><td>2018-12-09 11:05:49</td><td>2</td><td>73679184.0</td><td>2097152.0</td></tr><tr><td>50</td><td>m_node01</td><td>5df112fcd3</td><td>2018-12-09 04:15:49</td><td>2</td><td>52428800.0</td><td>4194304.0</td></tr><tr><td>49</td><td>DK19</td><td>89d1e6953d</td><td>2018-12-09 16:50:49</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr><tr><td>49</td><td>Loki_Golem_1</td><td>aa62bc6250</td><td>2018-12-09 16:50:49</td><td>15</td><td>219986500.0</td><td>56615220.0</td></tr><tr><td>48</td><td>JumpNode2</td><td>4ef31fa7ec</td><td>2018-12-09 14:30:49</td><td>1</td><td>392369060.0</td><td>2865284.0</td></tr><tr><td>47</td><td>Arysta01</td><td>2fca163191</td><td>2018-12-09 13:30:49</td><td>2</td><td>15728640.0</td><td>6291456.0</td></tr><tr><td>47</td><td>golemnode587394</td><td>036671814f</td><td>2018-12-09 16:50:49</td><td>3</td><td>1048576.0</td><td>5737506.0</td></tr><tr><td>47</td><td>abcdefyyy</td><td>f57cfbf9b3</td><td>2018-12-09 16:50:49</td><td>3</td><td>11534336.0</td><td>4194304.0</td></tr>
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
      <tr><td scope='row'>1010</td><td></td><td>61cd12cd67</td><td>2018-12-09 09:55:49</td><td>11</td><td>1048576.0</td><td>24452742.0</td></tr><tr><td>628</td><td>Tasty Doe</td><td>1f8e0cdf90</td><td>2018-12-09 16:50:49</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr><tr><td>599</td><td>ImALumberJack</td><td>839b655694</td><td>2018-12-09 16:50:49</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr><tr><td>595</td><td>Yoong1a</td><td>8ed8cac28f</td><td>2018-12-09 00:50:49</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr><tr><td>510</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2018-12-09 16:50:49</td><td>2</td><td>1048576.0</td><td>7340032.0</td></tr><tr><td>366</td><td>Zagreu5</td><td>380f9240fa</td><td>2018-12-09 01:15:49</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr><tr><td>233</td><td>kascheri12/501</td><td>6f99766366</td><td>2018-12-08 22:05:49</td><td>1</td><td>1024000.0</td><td>2836464.0</td></tr><tr><td>215</td><td>fzhut</td><td>efc9be5e59</td><td>2018-12-09 16:50:49</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr><tr><td>162</td><td>kascheri12/501</td><td>618870c3ef</td><td>2018-12-08 22:30:49</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>117</td><td>waiKail</td><td>d276138057</td><td>2018-12-09 06:30:49</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr><tr><td>78</td><td>kascheri12</td><td>c550e1af52</td><td>2018-12-09 07:10:49</td><td>7</td><td>1024000.0</td><td>12582912.0</td></tr><tr><td>54</td><td></td><td>e6d8e92427</td><td>2018-12-09 07:45:49</td><td>11</td><td>1048576.0</td><td>24452742.0</td></tr><tr><td>40</td><td>kascheri12/501</td><td>ef9c8a0b15</td><td>2018-12-09 07:10:49</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>38</td><td>kascheri12/502</td><td>2d7fc0f33a</td><td>2018-12-09 07:10:49</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>31</td><td></td><td>992f803dc9</td><td>2018-12-09 06:35:49</td><td>11</td><td>1048576.0</td><td>24452742.0</td></tr><tr><td>22</td><td>"""Naomi Hunter"""</td><td>ea18c46b7b</td><td>2018-12-09 09:05:49</td><td>7</td><td>1024000.0</td><td>24654144.0</td></tr><tr><td>19</td><td></td><td>3373836ea7</td><td>2018-12-09 07:15:49</td><td>1</td><td>1024000.0</td><td>4717713.0</td></tr><tr><td>17</td><td></td><td>4d67f9440d</td><td>2018-12-09 08:30:49</td><td>7</td><td>1024000.0</td><td>24670359.0</td></tr><tr><td>15</td><td></td><td>1fc074d540</td><td>2018-12-09 03:05:49</td><td>3</td><td>1048576.0</td><td>6212613.0</td></tr><tr><td>14</td><td>linux vm b0.12.0</td><td>49edf1d92c</td><td>2018-12-09 07:15:49</td><td>1</td><td>1024000.0</td><td>3084522.0</td></tr><tr><td>12</td><td></td><td>fdbab326ff</td><td>2018-12-09 03:40:49</td><td>11</td><td>1048576.0</td><td>24452742.0</td></tr><tr><td>12</td><td></td><td>238abfdd24</td><td>2018-12-09 04:15:49</td><td>3</td><td>1048576.0</td><td>6212613.0</td></tr><tr><td>12</td><td></td><td>ac32d765f6</td><td>2018-12-09 08:30:49</td><td>0</td><td>0.0</td><td>0.0</td></tr><tr><td>12</td><td></td><td>ca72705736</td><td>2018-12-09 08:40:49</td><td>1</td><td>1024000.0</td><td>6291456.0</td></tr><tr><td>11</td><td></td><td>0f36da62d9</td><td>2018-12-08 23:35:49</td><td>7</td><td>1024000.0</td><td>24670353.0</td></tr><tr><td>11</td><td>Daniel</td><td>2b9b24dabc</td><td>2018-12-09 09:20:49</td><td>7</td><td>1048576.0</td><td>9329706.0</td></tr><tr><td>11</td><td>RenderWithGolem</td><td>2d68813374</td><td>2018-12-09 14:20:49</td><td>1</td><td>1048576.0</td><td>1048576.0</td></tr><tr><td>11</td><td>Phillip-test</td><td>a6389e8e79</td><td>2018-12-09 16:30:49</td><td>3</td><td>1048576.0</td><td>50280558.0</td></tr><tr><td>10</td><td></td><td>f9f862b9bd</td><td>2018-12-08 23:20:49</td><td>7</td><td>1048576.0</td><td>12225402.0</td></tr><tr><td>10</td><td></td><td>9ea5ab4e86</td><td>2018-12-09 01:55:49</td><td>11</td><td>1048576.0</td><td>24452742.0</td></tr><tr><td>10</td><td>Bad Wolf</td><td>fc4f24641c</td><td>2018-12-09 10:20:49</td><td>3</td><td>1048576.0</td><td>12490146.0</td></tr><tr><td>9</td><td>kascheri12/502</td><td>7012dd051e</td><td>2018-12-08 20:54:05</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>9</td><td></td><td>0d0e8a7d48</td><td>2018-12-09 06:45:49</td><td>7</td><td>1048576.0</td><td>24482070.0</td></tr><tr><td>9</td><td></td><td>7b3aa744d2</td><td>2018-12-09 11:00:49</td><td>7</td><td>1048576.0</td><td>24482070.0</td></tr><tr><td>8</td><td>SKYNET</td><td>4db2f2d0c3</td><td>2018-12-09 03:00:49</td><td>1</td><td>1024000.0</td><td>1024000.0</td></tr><tr><td>8</td><td></td><td>55480c077c</td><td>2018-12-09 03:10:49</td><td>11</td><td>1048576.0</td><td>24452742.0</td></tr><tr><td>8</td><td></td><td>ca508a30b9</td><td>2018-12-09 08:05:49</td><td>3</td><td>1048576.0</td><td>1919607.0</td></tr><tr><td>7</td><td>mwu-mac</td><td>195a20f227</td><td>2018-12-09 05:45:49</td><td>7</td><td>1048576.0</td><td>12582912.0</td></tr><tr><td>7</td><td></td><td>a5c8fdca0f</td><td>2018-12-09 07:25:49</td><td>1</td><td>1048576.0</td><td>3033807.0</td></tr><tr><td>7</td><td></td><td>46a74acfd7</td><td>2018-12-09 10:00:49</td><td>7</td><td>1048576.0</td><td>24482067.0</td></tr><tr><td>7</td><td></td><td>09e20475df</td><td>2018-12-09 10:10:49</td><td>7</td><td>1048576.0</td><td>12272367.0</td></tr><tr><td>7</td><td>goten22</td><td>8b5bd249e6</td><td>2018-12-09 10:30:49</td><td>1</td><td>31631752.0</td><td>6239562.0</td></tr><tr><td>7</td><td></td><td>5781833a05</td><td>2018-12-09 11:50:49</td><td>7</td><td>1048576.0</td><td>24482280.0</td></tr><tr><td>7</td><td>vm linux 0.14.0</td><td>146442b3db</td><td>2018-12-09 13:30:49</td><td>3</td><td>1048576.0</td><td>3084522.0</td></tr><tr><td>6</td><td>Redhill</td><td>b6b343f88f</td><td>2018-12-09 02:15:49</td><td>7</td><td>1048576.0</td><td>12538545.0</td></tr><tr><td>6</td><td>gu</td><td>20b3f7d952</td><td>2018-12-09 05:10:49</td><td>7</td><td>1048576.0</td><td>24502260.0</td></tr><tr><td>6</td><td>AsiaJK</td><td>fc6e40bcd6</td><td>2018-12-09 08:05:49</td><td>2</td><td>630109283.0</td><td>4587785.0</td></tr><tr><td>6</td><td>tetest</td><td>201d0cbf5d</td><td>2018-12-09 08:30:49</td><td>1</td><td>1048576.0</td><td>1531050.0</td></tr><tr><td>6</td><td></td><td>8256010836</td><td>2018-12-09 10:45:49</td><td>7</td><td>1048576.0</td><td>24482073.0</td></tr><tr><td>6</td><td></td><td>f7c4fc6f64</td><td>2018-12-09 12:05:49</td><td>1</td><td>1024000.0</td><td>4717713.0</td></tr>
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
      <tr><td scope='row'>593</td><td>Yoong1a</td><td>8ed8cac28f</td><td>2018-12-09 00:50:49</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr><tr><td>326</td><td>Zagreu5</td><td>380f9240fa</td><td>2018-12-09 01:15:49</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr><tr><td>233</td><td>kascheri12/501</td><td>6f99766366</td><td>2018-12-08 22:05:49</td><td>1</td><td>1024000.0</td><td>2836464.0</td></tr><tr><td>210</td><td></td><td>61cd12cd67</td><td>2018-12-09 09:55:49</td><td>11</td><td>1048576.0</td><td>24452742.0</td></tr><tr><td>199</td><td>fzhut</td><td>efc9be5e59</td><td>2018-12-09 16:50:49</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr><tr><td>189</td><td>Tasty Doe</td><td>1f8e0cdf90</td><td>2018-12-09 16:50:49</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr><tr><td>169</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2018-12-09 16:50:49</td><td>2</td><td>1048576.0</td><td>7340032.0</td></tr><tr><td>162</td><td>kascheri12/501</td><td>618870c3ef</td><td>2018-12-08 22:30:49</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>117</td><td>waiKail</td><td>d276138057</td><td>2018-12-09 06:30:49</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr><tr><td>102</td><td>ImALumberJack</td><td>839b655694</td><td>2018-12-09 16:50:49</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr><tr><td>66</td><td>kascheri12</td><td>c550e1af52</td><td>2018-12-09 07:10:49</td><td>7</td><td>1024000.0</td><td>12582912.0</td></tr><tr><td>54</td><td></td><td>e6d8e92427</td><td>2018-12-09 07:45:49</td><td>11</td><td>1048576.0</td><td>24452742.0</td></tr><tr><td>34</td><td>kascheri12/502</td><td>2d7fc0f33a</td><td>2018-12-09 07:10:49</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>32</td><td>kascheri12/501</td><td>ef9c8a0b15</td><td>2018-12-09 07:10:49</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>21</td><td>"""Naomi Hunter"""</td><td>ea18c46b7b</td><td>2018-12-09 09:05:49</td><td>7</td><td>1024000.0</td><td>24654144.0</td></tr><tr><td>13</td><td>linux vm b0.12.0</td><td>49edf1d92c</td><td>2018-12-09 07:15:49</td><td>1</td><td>1024000.0</td><td>3084522.0</td></tr><tr><td>13</td><td></td><td>4d67f9440d</td><td>2018-12-09 08:30:49</td><td>7</td><td>1024000.0</td><td>24670359.0</td></tr><tr><td>12</td><td></td><td>1fc074d540</td><td>2018-12-09 03:05:49</td><td>3</td><td>1048576.0</td><td>6212613.0</td></tr><tr><td>11</td><td></td><td>0f36da62d9</td><td>2018-12-08 23:35:49</td><td>7</td><td>1024000.0</td><td>24670353.0</td></tr><tr><td>11</td><td></td><td>ca72705736</td><td>2018-12-09 08:40:49</td><td>1</td><td>1024000.0</td><td>6291456.0</td></tr><tr><td>11</td><td>RenderWithGolem</td><td>2d68813374</td><td>2018-12-09 14:20:49</td><td>1</td><td>1048576.0</td><td>1048576.0</td></tr><tr><td>10</td><td></td><td>9ea5ab4e86</td><td>2018-12-09 01:55:49</td><td>11</td><td>1048576.0</td><td>24452742.0</td></tr><tr><td>10</td><td>Phillip-test</td><td>a6389e8e79</td><td>2018-12-09 16:30:49</td><td>3</td><td>1048576.0</td><td>50280558.0</td></tr><tr><td>9</td><td>Bad Wolf</td><td>fc4f24641c</td><td>2018-12-09 10:20:49</td><td>3</td><td>1048576.0</td><td>12490146.0</td></tr><tr><td>9</td><td></td><td>7b3aa744d2</td><td>2018-12-09 11:00:49</td><td>7</td><td>1048576.0</td><td>24482070.0</td></tr><tr><td>8</td><td></td><td>ca508a30b9</td><td>2018-12-09 08:05:49</td><td>3</td><td>1048576.0</td><td>1919607.0</td></tr><tr><td>8</td><td>Daniel</td><td>2b9b24dabc</td><td>2018-12-09 09:20:49</td><td>7</td><td>1048576.0</td><td>9329706.0</td></tr><tr><td>7</td><td></td><td>238abfdd24</td><td>2018-12-09 04:15:49</td><td>3</td><td>1048576.0</td><td>6212613.0</td></tr><tr><td>7</td><td></td><td>ac32d765f6</td><td>2018-12-09 08:30:49</td><td>0</td><td>0.0</td><td>0.0</td></tr><tr><td>7</td><td></td><td>5781833a05</td><td>2018-12-09 11:50:49</td><td>7</td><td>1048576.0</td><td>24482280.0</td></tr><tr><td>6</td><td>Redhill</td><td>b6b343f88f</td><td>2018-12-09 02:15:49</td><td>7</td><td>1048576.0</td><td>12538545.0</td></tr><tr><td>6</td><td>cppawel</td><td>d51c299bf5</td><td>2018-12-09 04:45:49</td><td>3</td><td>1048576.0</td><td>6034323.0</td></tr><tr><td>5</td><td></td><td>0a354d4627</td><td>2018-12-09 02:25:49</td><td>3</td><td>1048576.0</td><td>1919607.0</td></tr><tr><td>5</td><td>vm sierra 16 t</td><td>56925a022e</td><td>2018-12-09 04:05:49</td><td>1</td><td>2097152.0</td><td>2097152.0</td></tr><tr><td>5</td><td>gu</td><td>20b3f7d952</td><td>2018-12-09 05:10:49</td><td>7</td><td>1048576.0</td><td>24502260.0</td></tr><tr><td>5</td><td></td><td>3373836ea7</td><td>2018-12-09 07:15:49</td><td>1</td><td>1024000.0</td><td>4717713.0</td></tr><tr><td>5</td><td>AsiaJK</td><td>fc6e40bcd6</td><td>2018-12-09 08:05:49</td><td>2</td><td>630109283.0</td><td>4587785.0</td></tr><tr><td>5</td><td>vm sierra 0.17.1</td><td>2a5b1260bb</td><td>2018-12-09 08:25:49</td><td>1</td><td>3145728.0</td><td>4194304.0</td></tr><tr><td>4</td><td>[M1R23] Master Miller</td><td>6d2f4b1dc5</td><td>2018-12-09 03:45:49</td><td>7</td><td>1048576.0</td><td>24653931.0</td></tr><tr><td>4</td><td></td><td>0c6d92fa2c</td><td>2018-12-09 05:00:49</td><td>7</td><td>1048576.0</td><td>24591432.0</td></tr><tr><td>4</td><td></td><td>0d0e8a7d48</td><td>2018-12-09 06:45:49</td><td>7</td><td>1048576.0</td><td>24482070.0</td></tr><tr><td>4</td><td></td><td>cad0b92e9f</td><td>2018-12-09 08:15:49</td><td>7</td><td>1024000.0</td><td>12229908.0</td></tr><tr><td>4</td><td></td><td>4bb33090cd</td><td>2018-12-09 08:40:49</td><td>7</td><td>1048576.0</td><td>24482076.0</td></tr><tr><td>4</td><td></td><td>309ee07261</td><td>2018-12-09 08:45:49</td><td>11</td><td>1048576.0</td><td>24548742.0</td></tr><tr><td>4</td><td></td><td>878acfc821</td><td>2018-12-09 08:50:49</td><td>7</td><td>1048576.0</td><td>24482076.0</td></tr><tr><td>4</td><td></td><td>6854e909dc</td><td>2018-12-09 09:10:49</td><td>1</td><td>1024000.0</td><td>4717713.0</td></tr><tr><td>4</td><td>vm sierra b12</td><td>301473d7ce</td><td>2018-12-09 10:50:49</td><td>1</td><td>1024000.0</td><td>6291456.0</td></tr><tr><td>4</td><td></td><td>61eb74952e</td><td>2018-12-09 11:45:49</td><td>1</td><td>1024000.0</td><td>6291456.0</td></tr><tr><td>4</td><td>RWG-testnet</td><td>bf3899f9c2</td><td>2018-12-09 14:10:49</td><td>3</td><td>1048576.0</td><td>12319092.0</td></tr><tr><td>4</td><td>Risperker</td><td>a9d91958d6</td><td>2018-12-09 15:50:49</td><td>5</td><td>1048576.0</td><td>12525075.0</td></tr>
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
      <tr><td scope='row'>232</td><td>kascheri12/501</td><td>6f99766366</td><td>2018-12-08 22:05:49</td><td>1</td><td>1024000.0</td><td>2836464.0</td></tr><tr><td>99</td><td></td><td>61cd12cd67</td><td>2018-12-09 09:55:49</td><td>11</td><td>1048576.0</td><td>24452742.0</td></tr><tr><td>97</td><td>kascheri12/501</td><td>618870c3ef</td><td>2018-12-08 22:30:49</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>26</td><td></td><td>e6d8e92427</td><td>2018-12-09 07:45:49</td><td>11</td><td>1048576.0</td><td>24452742.0</td></tr><tr><td>20</td><td>"""Naomi Hunter"""</td><td>ea18c46b7b</td><td>2018-12-09 09:05:49</td><td>7</td><td>1024000.0</td><td>24654144.0</td></tr><tr><td>18</td><td>kascheri12</td><td>c550e1af52</td><td>2018-12-09 07:10:49</td><td>7</td><td>1024000.0</td><td>12582912.0</td></tr><tr><td>16</td><td>kascheri12/501</td><td>ef9c8a0b15</td><td>2018-12-09 07:10:49</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>13</td><td></td><td>4d67f9440d</td><td>2018-12-09 08:30:49</td><td>7</td><td>1024000.0</td><td>24670359.0</td></tr><tr><td>11</td><td></td><td>0f36da62d9</td><td>2018-12-08 23:35:49</td><td>7</td><td>1024000.0</td><td>24670353.0</td></tr><tr><td>11</td><td></td><td>1fc074d540</td><td>2018-12-09 03:05:49</td><td>3</td><td>1048576.0</td><td>6212613.0</td></tr><tr><td>11</td><td>kascheri12/502</td><td>2d7fc0f33a</td><td>2018-12-09 07:10:49</td><td>1</td><td>1024000.0</td><td>2836458.0</td></tr><tr><td>10</td><td></td><td>9ea5ab4e86</td><td>2018-12-09 01:55:49</td><td>11</td><td>1048576.0</td><td>24452742.0</td></tr><tr><td>9</td><td>linux vm b0.12.0</td><td>49edf1d92c</td><td>2018-12-09 07:15:49</td><td>1</td><td>1024000.0</td><td>3084522.0</td></tr><tr><td>9</td><td>Phillip-test</td><td>a6389e8e79</td><td>2018-12-09 16:30:49</td><td>3</td><td>1048576.0</td><td>50280558.0</td></tr><tr><td>7</td><td></td><td>ca72705736</td><td>2018-12-09 08:40:49</td><td>1</td><td>1024000.0</td><td>6291456.0</td></tr><tr><td>7</td><td></td><td>7b3aa744d2</td><td>2018-12-09 11:00:49</td><td>7</td><td>1048576.0</td><td>24482070.0</td></tr><tr><td>6</td><td></td><td>ac32d765f6</td><td>2018-12-09 08:30:49</td><td>0</td><td>0.0</td><td>0.0</td></tr><tr><td>6</td><td>Tasty Doe</td><td>1f8e0cdf90</td><td>2018-12-09 16:50:49</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr><tr><td>6</td><td>ImALumberJack</td><td>839b655694</td><td>2018-12-09 16:50:49</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr><tr><td>5</td><td>Redhill</td><td>b6b343f88f</td><td>2018-12-09 02:15:49</td><td>7</td><td>1048576.0</td><td>12538545.0</td></tr><tr><td>5</td><td>vm sierra 16 t</td><td>56925a022e</td><td>2018-12-09 04:05:49</td><td>1</td><td>2097152.0</td><td>2097152.0</td></tr><tr><td>4</td><td>Zagreu5</td><td>380f9240fa</td><td>2018-12-09 01:15:49</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr><tr><td>4</td><td></td><td>238abfdd24</td><td>2018-12-09 04:15:49</td><td>3</td><td>1048576.0</td><td>6212613.0</td></tr><tr><td>4</td><td></td><td>0c6d92fa2c</td><td>2018-12-09 05:00:49</td><td>7</td><td>1048576.0</td><td>24591432.0</td></tr><tr><td>4</td><td>waiKail</td><td>d276138057</td><td>2018-12-09 06:30:49</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr><tr><td>4</td><td></td><td>cad0b92e9f</td><td>2018-12-09 08:15:49</td><td>7</td><td>1024000.0</td><td>12229908.0</td></tr><tr><td>4</td><td></td><td>309ee07261</td><td>2018-12-09 08:45:49</td><td>11</td><td>1048576.0</td><td>24548742.0</td></tr><tr><td>4</td><td>Bad Wolf</td><td>fc4f24641c</td><td>2018-12-09 10:20:49</td><td>3</td><td>1048576.0</td><td>12490146.0</td></tr><tr><td>4</td><td>Risperker</td><td>a9d91958d6</td><td>2018-12-09 15:50:49</td><td>5</td><td>1048576.0</td><td>12525075.0</td></tr><tr><td>3</td><td></td><td>e90e14c62f</td><td>2018-12-09 00:50:49</td><td>7</td><td>1048576.0</td><td>12230121.0</td></tr><tr><td>3</td><td>[M1R23] Master Miller</td><td>6d2f4b1dc5</td><td>2018-12-09 03:45:49</td><td>7</td><td>1048576.0</td><td>24653931.0</td></tr><tr><td>3</td><td>cppawel</td><td>d51c299bf5</td><td>2018-12-09 04:45:49</td><td>3</td><td>1048576.0</td><td>6034323.0</td></tr><tr><td>3</td><td></td><td>c655c4771a</td><td>2018-12-09 06:35:49</td><td>2</td><td>1048576.0</td><td>4701180.0</td></tr><tr><td>3</td><td></td><td>3373836ea7</td><td>2018-12-09 07:15:49</td><td>1</td><td>1024000.0</td><td>4717713.0</td></tr><tr><td>3</td><td>szadok T</td><td>859e0c393b</td><td>2018-12-09 08:15:49</td><td>7</td><td>1048576.0</td><td>25165824.0</td></tr><tr><td>3</td><td>vm sierra 0.17.1</td><td>2a5b1260bb</td><td>2018-12-09 08:25:49</td><td>1</td><td>3145728.0</td><td>4194304.0</td></tr><tr><td>3</td><td>szadok</td><td>b1015a5a94</td><td>2018-12-09 08:35:49</td><td>2</td><td>135706594.0</td><td>9563013.0</td></tr><tr><td>3</td><td></td><td>6854e909dc</td><td>2018-12-09 09:10:49</td><td>1</td><td>1024000.0</td><td>4717713.0</td></tr><tr><td>3</td><td>Daniel</td><td>2b9b24dabc</td><td>2018-12-09 09:20:49</td><td>7</td><td>1048576.0</td><td>9329706.0</td></tr><tr><td>3</td><td>mdt-mac-testnet</td><td>3564c95d54</td><td>2018-12-09 11:30:49</td><td>1</td><td>20971520.0</td><td>6291456.0</td></tr><tr><td>3</td><td>oncoming storm</td><td>6c15fa96c1</td><td>2018-12-09 11:45:49</td><td>2</td><td>30880850.0</td><td>7947576.0</td></tr><tr><td>3</td><td></td><td>61eb74952e</td><td>2018-12-09 11:45:49</td><td>1</td><td>1024000.0</td><td>6291456.0</td></tr><tr><td>3</td><td>MS_laptop</td><td>4968a9358d</td><td>2018-12-09 13:15:49</td><td>7</td><td>1048576.0</td><td>24591429.0</td></tr><tr><td>3</td><td>RWG-testnet</td><td>bf3899f9c2</td><td>2018-12-09 14:10:49</td><td>3</td><td>1048576.0</td><td>12319092.0</td></tr><tr><td>3</td><td>RenderWithGolem</td><td>2d68813374</td><td>2018-12-09 14:20:49</td><td>1</td><td>1048576.0</td><td>1048576.0</td></tr><tr><td>3</td><td>Satellit</td><td>9b76b0e141</td><td>2018-12-09 14:55:49</td><td>7</td><td>22462129.0</td><td>17267069.0</td></tr><tr><td>2</td><td></td><td>6ba883fa5a</td><td>2018-12-09 06:25:49</td><td>11</td><td>1048576.0</td><td>24536829.0</td></tr><tr><td>2</td><td></td><td>dc177397c5</td><td>2018-12-09 07:05:49</td><td>11</td><td>1048576.0</td><td>24536829.0</td></tr><tr><td>2</td><td></td><td>b977047110</td><td>2018-12-09 11:40:49</td><td>3</td><td>1048576.0</td><td>4701183.0</td></tr><tr><td>2</td><td></td><td>e771faa688</td><td>2018-12-09 11:45:49</td><td>1</td><td>1024000.0</td><td>4717713.0</td></tr>
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
      <tr><td scope='row'>95</td><td>Artbox5000TEMP</td><td>4f3510e22f</td><td>2018-12-08 20:54:05</td><td>95</td><td>1048576.0</td><td>24489822.0</td></tr><tr><td>71</td><td>crunch-rhino</td><td>006cb82c3d</td><td>2018-12-09 01:35:49</td><td>71</td><td>1048576.0</td><td>210292122.0</td></tr><tr><td>71</td><td></td><td>84d0fdc24f</td><td>2018-12-09 03:05:49</td><td>71</td><td>1048576.0</td><td>210292122.0</td></tr><tr><td>71</td><td></td><td>43476c4d11</td><td>2018-12-09 06:00:49</td><td>71</td><td>1048576.0</td><td>111390888.0</td></tr><tr><td>63</td><td></td><td>819fa3c479</td><td>2018-12-07 21:17:12</td><td>63</td><td>1048576.0</td><td>198089248.0</td></tr><tr><td>63</td><td></td><td>f87104265e</td><td>2018-12-08 18:02:12</td><td>63</td><td>1048576.0</td><td>198089248.0</td></tr><tr><td>63</td><td></td><td>db752ab82e</td><td>2018-12-08 22:55:49</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr><tr><td>63</td><td></td><td>af70f64c7e</td><td>2018-12-09 03:30:49</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr><tr><td>63</td><td></td><td>d2958e38fd</td><td>2018-12-09 06:00:49</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr><tr><td>63</td><td></td><td>75f061bff9</td><td>2018-12-09 06:00:49</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr><tr><td>63</td><td></td><td>cd2cea3783</td><td>2018-12-09 07:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td>Artbox5000VM</td><td>90b0bf1dae</td><td>2018-12-09 14:20:49</td><td>63</td><td>1048576.0</td><td>12591903.0</td></tr><tr><td>63</td><td></td><td>df7410bda8</td><td>2018-12-09 15:00:49</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr><tr><td>63</td><td></td><td>1af8bd40c3</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td></td><td>57ce921b99</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td></td><td>85b9164328</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td></td><td>40f92da3c2</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td>golem1</td><td>c2490a5ce2</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td></td><td>34bf695cea</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td></td><td>d21faacd1c</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td>ice_miner_0</td><td>d5dc1c4738</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr><tr><td>63</td><td></td><td>6dd9644cff</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td></td><td>c3d23a9761</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td></td><td>5ad7765acc</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td></td><td>b1c26f12ab</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr><tr><td>63</td><td></td><td>7e3cea8a91</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr><tr><td>63</td><td></td><td>1db2989afe</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td></td><td>9c9f20bb6d</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td></td><td>f5f643d260</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr><tr><td>63</td><td></td><td>23636fca2f</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>63</td><td></td><td>561618eb72</td><td>2018-12-09 16:50:49</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr><tr><td>55</td><td>fartful</td><td>2b65782f87</td><td>2018-12-09 00:50:49</td><td>55</td><td>314572800.0</td><td>198020712.0</td></tr><tr><td>48</td><td>crunch-quail</td><td>5ba7221714</td><td>2018-12-09 10:05:49</td><td>48</td><td>202370112.0</td><td>73400320.0</td></tr><tr><td>48</td><td>crunch-pigeon</td><td>2f61c6bbde</td><td>2018-12-09 16:30:49</td><td>48</td><td>199957740.0</td><td>73400320.0</td></tr><tr><td>47</td><td></td><td>2a0282f07c</td><td>2018-12-09 12:00:49</td><td>47</td><td>1024000.0</td><td>95912757.0</td></tr><tr><td>47</td><td></td><td>4a3a91c659</td><td>2018-12-09 14:15:49</td><td>47</td><td>1048576.0</td><td>296148756.0</td></tr><tr><td>39</td><td>pflow</td><td>9497d619a2</td><td>2018-12-09 06:35:49</td><td>39</td><td>1024000.0</td><td>24704928.0</td></tr><tr><td>39</td><td>cryptohnode1</td><td>efb810bac8</td><td>2018-12-09 16:50:49</td><td>39</td><td>269232912.0</td><td>2986422.0</td></tr><tr><td>36</td><td>kokslaan</td><td>f2f16cf55e</td><td>2018-12-09 05:55:49</td><td>36</td><td>16204804.0</td><td>41943040.0</td></tr><tr><td>35</td><td>NeroTulip</td><td>b1ac132bad</td><td>2018-12-09 05:20:49</td><td>35</td><td>1048576.0</td><td>46373472.0</td></tr><tr><td>35</td><td></td><td>fcaeee7e58</td><td>2018-12-09 08:10:49</td><td>35</td><td>1048576.0</td><td>54027945.0</td></tr><tr><td>35</td><td>Test123</td><td>d272059eb5</td><td>2018-12-09 08:30:49</td><td>35</td><td>1048576.0</td><td>54027945.0</td></tr><tr><td>35</td><td>alfavatar01</td><td>9109f9d16a</td><td>2018-12-09 09:00:49</td><td>35</td><td>1048576.0</td><td>21604044.0</td></tr><tr><td>35</td><td></td><td>6935b336c9</td><td>2018-12-09 09:35:49</td><td>35</td><td>1048576.0</td><td>46364175.0</td></tr><tr><td>35</td><td>Braach</td><td>8596762c72</td><td>2018-12-09 10:20:49</td><td>35</td><td>26214400.0</td><td>46364175.0</td></tr><tr><td>35</td><td>jm_x299</td><td>28742b2469</td><td>2018-12-09 11:00:49</td><td>35</td><td>424229156.0</td><td>24455130.0</td></tr><tr><td>35</td><td>nero1</td><td>92a1dbb279</td><td>2018-12-09 14:50:49</td><td>35</td><td>26811932.0</td><td>46373472.0</td></tr><tr><td>33</td><td>alfavatar02</td><td>0fd64ff3e5</td><td>2018-12-09 10:50:49</td><td>33</td><td>1048576.0</td><td>15411180.0</td></tr><tr><td>32</td><td></td><td>60e3431c6a</td><td>2018-12-09 06:05:49</td><td>32</td><td>1048576.0</td><td>25077516.0</td></tr><tr><td>32</td><td>KOW4G02</td><td>fefade7675</td><td>2018-12-09 16:50:49</td><td>32</td><td>104857600.0</td><td>50331648.0</td></tr>
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
