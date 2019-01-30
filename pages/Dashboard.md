---
title: Dashboard
permalink: /dashboard/
---

# Golem Network Dashboard

<br />

#### Global Network Data History

<iframe id="iframe_global_network_data_history" style="width:100%;height:600px" src=""></iframe>

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
  <div class='col-xs-12 col-lg-4' style='margin-bottom:20px;'>
    <h5>Subtasks Success</h5>
    <div class='category_div'>
      <canvas class='canvas_gauge' id='gauge_percent_change_subtasks_success_past_day'></canvas>
      <span class='span_gauge_value' id='span_gauge_percent_change_subtasks_success_past_day'></span>
    </div>
  </div>
  <div class='col-xs-12 col-lg-4' style='margin-bottom:20px;'>
    <h5>Subtasks Timeout</h5>
    <div class='category_div'>
      <canvas class='canvas_gauge' id='gauge_percent_change_subtasks_timeout_past_day'></canvas>
      <span class='span_gauge_value' id='span_gauge_percent_change_subtasks_timeout_past_day'></span>
    </div>
  </div>
  <div class='col-xs-12 col-lg-4' style='margin-bottom:20px;'>
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
  gauge1.set(4.3161); // set actual value
  gauge1.setTextField(document.getElementById('span_gauge_percent_change_subtasks_success_past_day'),3);
  
  var gauge2 = new Gauge(target2).setOptions(opts2); // create sexy gauge!
  gauge2.maxValue = 50; // set max gauge value
  gauge2.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge2.animationSpeed = 10; // set animation speed (32 is default value)
  gauge2.set(2.9611); // set actual value
  gauge2.setTextField(document.getElementById('span_gauge_percent_change_subtasks_timeout_past_day'),3);
  
  var gauge3 = new Gauge(target3).setOptions(opts3); // create sexy gauge!
  gauge3.maxValue = 50; // set max gauge value
  gauge3.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge3.animationSpeed = 10; // set animation speed (32 is default value)
  gauge3.set(3.0243); // set actual value
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
      <tr><td scope='row'>2019-01-30</td><td>100713</td><td>4.3161</td><td>6224</td><td>2.9611</td><td>3611</td><td>3.0243</td></tr>
<tr><td>2019-01-29</td><td>96546</td><td>-2.3506</td><td>6045</td><td>-2.4685</td><td>3505</td><td>2.6054</td></tr>
<tr><td>2019-01-28</td><td>98870</td><td>2.2377</td><td>6198</td><td>-2.3476</td><td>3416</td><td>-5.2164</td></tr>
<tr><td>2019-01-27</td><td>96706</td><td>-5.0888</td><td>6347</td><td>3.3882</td><td>3604</td><td>8.4236</td></tr>
<tr><td>2019-01-26</td><td>101891</td><td>2.4442</td><td>6139</td><td>5.8631</td><td>3324</td><td>5.0569</td></tr>
<tr><td>2019-01-25</td><td>99460</td><td>22.7886</td><td>5799</td><td>50.7017</td><td>3164</td><td>18.2362</td></tr>
<tr><td>2019-01-24</td><td>81001</td><td>-6.6701</td><td>3848</td><td>-15.2610</td><td>2676</td><td>-7.5009</td></tr>
<tr><td>2019-01-23</td><td>86790</td><td>-3.2150</td><td>4541</td><td>-8.3182</td><td>2893</td><td>-7.3054</td></tr>
<tr><td>2019-01-22</td><td>89673</td><td>-8.6079</td><td>4953</td><td>-13.1205</td><td>3121</td><td>-5.3669</td></tr>
<tr><td>2019-01-21</td><td>98119</td><td>0.6153</td><td>5701</td><td>2.0405</td><td>3298</td><td>-1.9911</td></tr>
<tr><td>2019-01-20</td><td>97519</td><td>0.2292</td><td>5587</td><td>-1.2025</td><td>3365</td><td>1.4471</td></tr>
<tr><td>2019-01-19</td><td>97296</td><td>6.2601</td><td>5655</td><td>0.2304</td><td>3317</td><td>8.4341</td></tr>
<tr><td>2019-01-18</td><td>91564</td><td>-4.4427</td><td>5642</td><td>-5.7625</td><td>3059</td><td>-4.4063</td></tr>
<tr><td>2019-01-17</td><td>95821</td><td>-3.0672</td><td>5987</td><td>-3.0131</td><td>3200</td><td>-5.2974</td></tr>
<tr><td>2019-01-16</td><td>98853</td><td>-1.8809</td><td>6173</td><td>0.7343</td><td>3379</td><td>-6.0345</td></tr>
<tr><td>2019-01-15</td><td>100748</td><td>0.5750</td><td>6128</td><td>0.3603</td><td>3596</td><td>6.3276</td></tr>
<tr><td>2019-01-14</td><td>100172</td><td>1.0012</td><td>6106</td><td>0.4442</td><td>3382</td><td>-3.1223</td></tr>
<tr><td>2019-01-13</td><td>99179</td><td>2.0329</td><td>6079</td><td>2.2196</td><td>3491</td><td>4.5836</td></tr>
<tr><td>2019-01-12</td><td>97203</td><td>-2.1670</td><td>5947</td><td>-1.7350</td><td>3338</td><td>0.0000</td></tr>
<tr><td>2019-01-11</td><td>99356</td><td>5.8116</td><td>6052</td><td>2.1090</td><td>3338</td><td>9.2993</td></tr>

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
      <tr><td scope='row'>1841</td><td>grunt</td><td>0022abe511</td><td>2019-01-14 19:42:15</td><td>7</td><td>1048576.0</td><td>12503772.0</td></tr>
<tr><td>1681</td><td>Ryzen8core</td><td>8475b3a5f5</td><td>2019-01-30 08:32:15</td><td>12</td><td>51440308.0</td><td>10659242.0</td></tr>
<tr><td>1531</td><td>mainichi</td><td>08dfebdc9c</td><td>2019-01-30 08:32:15</td><td>10</td><td>122859188.0</td><td>23656995.0</td></tr>
<tr><td>1439</td><td>PILLAGER</td><td>7ce29c9105</td><td>2019-01-20 18:32:15</td><td>14</td><td>719369212.0</td><td>49828331.0</td></tr>
<tr><td>1396</td><td>coduyen</td><td>3bf155f147</td><td>2019-01-27 08:32:15</td><td>11</td><td>104857600.0</td><td>36700160.0</td></tr>
<tr><td>1392</td><td>Node-ByZohaib</td><td>eb4732ff31</td><td>2019-01-28 22:52:15</td><td>14</td><td>132912696.0</td><td>12279024.0</td></tr>
<tr><td>1290</td><td>DonsDell</td><td>bfbd973bfd</td><td>2019-01-30 08:32:15</td><td>5</td><td>658529094.0</td><td>14120543.0</td></tr>
<tr><td>1284</td><td>xeqres</td><td>c01a28b851</td><td>2019-01-30 08:32:15</td><td>3</td><td>1048576.0</td><td>5242880.0</td></tr>
<tr><td>1270</td><td>ryzenGolem</td><td>ea132c2185</td><td>2019-01-01 07:47:28</td><td>12</td><td>108895867.0</td><td>10485760.0</td></tr>
<tr><td>1249</td><td>Gforce</td><td>07511fb5e4</td><td>2019-01-29 09:42:15</td><td>11</td><td>334937163.0</td><td>9280907.0</td></tr>
<tr><td>1211</td><td>Pro Grade</td><td>3258c0b410</td><td>2019-01-30 08:32:15</td><td>11</td><td>158422860.0</td><td>10485760.0</td></tr>
<tr><td>1156</td><td>Cormatic</td><td>5ee5b3e65c</td><td>2019-01-30 08:32:15</td><td>24</td><td>104857600.0</td><td>20971520.0</td></tr>
<tr><td>1111</td><td>cryptodave</td><td>dc068d492b</td><td>2019-01-30 08:32:15</td><td>9</td><td>37065980.0</td><td>10485760.0</td></tr>
<tr><td>1084</td><td>DK18</td><td>b37d4a4ad2</td><td>2019-01-30 08:32:15</td><td>3</td><td>83886080.0</td><td>8912896.0</td></tr>
<tr><td>1076</td><td>GolemMultiCore</td><td>735abafcb3</td><td>2019-01-30 08:32:15</td><td>15</td><td>55504904.0</td><td>17825792.0</td></tr>
<tr><td>1062</td><td>DK11</td><td>e0f6876a75</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>1050</td><td>DK16</td><td>cae4745f9d</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>1046</td><td>GolemGuy</td><td>24c9f0722f</td><td>2019-01-30 08:32:15</td><td>5</td><td>15355536.0</td><td>25128441.0</td></tr>
<tr><td>1035</td><td>BoSox9</td><td>24eb4e2c1f</td><td>2019-01-30 08:32:15</td><td>15</td><td>52428800.0</td><td>23068672.0</td></tr>
<tr><td>1026</td><td>DK26</td><td>1c6c008734</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>992</td><td>DK22</td><td>f5785c737f</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>990</td><td>DK12</td><td>6bf6602ed9</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>987</td><td>DK25</td><td>f14b7a141a</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>981</td><td>RebbeLoew</td><td>e71e44cb78</td><td>2019-01-30 08:32:15</td><td>23</td><td>1048576.0</td><td>61855308.0</td></tr>
<tr><td>975</td><td>DK20</td><td>31a2601e02</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>962</td><td>DK17</td><td>629439ff3a</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>955</td><td>DK19</td><td>89d1e6953d</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>953</td><td>AbdArthurdent</td><td>7803d4a14e</td><td>2019-01-30 08:32:15</td><td>7</td><td>146800640.0</td><td>17836206.0</td></tr>
<tr><td>926</td><td>DK23</td><td>bcae614d6a</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>922</td><td>DK13</td><td>356626023e</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>921</td><td>DK-golem6</td><td>b9d72465a1</td><td>2019-01-28 00:37:15</td><td>3</td><td>50426019.0</td><td>9357024.0</td></tr>
<tr><td>920</td><td>Fuzzy Golem</td><td>06af924c46</td><td>2019-01-30 08:32:15</td><td>5</td><td>228589568.0</td><td>20971520.0</td></tr>
<tr><td>894</td><td>LilaSchwarz</td><td>5c141cff47</td><td>2019-01-12 08:17:15</td><td>5</td><td>125249170.0</td><td>12544588.0</td></tr>
<tr><td>877</td><td>Vicente</td><td>0d3c417e55</td><td>2019-01-30 08:32:15</td><td>6</td><td>631885743.0</td><td>5818343.0</td></tr>
<tr><td>853</td><td>DK4</td><td>bfba7469f4</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>845</td><td>DK24</td><td>b2483f1942</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>828</td><td>golem-spliff-osx</td><td>5015bfd932</td><td>2019-01-30 08:32:15</td><td>3</td><td>840118240.0</td><td>5662310.0</td></tr>
<tr><td>825</td><td>Cloud9</td><td>8905205743</td><td>2019-01-30 08:32:15</td><td>11</td><td>14503740.0</td><td>17825792.0</td></tr>
<tr><td>808</td><td>DK27</td><td>7a81a0207e</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>799</td><td>1ryzen2600</td><td>89fac3f869</td><td>2019-01-30 08:32:15</td><td>8</td><td>76884419.0</td><td>10144841.0</td></tr>
<tr><td>790</td><td>trancephorm</td><td>213a71706a</td><td>2019-01-30 08:32:15</td><td>5</td><td>221810720.0</td><td>20964049.0</td></tr>
<tr><td>783</td><td>WishMeLuck1</td><td>fa52fe0e2e</td><td>2019-01-30 08:32:15</td><td>11</td><td>76573276.0</td><td>12507360.0</td></tr>
<tr><td>768</td><td>DK5</td><td>58d5956491</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>764</td><td>DuttyNode</td><td>6d1649c4e8</td><td>2019-01-30 08:32:15</td><td>4</td><td>83139780.0</td><td>6291456.0</td></tr>
<tr><td>737</td><td>Kinezumi</td><td>9d39a4a596</td><td>2018-12-02 12:47:12</td><td>7</td><td>83043856.0</td><td>24117248.0</td></tr>
<tr><td>735</td><td>macgyver</td><td>4e92f89baa</td><td>2019-01-30 08:32:15</td><td>28</td><td>50845204.0</td><td>9437184.0</td></tr>
<tr><td>733</td><td>Fuzzy Golem 2</td><td>cce082b147</td><td>2019-01-30 08:32:15</td><td>2</td><td>995424069.0</td><td>18874368.0</td></tr>
<tr><td>719</td><td>ushan001</td><td>b2c991299a</td><td>2019-01-30 08:32:15</td><td>31</td><td>441801748.0</td><td>222805431.0</td></tr>

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
      <tr><td scope='row'>234</td><td>Fat80y 3</td><td>bcc87a9746</td><td>2019-01-30 08:32:15</td><td>3</td><td>16916036.0</td><td>9382164.0</td></tr>
<tr><td>206</td><td>CM</td><td>deb4a9c8f0</td><td>2019-01-30 08:32:15</td><td>6</td><td>20040552.0</td><td>5242880.0</td></tr>
<tr><td>183</td><td>grunt</td><td>0022abe511</td><td>2019-01-14 19:42:15</td><td>7</td><td>1048576.0</td><td>12503772.0</td></tr>
<tr><td>166</td><td>DK24</td><td>b2483f1942</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>157</td><td>cryptodave</td><td>dc068d492b</td><td>2019-01-30 08:32:15</td><td>9</td><td>37065980.0</td><td>10485760.0</td></tr>
<tr><td>134</td><td>Sivir</td><td>f61c8405ba</td><td>2019-01-30 08:32:15</td><td>3</td><td>1048576.0</td><td>9397437.0</td></tr>
<tr><td>124</td><td>Nexus</td><td>a3564f7685</td><td>2019-01-08 16:02:15</td><td>7</td><td>31457280.0</td><td>10485760.0</td></tr>
<tr><td>114</td><td>Katznode</td><td>b4fdf00b27</td><td>2019-01-05 02:57:15</td><td>5</td><td>13408537.0</td><td>4951305.0</td></tr>
<tr><td>114</td><td>mine</td><td>d4545af398</td><td>2019-01-28 07:02:15</td><td>7</td><td>1048576.0</td><td>9290799.0</td></tr>
<tr><td>110</td><td>FrankinStineNode</td><td>c867218fae</td><td>2019-01-30 08:32:15</td><td>2</td><td>119560982.0</td><td>4194304.0</td></tr>
<tr><td>108</td><td>mrkmerc</td><td>2e00892ac8</td><td>2019-01-28 03:32:15</td><td>3</td><td>249850300.0</td><td>15627435.0</td></tr>
<tr><td>107</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2019-01-30 08:32:15</td><td>1</td><td>128395548.0</td><td>6290334.0</td></tr>
<tr><td>97</td><td>Bloopd</td><td>fcab66f556</td><td>2019-01-30 08:32:15</td><td>2</td><td>10485760.0</td><td>5310545.0</td></tr>
<tr><td>85</td><td>DuttyNode</td><td>6d1649c4e8</td><td>2019-01-30 08:32:15</td><td>4</td><td>83139780.0</td><td>6291456.0</td></tr>
<tr><td>83</td><td>sparklenose</td><td>b76d24a6fd</td><td>2018-12-26 19:02:28</td><td>5</td><td>157286400.0</td><td>8388608.0</td></tr>
<tr><td>78</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2019-01-30 08:32:15</td><td>1</td><td>879492720.0</td><td>6260778.0</td></tr>
<tr><td>70</td><td>Flaci75</td><td>6d31161d92</td><td>2019-01-30 06:27:15</td><td>3</td><td>104411320.0</td><td>3119553.0</td></tr>
<tr><td>63</td><td>Elizabeth</td><td>3e54698dce</td><td>2019-01-30 08:32:15</td><td>2</td><td>725474168.0</td><td>5093570.0</td></tr>
<tr><td>60</td><td>Vicente</td><td>0d3c417e55</td><td>2019-01-30 08:32:15</td><td>6</td><td>631885743.0</td><td>5818343.0</td></tr>
<tr><td>59</td><td>DK6</td><td>e6ab95ae5a</td><td>2019-01-28 09:37:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>59</td><td>DK13</td><td>356626023e</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>58</td><td>something</td><td>898df9f449</td><td>2019-01-30 08:32:15</td><td>2</td><td>440401920.0</td><td>16777216.0</td></tr>
<tr><td>56</td><td>DK12</td><td>6bf6602ed9</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>51</td><td>klopsknoedel</td><td>c82b9e2435</td><td>2018-12-14 09:37:28</td><td>6</td><td>94371840.0</td><td>9387834.0</td></tr>
<tr><td>49</td><td>MMX99</td><td>6d24d6189a</td><td>2018-12-30 03:32:28</td><td>10</td><td>62914560.0</td><td>10485760.0</td></tr>
<tr><td>48</td><td>HomePC w10</td><td>21c1954eb1</td><td>2019-01-16 17:27:15</td><td>4</td><td>1048576.0</td><td>8388608.0</td></tr>
<tr><td>47</td><td></td><td>89cc383411</td><td>2019-01-28 07:37:15</td><td>6</td><td>6291456.0</td><td>12535860.0</td></tr>
<tr><td>45</td><td>macgyver</td><td>4e92f89baa</td><td>2019-01-30 08:32:15</td><td>28</td><td>50845204.0</td><td>9437184.0</td></tr>
<tr><td>45</td><td>DK8</td><td>fc09208d6f</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>44</td><td>MMZ68</td><td>6557e52dad</td><td>2018-12-26 06:22:28</td><td>7</td><td>32618880.0</td><td>11534336.0</td></tr>
<tr><td>44</td><td>ciumete</td><td>8283860bb8</td><td>2019-01-30 08:32:15</td><td>6</td><td>26214400.0</td><td>33554432.0</td></tr>
<tr><td>44</td><td>DK17</td><td>629439ff3a</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>42</td><td>Supaeasy</td><td>fea300c286</td><td>2019-01-16 14:27:15</td><td>14</td><td>52428800.0</td><td>11534336.0</td></tr>
<tr><td>41</td><td>DK11</td><td>e0f6876a75</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>40</td><td>nodeone</td><td>e0a9b3e00a</td><td>2018-12-30 22:47:28</td><td>5</td><td>92710841.0</td><td>10026679.0</td></tr>
<tr><td>40</td><td>Pinkvomit</td><td>1562180b91</td><td>2019-01-06 05:02:15</td><td>4</td><td>10882728.0</td><td>7340032.0</td></tr>
<tr><td>40</td><td>SkitsoGolem</td><td>4d6d75f510</td><td>2019-01-14 14:47:15</td><td>5</td><td>15726660.0</td><td>10028817.0</td></tr>
<tr><td>40</td><td>DK19</td><td>89d1e6953d</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>40</td><td>GolemNerd-GPU</td><td>879093baed</td><td>2019-01-30 08:32:15</td><td>1</td><td>1048576.0</td><td>5887614.0</td></tr>
<tr><td>40</td><td>HypnoNode</td><td>aa99d9e417</td><td>2019-01-30 08:32:15</td><td>3</td><td>17107840.0</td><td>4718592.0</td></tr>
<tr><td>40</td><td>DK23</td><td>bcae614d6a</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>39</td><td>Pukerud</td><td>1fca5d276c</td><td>2018-12-22 01:37:28</td><td>14</td><td>51926456.0</td><td>11901528.0</td></tr>
<tr><td>39</td><td>Jambo</td><td>0aa3346fc0</td><td>2019-01-30 08:32:15</td><td>3</td><td>13670872.0</td><td>6180024.0</td></tr>
<tr><td>38</td><td></td><td>0302f2a782</td><td>2019-01-06 08:47:15</td><td>6</td><td>11587632.0</td><td>11892109.0</td></tr>
<tr><td>38</td><td>DK10</td><td>28fdc5a919</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>38</td><td>The_Bras_Node</td><td>873bd46534</td><td>2019-01-30 08:32:15</td><td>4</td><td>89603820.0</td><td>11668068.0</td></tr>
<tr><td>37</td><td>dollarbone</td><td>e224e508e8</td><td>2019-01-26 20:42:15</td><td>6</td><td>14222020.0</td><td>10759678.0</td></tr>
<tr><td>37</td><td>sifotes_main</td><td>49dad8a6f7</td><td>2019-01-30 08:32:15</td><td>5</td><td>16165331.0</td><td>9938275.0</td></tr>
<tr><td>37</td><td>DK18</td><td>b37d4a4ad2</td><td>2019-01-30 08:32:15</td><td>3</td><td>83886080.0</td><td>8912896.0</td></tr>
<tr><td>37</td><td>DK7</td><td>d1effca797</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>

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
      <tr><td scope='row'>249</td><td></td><td>de002b1df0</td><td>2019-01-30 08:32:15</td><td>1</td><td>1048576000.0</td><td>8388608.0</td></tr>
<tr><td>178</td><td>DK17</td><td>629439ff3a</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>168</td><td>austinav1</td><td>c1b1592c16</td><td>2019-01-29 07:32:15</td><td>2</td><td>262144000.0</td><td>6291456.0</td></tr>
<tr><td>168</td><td>Fat80y</td><td>3599f32da4</td><td>2019-01-30 08:32:15</td><td>6</td><td>73682386.0</td><td>12505725.0</td></tr>
<tr><td>152</td><td>DK27</td><td>7a81a0207e</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>150</td><td>DK25</td><td>f14b7a141a</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>149</td><td>DK22</td><td>f5785c737f</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>143</td><td>DK5</td><td>58d5956491</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>133</td><td>Zoey</td><td>a517033a35</td><td>2019-01-01 04:42:28</td><td>2</td><td>354418688.0</td><td>8178578.0</td></tr>
<tr><td>131</td><td>waffledonkey2003</td><td>be7e5eec73</td><td>2019-01-30 08:32:15</td><td>14</td><td>57671680.0</td><td>23068672.0</td></tr>
<tr><td>130</td><td>DiamondGolem</td><td>09fd5d0bd6</td><td>2019-01-27 07:42:15</td><td>2</td><td>21542999.0</td><td>11523777.0</td></tr>
<tr><td>127</td><td>DK11</td><td>e0f6876a75</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>122</td><td>DK20</td><td>31a2601e02</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>112</td><td>DK6</td><td>e6ab95ae5a</td><td>2019-01-28 09:37:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>109</td><td>snakelips</td><td>e0d04800ab</td><td>2019-01-23 18:32:15</td><td>7</td><td>1048576.0</td><td>2894748.0</td></tr>
<tr><td>101</td><td>moon0</td><td>c298c45088</td><td>2019-01-23 23:12:15</td><td>1</td><td>32505856.0</td><td>12479472.0</td></tr>
<tr><td>99</td><td>tj&e_funkotron</td><td>fee60b3ef3</td><td>2019-01-30 08:32:15</td><td>3</td><td>1048576.0</td><td>6291456.0</td></tr>
<tr><td>97</td><td>DK18</td><td>b37d4a4ad2</td><td>2019-01-30 08:32:15</td><td>3</td><td>83886080.0</td><td>8912896.0</td></tr>
<tr><td>95</td><td>gm</td><td>f97856d3c2</td><td>2019-01-30 08:07:15</td><td>1</td><td>142178502.0</td><td>3145728.0</td></tr>
<tr><td>94</td><td>DK23</td><td>bcae614d6a</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>89</td><td></td><td>892d074702</td><td>2019-01-09 01:07:15</td><td>21</td><td>787915267.0</td><td>143435771.0</td></tr>
<tr><td>89</td><td>DK16</td><td>cae4745f9d</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>86</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2019-01-30 08:32:15</td><td>1</td><td>879492720.0</td><td>6260778.0</td></tr>
<tr><td>83</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2019-01-30 08:32:15</td><td>1</td><td>128395548.0</td><td>6290334.0</td></tr>
<tr><td>78</td><td>cryptohnode1</td><td>efb810bac8</td><td>2019-01-30 08:32:15</td><td>39</td><td>268032108.0</td><td>2986422.0</td></tr>
<tr><td>78</td><td>vehsak</td><td>e79bc084c9</td><td>2019-01-30 08:32:15</td><td>1</td><td>31457280.0</td><td>4194304.0</td></tr>
<tr><td>78</td><td>DK4</td><td>bfba7469f4</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>75</td><td>xeqres</td><td>c01a28b851</td><td>2019-01-30 08:32:15</td><td>3</td><td>1048576.0</td><td>5242880.0</td></tr>
<tr><td>74</td><td>grunt</td><td>0022abe511</td><td>2019-01-14 19:42:15</td><td>7</td><td>1048576.0</td><td>12503772.0</td></tr>
<tr><td>73</td><td>superluis018</td><td>2cb753e34e</td><td>2019-01-30 08:32:15</td><td>3</td><td>78643200.0</td><td>8388608.0</td></tr>
<tr><td>70</td><td>Durin2</td><td>b9340eeb6d</td><td>2019-01-21 13:02:15</td><td>1</td><td>52428800.0</td><td>5242880.0</td></tr>
<tr><td>69</td><td>DK26</td><td>1c6c008734</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>69</td><td>DEDICATEDfastSSD</td><td>d3849667d4</td><td>2019-01-30 08:32:15</td><td>2</td><td>260364048.0</td><td>9983450.0</td></tr>
<tr><td>64</td><td>Fat80y 3</td><td>bcc87a9746</td><td>2019-01-30 08:32:15</td><td>3</td><td>16916036.0</td><td>9382164.0</td></tr>
<tr><td>57</td><td>Fat80y 1</td><td>a5157c6d80</td><td>2019-01-17 07:42:15</td><td>3</td><td>481751608.0</td><td>12543825.0</td></tr>
<tr><td>55</td><td>m_node01</td><td>5df112fcd3</td><td>2018-12-16 11:57:28</td><td>2</td><td>52428800.0</td><td>4194304.0</td></tr>
<tr><td>55</td><td>Loki_Golem_1</td><td>aa62bc6250</td><td>2019-01-29 12:12:15</td><td>15</td><td>215089300.0</td><td>56615220.0</td></tr>
<tr><td>54</td><td>redka</td><td>b99f49e45a</td><td>2019-01-09 09:07:15</td><td>1</td><td>419430400.0</td><td>3066129.0</td></tr>
<tr><td>52</td><td>spider07</td><td>f1e1d3dc57</td><td>2019-01-04 09:52:15</td><td>2</td><td>51217608.0</td><td>2097152.0</td></tr>
<tr><td>52</td><td>DK19</td><td>89d1e6953d</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>51</td><td>Vicente</td><td>0d3c417e55</td><td>2019-01-30 08:32:15</td><td>6</td><td>631885743.0</td><td>5818343.0</td></tr>
<tr><td>51</td><td>BitCryptic-Bal1</td><td>a731e91723</td><td>2019-01-30 08:32:15</td><td>1</td><td>1048576.0</td><td>5708586.0</td></tr>
<tr><td>49</td><td>abcdefyyy</td><td>f57cfbf9b3</td><td>2019-01-30 08:32:15</td><td>3</td><td>11534336.0</td><td>4194304.0</td></tr>
<tr><td>49</td><td>golemnode587394</td><td>036671814f</td><td>2019-01-30 08:32:15</td><td>3</td><td>1048576.0</td><td>4564239.0</td></tr>
<tr><td>48</td><td>JumpNode2</td><td>4ef31fa7ec</td><td>2018-12-02 14:32:12</td><td>1</td><td>392369056.0</td><td>2865284.0</td></tr>
<tr><td>47</td><td>DonsDell</td><td>bfbd973bfd</td><td>2019-01-30 08:32:15</td><td>5</td><td>658529094.0</td><td>14120543.0</td></tr>
<tr><td>47</td><td>bigarmsbiggut</td><td>f080031296</td><td>2019-01-30 08:32:15</td><td>2</td><td>32921932.0</td><td>4955690.0</td></tr>
<tr><td>46</td><td>Kinezumi</td><td>9d39a4a596</td><td>2018-12-02 12:47:12</td><td>7</td><td>83043856.0</td><td>24117248.0</td></tr>
<tr><td>46</td><td>DK13</td><td>356626023e</td><td>2019-01-30 08:32:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>43</td><td></td><td>ed050165f0</td><td>2019-01-21 19:02:15</td><td>3</td><td>879710196.0</td><td>6243198.0</td></tr>

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
      <tr><td scope='row'>915</td><td>ImALumberJack</td><td>839b655694</td><td>2019-01-30 08:32:15</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr>
<tr><td>856</td><td>Tasty Doe</td><td>1f8e0cdf90</td><td>2019-01-30 08:32:15</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>687</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2019-01-30 08:32:15</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>596</td><td>fzhut</td><td>efc9be5e59</td><td>2019-01-30 08:32:15</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>175</td><td>kascheri12</td><td>656778299a</td><td>2019-01-30 08:32:15</td><td>7</td><td>137892736.0</td><td>11450449.0</td></tr>
<tr><td>15</td><td>vm win 0.18.2</td><td>a8242a7e35</td><td>2018-12-20 06:02:28</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>10</td><td>vm linux 0.18.2</td><td>ed13e4d451</td><td>2018-12-18 11:32:28</td><td>1</td><td>1048576.0</td><td>3102126.0</td></tr>
<tr><td>9</td><td>Scyther</td><td>a3020d305e</td><td>2019-01-25 08:32:15</td><td>1</td><td>110427365.0</td><td>7675576.0</td></tr>
<tr><td>8</td><td>vm sierra 0.18.2</td><td>87c038c829</td><td>2018-12-20 06:57:28</td><td>1</td><td>2097152.0</td><td>5242880.0</td></tr>
<tr><td>8</td><td>Szadok</td><td>6015c9f98f</td><td>2019-01-30 04:32:15</td><td>7</td><td>258546620.0</td><td>25165824.0</td></tr>
<tr><td>8</td><td>lzmijewski</td><td>e593c8c41e</td><td>2019-01-30 08:12:15</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>
<tr><td>7</td><td>2rec ubuntu</td><td>2rec</td><td>2018-12-14 03:17:28</td><td>7</td><td>360567792.0</td><td>12212628.0</td></tr>
<tr><td>6</td><td>vm win 19</td><td>b185150df5</td><td>2019-01-28 04:47:15</td><td>2</td><td>4718592.0</td><td>3145728.0</td></tr>

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
      <tr><td scope='row'>552</td><td>fzhut</td><td>efc9be5e59</td><td>2019-01-30 08:32:15</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>337</td><td>Tasty Doe</td><td>1f8e0cdf90</td><td>2019-01-30 08:32:15</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>203</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2019-01-30 08:32:15</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>176</td><td>ImALumberJack</td><td>839b655694</td><td>2019-01-30 08:32:15</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr>
<tr><td>174</td><td>kascheri12</td><td>656778299a</td><td>2019-01-30 08:32:15</td><td>7</td><td>137892736.0</td><td>11450449.0</td></tr>
<tr><td>8</td><td>vm linux 0.18.2</td><td>ed13e4d451</td><td>2018-12-18 11:32:28</td><td>1</td><td>1048576.0</td><td>3102126.0</td></tr>
<tr><td>8</td><td>Szadok</td><td>6015c9f98f</td><td>2019-01-30 04:32:15</td><td>7</td><td>258546620.0</td><td>25165824.0</td></tr>
<tr><td>7</td><td>2rec ubuntu</td><td>2rec</td><td>2018-12-14 03:17:28</td><td>7</td><td>360567792.0</td><td>12212628.0</td></tr>
<tr><td>7</td><td>vm win 0.18.2</td><td>a8242a7e35</td><td>2018-12-20 06:02:28</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>5</td><td>vm sierra 0.18.2</td><td>87c038c829</td><td>2018-12-20 06:57:28</td><td>1</td><td>2097152.0</td><td>5242880.0</td></tr>
<tr><td>5</td><td>vm win 19</td><td>b185150df5</td><td>2019-01-28 04:47:15</td><td>2</td><td>4718592.0</td><td>3145728.0</td></tr>
<tr><td>5</td><td>lzmijewski</td><td>e593c8c41e</td><td>2019-01-30 08:12:15</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>
<tr><td>4</td><td></td><td>01090e3877</td><td>2018-12-14 05:27:28</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>4</td><td>vm linux 18.3</td><td>0e9c5f4ab5</td><td>2019-01-28 10:27:15</td><td>1</td><td>1048576.0</td><td>3102126.0</td></tr>
<tr><td>4</td><td>oncoming storm</td><td>6c15fa96c1</td><td>2019-01-30 08:32:15</td><td>3</td><td>56681796.0</td><td>12227034.0</td></tr>
<tr><td>3</td><td></td><td>b977047110</td><td>2018-12-03 11:42:12</td><td>3</td><td>1048576.0</td><td>4701183.0</td></tr>
<tr><td>3</td><td>vm win docker</td><td>84861d2c2c</td><td>2018-12-14 09:27:28</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>

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
      <tr><td scope='row'>17</td><td>kascheri12</td><td>656778299a</td><td>2019-01-30 08:32:15</td><td>7</td><td>137892736.0</td><td>11450449.0</td></tr>
<tr><td>8</td><td>Tasty Doe</td><td>1f8e0cdf90</td><td>2019-01-30 08:32:15</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>7</td><td>2rec ubuntu</td><td>2rec</td><td>2018-12-14 03:17:28</td><td>7</td><td>360567792.0</td><td>12212628.0</td></tr>
<tr><td>6</td><td>Szadok</td><td>6015c9f98f</td><td>2019-01-30 04:32:15</td><td>7</td><td>258546620.0</td><td>25165824.0</td></tr>
<tr><td>6</td><td>ImALumberJack</td><td>839b655694</td><td>2019-01-30 08:32:15</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr>
<tr><td>5</td><td>vm win 0.18.2</td><td>a8242a7e35</td><td>2018-12-20 06:02:28</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>4</td><td>vm sierra 0.18.2</td><td>87c038c829</td><td>2018-12-20 06:57:28</td><td>1</td><td>2097152.0</td><td>5242880.0</td></tr>
<tr><td>4</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2019-01-30 08:32:15</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>3</td><td></td><td>c655c4771a</td><td>2018-11-30 06:37:21</td><td>2</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>3</td><td></td><td>01090e3877</td><td>2018-12-14 05:27:28</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>3</td><td>vm linux 0.18.2</td><td>ed13e4d451</td><td>2018-12-18 11:32:28</td><td>1</td><td>1048576.0</td><td>3102126.0</td></tr>
<tr><td>3</td><td>vm win 19</td><td>b185150df5</td><td>2019-01-28 04:47:15</td><td>2</td><td>4718592.0</td><td>3145728.0</td></tr>
<tr><td>3</td><td>vm linux 18.3</td><td>0e9c5f4ab5</td><td>2019-01-28 10:27:15</td><td>1</td><td>1048576.0</td><td>3102126.0</td></tr>
<tr><td>3</td><td>lzmijewski</td><td>e593c8c41e</td><td>2019-01-30 08:12:15</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>
<tr><td>3</td><td>oncoming storm</td><td>6c15fa96c1</td><td>2019-01-30 08:32:15</td><td>3</td><td>56681796.0</td><td>12227034.0</td></tr>
<tr><td>2</td><td></td><td>b977047110</td><td>2018-12-03 11:42:12</td><td>3</td><td>1048576.0</td><td>4701183.0</td></tr>

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
      <tr><td scope='row'>127</td><td>fae</td><td>be80be2ef8</td><td>2019-01-13 23:42:15</td><td>127</td><td>1610612736.0</td><td>3012881250.0</td></tr>
<tr><td>63</td><td></td><td>819fa3c479</td><td>2018-12-07 21:17:12</td><td>63</td><td>1048576.0</td><td>198089248.0</td></tr>
<tr><td>63</td><td></td><td>f87104265e</td><td>2018-12-08 18:02:12</td><td>63</td><td>1048576.0</td><td>198089248.0</td></tr>
<tr><td>63</td><td></td><td>6dd9644cff</td><td>2018-12-11 03:47:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>9c9f20bb6d</td><td>2018-12-12 22:07:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>85b9164328</td><td>2018-12-15 15:57:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>c3d23a9761</td><td>2018-12-15 22:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>561618eb72</td><td>2018-12-16 19:02:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>23636fca2f</td><td>2018-12-16 22:17:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>40f92da3c2</td><td>2018-12-18 07:22:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>1db2989afe</td><td>2018-12-19 10:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td>server</td><td>227bb3c4af</td><td>2018-12-19 16:17:28</td><td>63</td><td>1048576.0</td><td>98989092.0</td></tr>
<tr><td>63</td><td></td><td>d21faacd1c</td><td>2018-12-24 22:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>5ad7765acc</td><td>2018-12-25 16:07:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>f5f643d260</td><td>2018-12-25 16:07:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td></td><td>34bf695cea</td><td>2018-12-25 16:07:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>7e3cea8a91</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td>golem1</td><td>c2490a5ce2</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>57ce921b99</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>b1c26f12ab</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td></td><td>1af8bd40c3</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td>ice_miner_0</td><td>d5dc1c4738</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td>ionserver</td><td>6fd381a5e8</td><td>2018-12-28 04:22:28</td><td>44</td><td>663748608.0</td><td>73400320.0</td></tr>
<tr><td>63</td><td>socrates</td><td>0941fd2329</td><td>2019-01-14 06:52:15</td><td>63</td><td>1610612736.0</td><td>99013776.0</td></tr>
<tr><td>63</td><td>kleon</td><td>a74fbbc815</td><td>2019-01-14 06:52:15</td><td>63</td><td>1610612736.0</td><td>99013779.0</td></tr>
<tr><td>63</td><td>ionserver</td><td>3e0609df46</td><td>2019-01-16 12:02:15</td><td>46</td><td>665845760.0</td><td>73400320.0</td></tr>
<tr><td>63</td><td>KERVOS</td><td>e24275e714</td><td>2019-01-17 00:42:15</td><td>63</td><td>1610612736.0</td><td>99013776.0</td></tr>
<tr><td>63</td><td>ioassembly-62core-2</td><td>f1bea36319</td><td>2019-01-29 17:07:15</td><td>62</td><td>1048576.0</td><td>24702936.0</td></tr>
<tr><td>63</td><td>ioassembly-62core-1</td><td>21d1cda599</td><td>2019-01-29 17:07:15</td><td>62</td><td>1048576.0</td><td>24702936.0</td></tr>
<tr><td>63</td><td>ionserver</td><td>b195c247f2</td><td>2019-01-30 04:32:15</td><td>46</td><td>422576128.0</td><td>73400320.0</td></tr>
<tr><td>39</td><td>Terminator 420</td><td>165a7ae218</td><td>2019-01-21 19:47:15</td><td>4</td><td>165675008.0</td><td>10485760.0</td></tr>
<tr><td>39</td><td>cryptohnode1</td><td>efb810bac8</td><td>2019-01-30 08:32:15</td><td>39</td><td>268032108.0</td><td>2986422.0</td></tr>
<tr><td>34</td><td>davidgolem</td><td>78ed208862</td><td>2019-01-30 08:32:15</td><td>34</td><td>834560724.0</td><td>44040192.0</td></tr>
<tr><td>32</td><td>Zanthrox</td><td>39fe33f170</td><td>2018-12-29 01:57:28</td><td>32</td><td>20497436.0</td><td>12523779.0</td></tr>
<tr><td>32</td><td>SuperServer</td><td>29d99e9d1c</td><td>2019-01-21 18:22:15</td><td>32</td><td>1048576.0</td><td>100580937.0</td></tr>
<tr><td>32</td><td>Castillos</td><td>8f9e9681c0</td><td>2019-01-22 06:52:15</td><td>32</td><td>146885868.0</td><td>13910617.0</td></tr>
<tr><td>32</td><td>RyzenTR 28Cores</td><td>4851463939</td><td>2019-01-25 22:07:15</td><td>28</td><td>378546421.0</td><td>45225082.0</td></tr>
<tr><td>32</td><td>Baker14</td><td>25e811deac</td><td>2019-01-29 05:17:15</td><td>26</td><td>335544320.0</td><td>41943040.0</td></tr>
<tr><td>32</td><td>KOW4G02</td><td>fefade7675</td><td>2019-01-30 08:32:15</td><td>32</td><td>76681412.0</td><td>50331648.0</td></tr>
<tr><td>31</td><td></td><td>748284266c</td><td>2018-12-08 12:57:12</td><td>31</td><td>1048576.0</td><td>49480344.0</td></tr>
<tr><td>31</td><td>Hydra</td><td>d91a9c86c3</td><td>2019-01-19 10:57:15</td><td>27</td><td>7677140.0</td><td>11250576.0</td></tr>
<tr><td>31</td><td>Airborne3325</td><td>6e76d7718e</td><td>2019-01-27 00:07:15</td><td>30</td><td>352722140.0</td><td>23816241.0</td></tr>
<tr><td>31</td><td>Threadripper-Max</td><td>832633c10d</td><td>2019-01-28 21:07:15</td><td>31</td><td>52428800.0</td><td>25069437.0</td></tr>
<tr><td>31</td><td>ioassembly-30core-2</td><td>e9bf770da5</td><td>2019-01-30 08:32:15</td><td>30</td><td>1048576.0</td><td>6000000.0</td></tr>

    </tbody>
  </table>
</div>

</div>

<br /><br />
### [All Nodes by Latest Snapshop](/pages/All-Nodes-Latest-Snapshot)

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
