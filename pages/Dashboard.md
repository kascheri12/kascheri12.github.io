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
  gauge1.set(4.5694); // set actual value
  gauge1.setTextField(document.getElementById('span_gauge_percent_change_subtasks_success_past_day'),3);
  
  var gauge2 = new Gauge(target2).setOptions(opts2); // create sexy gauge!
  gauge2.maxValue = 50; // set max gauge value
  gauge2.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge2.animationSpeed = 10; // set animation speed (32 is default value)
  gauge2.set(6.4150); // set actual value
  gauge2.setTextField(document.getElementById('span_gauge_percent_change_subtasks_timeout_past_day'),3);
  
  var gauge3 = new Gauge(target3).setOptions(opts3); // create sexy gauge!
  gauge3.maxValue = 50; // set max gauge value
  gauge3.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge3.animationSpeed = 10; // set animation speed (32 is default value)
  gauge3.set(-4.0248); // set actual value
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
      <tr><td scope='row'>2019-05-22</td><td>110191</td><td>4.5694</td><td>4877</td><td>6.4150</td><td>2170</td><td>-4.0248</td></tr>
<tr><td>2019-05-21</td><td>105376</td><td>14.2423</td><td>4583</td><td>15.5281</td><td>2261</td><td>13.3902</td></tr>
<tr><td>2019-05-20</td><td>92239</td><td>-8.2710</td><td>3967</td><td>-5.6150</td><td>1994</td><td>-11.3778</td></tr>
<tr><td>2019-05-19</td><td>100556</td><td>4.8747</td><td>4203</td><td>3.4203</td><td>2250</td><td>4.4084</td></tr>
<tr><td>2019-05-18</td><td>95882</td><td>-4.9110</td><td>4064</td><td>-0.6600</td><td>2155</td><td>-12.7530</td></tr>
<tr><td>2019-05-17</td><td>100834</td><td>2.6541</td><td>4091</td><td>-7.0439</td><td>2470</td><td>19.6705</td></tr>
<tr><td>2019-05-16</td><td>98227</td><td>3.0865</td><td>4401</td><td>-2.5681</td><td>2064</td><td>13.2821</td></tr>
<tr><td>2019-05-15</td><td>95286</td><td>9.2817</td><td>4517</td><td>8.0622</td><td>1822</td><td>-4.6572</td></tr>
<tr><td>2019-05-14</td><td>87193</td><td>-12.5762</td><td>4180</td><td>-7.1317</td><td>1911</td><td>-24.0461</td></tr>
<tr><td>2019-05-13</td><td>99736</td><td>3.8138</td><td>4501</td><td>-0.3101</td><td>2516</td><td>20.0382</td></tr>
<tr><td>2019-05-12</td><td>96072</td><td>-1.7759</td><td>4515</td><td>2.2187</td><td>2096</td><td>-25.2496</td></tr>
<tr><td>2019-05-11</td><td>97809</td><td>13.2757</td><td>4417</td><td>3.6368</td><td>2804</td><td>9.1475</td></tr>
<tr><td>2019-05-10</td><td>86346</td><td>-3.1529</td><td>4262</td><td>-3.5310</td><td>2569</td><td>-8.2500</td></tr>
<tr><td>2019-05-09</td><td>89157</td><td>1.7600</td><td>4418</td><td>-4.1649</td><td>2800</td><td>6.0606</td></tr>
<tr><td>2019-05-08</td><td>87615</td><td>-7.8270</td><td>4610</td><td>-0.6466</td><td>2640</td><td>-0.1135</td></tr>
<tr><td>2019-05-07</td><td>95055</td><td>2.3737</td><td>4640</td><td>3.0195</td><td>2643</td><td>13.7753</td></tr>
<tr><td>2019-05-06</td><td>92851</td><td>0.1240</td><td>4504</td><td>7.8028</td><td>2323</td><td>-11.6730</td></tr>
<tr><td>2019-05-05</td><td>92736</td><td>12.8052</td><td>4178</td><td>8.9439</td><td>2630</td><td>7.8311</td></tr>
<tr><td>2019-05-04</td><td>82209</td><td>-1.4020</td><td>3835</td><td>2.0218</td><td>2439</td><td>-9.8336</td></tr>
<tr><td>2019-05-03</td><td>83378</td><td>-5.7929</td><td>3759</td><td>-6.0485</td><td>2705</td><td>-0.5880</td></tr>

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
      <tr><td scope='row'>3410</td><td>mainich1</td><td>08dfebdc9c</td><td>2019-05-22 14:23:53</td><td>10</td><td>21286092.0</td><td>21810380.0</td></tr>
<tr><td>2928</td><td>spliffstar-macos</td><td>5015bfd932</td><td>2019-05-22 14:23:53</td><td>3</td><td>537125252.0</td><td>11114904.0</td></tr>
<tr><td>2898</td><td>Node-ByZohaib</td><td>eb4732ff31</td><td>2019-05-22 14:23:53</td><td>14</td><td>20974576.0</td><td>12279022.0</td></tr>
<tr><td>2744</td><td>BoSox9</td><td>24eb4e2c1f</td><td>2019-05-22 14:23:53</td><td>14</td><td>26214400.0</td><td>20971520.0</td></tr>
<tr><td>2301</td><td>obad-hai</td><td>dc6942cfa6</td><td>2019-05-22 14:23:53</td><td>7</td><td>1048576.0</td><td>6130620.0</td></tr>
<tr><td>2273</td><td>fuchur2</td><td>312d46498d</td><td>2019-05-22 14:23:53</td><td>13</td><td>1058118041.0</td><td>21951638.0</td></tr>
<tr><td>2233</td><td>xeqres</td><td>c01a28b851</td><td>2019-05-22 14:23:53</td><td>3</td><td>1048576.0</td><td>5242880.0</td></tr>
<tr><td>2165</td><td>Zootopia</td><td>87f1bdc964</td><td>2019-05-22 14:23:53</td><td>27</td><td>35791176.0</td><td>12315972.0</td></tr>
<tr><td>2074</td><td>PM-Me-GNT</td><td>8475b3a5f5</td><td>2019-04-28 15:38:53</td><td>12</td><td>35109432.0</td><td>10659242.0</td></tr>
<tr><td>2014</td><td>coduyen</td><td>3bf155f147</td><td>2019-05-22 14:23:53</td><td>11</td><td>104857600.0</td><td>36700160.0</td></tr>
<tr><td>1968</td><td>DonsDell</td><td>bfbd973bfd</td><td>2019-05-22 14:23:53</td><td>5</td><td>658529094.0</td><td>14120542.0</td></tr>
<tr><td>1878</td><td>vuSa8Ri</td><td>da7980a71a</td><td>2019-05-22 14:23:53</td><td>7</td><td>337537220.0</td><td>24540572.0</td></tr>
<tr><td>1875</td><td>macgyver</td><td>4e92f89baa</td><td>2019-05-22 14:23:53</td><td>9</td><td>17442536.0</td><td>9437184.0</td></tr>
<tr><td>1865</td><td>cryptodave</td><td>dc068d492b</td><td>2019-05-22 14:23:53</td><td>9</td><td>14221080.0</td><td>10485760.0</td></tr>
<tr><td>1842</td><td>Fuzzy Golem</td><td>06af924c46</td><td>2019-05-22 14:23:53</td><td>5</td><td>217862388.0</td><td>20971520.0</td></tr>
<tr><td>1841</td><td>grunt</td><td>0022abe511</td><td>2019-01-14 19:42:15</td><td>7</td><td>1048576.0</td><td>12503772.0</td></tr>
<tr><td>1832</td><td>mano</td><td>35f5ecd5d4</td><td>2019-05-22 14:23:53</td><td>7</td><td>47862440.0</td><td>20971520.0</td></tr>
<tr><td>1773</td><td>(Anonymous)</td><td>d843dfd5a8</td><td>2019-05-22 14:23:53</td><td>7</td><td>91439820.0</td><td>11058252.0</td></tr>
<tr><td>1692</td><td>abcdefyyy</td><td>f57cfbf9b3</td><td>2019-05-22 14:23:53</td><td>3</td><td>4281764.0</td><td>4194304.0</td></tr>
<tr><td>1690</td><td>Gaming1</td><td>7e6a3047b6</td><td>2019-05-22 09:03:53</td><td>11</td><td>9671356.0</td><td>22600098.0</td></tr>
<tr><td>1690</td><td>Pro Grade</td><td>3258c0b410</td><td>2019-05-22 14:23:53</td><td>11</td><td>140277716.0</td><td>10485760.0</td></tr>
<tr><td>1683</td><td>plumbus</td><td>611f591f51</td><td>2019-05-22 14:23:53</td><td>6</td><td>52428800.0</td><td>8388608.0</td></tr>
<tr><td>1658</td><td>Cormatic</td><td>5ee5b3e65c</td><td>2019-03-17 19:53:53</td><td>24</td><td>104857600.0</td><td>20971520.0</td></tr>
<tr><td>1635</td><td>BlackTower</td><td>f300a23897</td><td>2019-05-22 14:23:53</td><td>6</td><td>8106096.0</td><td>22606970.0</td></tr>
<tr><td>1603</td><td>The_Bras_Node</td><td>873bd46534</td><td>2019-05-22 14:23:53</td><td>4</td><td>34004608.0</td><td>11668068.0</td></tr>
<tr><td>1602</td><td>Vicente</td><td>0d3c417e55</td><td>2019-05-22 11:23:53</td><td>6</td><td>472540832.0</td><td>11219762.0</td></tr>
<tr><td>1577</td><td>Woodgrob27</td><td>f437c23e41</td><td>2019-05-09 02:48:53</td><td>11</td><td>124332240.0</td><td>50266326.0</td></tr>
<tr><td>1552</td><td>1ryzen2600</td><td>89fac3f869</td><td>2019-05-20 10:23:53</td><td>8</td><td>76884419.0</td><td>10144841.0</td></tr>
<tr><td>1498</td><td>Oncoming Storm</td><td>6c15fa96c1</td><td>2019-05-22 14:23:53</td><td>3</td><td>10456288.0</td><td>12227034.0</td></tr>
<tr><td>1464</td><td>GoodJobBestPrice</td><td>bfced6f558</td><td>2019-05-22 14:23:53</td><td>3</td><td>17477688.0</td><td>6081740.0</td></tr>
<tr><td>1455</td><td>W0RSCHD</td><td>e977f6866f</td><td>2019-05-20 02:13:53</td><td>4</td><td>56862528.0</td><td>10485760.0</td></tr>
<tr><td>1451</td><td>EyeIsBoss</td><td>6bbeb79e20</td><td>2019-05-22 14:23:53</td><td>5</td><td>568058995.0</td><td>20110094.0</td></tr>
<tr><td>1439</td><td>PILLAGER</td><td>7ce29c9105</td><td>2019-01-20 18:32:15</td><td>14</td><td>719369212.0</td><td>49828331.0</td></tr>
<tr><td>1428</td><td>KOW4G02</td><td>fefade7675</td><td>2019-05-22 14:23:53</td><td>10</td><td>31515148.0</td><td>50331648.0</td></tr>
<tr><td>1403</td><td>Kaze</td><td>04774b8ae3</td><td>2019-05-22 14:23:53</td><td>5</td><td>134217728.0</td><td>8388608.0</td></tr>
<tr><td>1397</td><td>maco-nodey-1</td><td>51b78ede71</td><td>2019-05-20 16:13:53</td><td>10</td><td>477124308.0</td><td>20971520.0</td></tr>
<tr><td>1396</td><td>l3t0l</td><td>9d4bdceb2c</td><td>2019-05-22 14:23:53</td><td>6</td><td>134742016.0</td><td>8388608.0</td></tr>
<tr><td>1385</td><td>Liesse</td><td>d28760e78d</td><td>2019-05-22 14:23:53</td><td>14</td><td>75812044.0</td><td>5242880.0</td></tr>
<tr><td>1381</td><td>GolemMultiCore</td><td>735abafcb3</td><td>2019-04-22 15:13:53</td><td>12</td><td>31562137.0</td><td>6291456.0</td></tr>
<tr><td>1380</td><td>tiger-zoo</td><td>258ab76a7c</td><td>2019-05-22 14:23:53</td><td>27</td><td>1048576.0</td><td>9219408.0</td></tr>
<tr><td>1374</td><td>dvitman</td><td>43167dc8c2</td><td>2019-05-22 14:23:53</td><td>7</td><td>1048576.0</td><td>9347970.0</td></tr>
<tr><td>1350</td><td>Tobi Voos</td><td>f4ae245446</td><td>2019-05-22 14:23:53</td><td>5</td><td>304726404.0</td><td>10380902.0</td></tr>
<tr><td>1315</td><td>ryzenGolem</td><td>ea132c2185</td><td>2019-02-20 00:27:15</td><td>12</td><td>104961308.0</td><td>6251955.0</td></tr>
<tr><td>1267</td><td>I7-6700HQ-3.5GHZ</td><td>fec3432359</td><td>2019-05-21 22:43:53</td><td>6</td><td>156349896.0</td><td>10873440.0</td></tr>
<tr><td>1249</td><td>Gforce</td><td>07511fb5e4</td><td>2019-01-29 09:42:15</td><td>11</td><td>334937163.0</td><td>9280907.0</td></tr>
<tr><td>1209</td><td>Golem#1</td><td>f780675895</td><td>2019-05-22 14:23:53</td><td>5</td><td>5138022.0</td><td>8388608.0</td></tr>
<tr><td>1149</td><td>davidgolem</td><td>78ed208862</td><td>2019-05-22 14:23:53</td><td>34</td><td>834560724.0</td><td>44040192.0</td></tr>
<tr><td>1109</td><td>DK18</td><td>b37d4a4ad2</td><td>2019-03-13 18:28:53</td><td>3</td><td>34630624.0</td><td>8912896.0</td></tr>
<tr><td>1096</td><td>Pacifica02_b</td><td>3bf599d6d3</td><td>2019-05-22 14:23:53</td><td>11</td><td>160432128.0</td><td>16777216.0</td></tr>

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
      <tr><td scope='row'>454</td><td>DedoGolem</td><td>364fd5af24</td><td>2019-05-12 03:23:53</td><td>12</td><td>10485760.0</td><td>12582912.0</td></tr>
<tr><td>452</td><td>GolemMultiCore</td><td>735abafcb3</td><td>2019-04-22 15:13:53</td><td>12</td><td>31562137.0</td><td>6291456.0</td></tr>
<tr><td>313</td><td>MaccyD1</td><td>deb4a9c8f0</td><td>2019-05-14 19:43:53</td><td>6</td><td>14026792.0</td><td>5242880.0</td></tr>
<tr><td>297</td><td>Fuzzy Golem</td><td>06af924c46</td><td>2019-05-22 14:23:53</td><td>5</td><td>217862388.0</td><td>20971520.0</td></tr>
<tr><td>235</td><td>Fat80y 3</td><td>bcc87a9746</td><td>2019-05-11 00:58:53</td><td>3</td><td>21468996.0</td><td>9382164.0</td></tr>
<tr><td>208</td><td>123</td><td>437316f010</td><td>2019-05-20 01:53:53</td><td>2</td><td>114766476.0</td><td>10649904.0</td></tr>
<tr><td>183</td><td>grunt</td><td>0022abe511</td><td>2019-01-14 19:42:15</td><td>7</td><td>1048576.0</td><td>12503772.0</td></tr>
<tr><td>167</td><td>DK24</td><td>b2483f1942</td><td>2019-02-22 20:37:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>165</td><td>plumbus</td><td>611f591f51</td><td>2019-05-22 14:23:53</td><td>6</td><td>52428800.0</td><td>8388608.0</td></tr>
<tr><td>162</td><td>mig-eth</td><td>867f600af6</td><td>2019-05-18 11:08:53</td><td>3</td><td>94371840.0</td><td>11534336.0</td></tr>
<tr><td>158</td><td>cryptodave</td><td>dc068d492b</td><td>2019-05-22 14:23:53</td><td>9</td><td>14221080.0</td><td>10485760.0</td></tr>
<tr><td>146</td><td>DaBomb</td><td>b4d6421943</td><td>2019-05-10 20:28:53</td><td>7</td><td>314572800.0</td><td>12582912.0</td></tr>
<tr><td>136</td><td>Sivir</td><td>f61c8405ba</td><td>2019-05-11 06:48:53</td><td>3</td><td>1048576.0</td><td>9397436.0</td></tr>
<tr><td>129</td><td>GolemNerd-GPU</td><td>879093baed</td><td>2019-04-30 23:48:53</td><td>1</td><td>1048576.0</td><td>5887620.0</td></tr>
<tr><td>127</td><td>olexiyb</td><td>89cc383411</td><td>2019-05-22 14:23:53</td><td>2</td><td>6291456.0</td><td>18827318.0</td></tr>
<tr><td>124</td><td>Nexus</td><td>a3564f7685</td><td>2019-01-08 16:02:15</td><td>7</td><td>31457280.0</td><td>10485760.0</td></tr>
<tr><td>121</td><td>Vicente</td><td>0d3c417e55</td><td>2019-05-22 11:23:53</td><td>6</td><td>472540832.0</td><td>11219762.0</td></tr>
<tr><td>120</td><td>samthegolem</td><td>bdb78989b1</td><td>2019-05-04 17:28:53</td><td>3</td><td>320864256.0</td><td>11534336.0</td></tr>
<tr><td>115</td><td>mine</td><td>d4545af398</td><td>2019-05-22 14:23:53</td><td>7</td><td>1048576.0</td><td>9290799.0</td></tr>
<tr><td>114</td><td>Katznode</td><td>b4fdf00b27</td><td>2019-01-05 02:57:15</td><td>5</td><td>13408537.0</td><td>4951305.0</td></tr>
<tr><td>114</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2019-05-22 14:23:53</td><td>3</td><td>144122508.0</td><td>3071204.0</td></tr>
<tr><td>111</td><td>FrankinStineNode</td><td>c867218fae</td><td>2019-03-01 19:33:53</td><td>2</td><td>119560982.0</td><td>4194304.0</td></tr>
<tr><td>108</td><td>mrkmerc</td><td>2e00892ac8</td><td>2019-04-05 18:43:53</td><td>3</td><td>237236840.0</td><td>15627434.0</td></tr>
<tr><td>98</td><td>bloopd</td><td>fcab66f556</td><td>2019-05-22 09:03:53</td><td>2</td><td>2202009.0</td><td>5138022.0</td></tr>
<tr><td>96</td><td>kohendri</td><td>055bdd085a</td><td>2019-04-07 11:53:53</td><td>2</td><td>43754810.0</td><td>4194304.0</td></tr>
<tr><td>92</td><td>Selivan74-sala2</td><td>8667f2ddff</td><td>2019-05-12 05:38:53</td><td>2</td><td>20027801.0</td><td>6291456.0</td></tr>
<tr><td>87</td><td>DuttyNode</td><td>6d1649c4e8</td><td>2019-05-22 14:23:53</td><td>4</td><td>14508276.0</td><td>7340032.0</td></tr>
<tr><td>83</td><td>FotG_</td><td>44865a8cb1</td><td>2019-05-14 21:23:53</td><td>15</td><td>837694896.0</td><td>37670850.0</td></tr>
<tr><td>83</td><td>sparklenose</td><td>b76d24a6fd</td><td>2019-05-18 05:13:53</td><td>5</td><td>157286400.0</td><td>8388608.0</td></tr>
<tr><td>82</td><td>SerbianGolem</td><td>89f6577296</td><td>2019-04-11 13:58:53</td><td>11</td><td>200580766.0</td><td>8611536.0</td></tr>
<tr><td>79</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2019-05-22 14:23:53</td><td>1</td><td>110336388.0</td><td>6260730.0</td></tr>
<tr><td>78</td><td>Gaiseric-1</td><td>eac919aed5</td><td>2019-05-22 08:03:53</td><td>10</td><td>145338860.0</td><td>41943040.0</td></tr>
<tr><td>75</td><td>fuchur2</td><td>312d46498d</td><td>2019-05-22 14:23:53</td><td>13</td><td>1058118041.0</td><td>21951638.0</td></tr>
<tr><td>72</td><td>Flaci75</td><td>6d31161d92</td><td>2019-05-19 10:38:53</td><td>3</td><td>95386016.0</td><td>3119552.0</td></tr>
<tr><td>68</td><td>Neuroxt310</td><td>c7352345d6</td><td>2019-03-09 00:33:53</td><td>4</td><td>16462194.0</td><td>8775168.0</td></tr>
<tr><td>67</td><td>Fuzzy Golem 3</td><td>f74fc3f305</td><td>2019-04-19 12:33:53</td><td>3</td><td>781773344.0</td><td>6290006.0</td></tr>
<tr><td>67</td><td>GolemDarkKnight</td><td>33e9149c9c</td><td>2019-05-22 14:23:53</td><td>3</td><td>234686636.0</td><td>6291456.0</td></tr>
<tr><td>64</td><td>Egon</td><td>77ed38f798</td><td>2019-05-11 13:38:53</td><td>11</td><td>276441864.0</td><td>12508500.0</td></tr>
<tr><td>63</td><td>Elizabeth</td><td>3e54698dce</td><td>2019-02-02 10:32:15</td><td>2</td><td>725474168.0</td><td>5093570.0</td></tr>
<tr><td>60</td><td>DK13</td><td>356626023e</td><td>2019-02-20 09:42:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>60</td><td>DK6</td><td>e6ab95ae5a</td><td>2019-04-03 20:58:53</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>60</td><td>dsd-build</td><td>898df9f449</td><td>2019-05-14 16:23:53</td><td>2</td><td>440401920.0</td><td>16777216.0</td></tr>
<tr><td>56</td><td>DK12</td><td>6bf6602ed9</td><td>2019-02-21 20:57:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>56</td><td>Chorae</td><td>14d6d5dfb0</td><td>2019-05-14 11:03:53</td><td>4</td><td>1048576.0</td><td>3145728.0</td></tr>
<tr><td>52</td><td>klopsknoedel</td><td>c82b9e2435</td><td>2019-02-22 18:52:15</td><td>6</td><td>94371840.0</td><td>9387834.0</td></tr>
<tr><td>50</td><td>HomePC w10</td><td>21c1954eb1</td><td>2019-03-10 06:23:53</td><td>4</td><td>1048576.0</td><td>8388608.0</td></tr>
<tr><td>49</td><td>MMX99</td><td>6d24d6189a</td><td>2019-05-04 05:23:53</td><td>10</td><td>62914560.0</td><td>10485760.0</td></tr>
<tr><td>46</td><td>ciumete</td><td>8283860bb8</td><td>2019-05-22 07:43:53</td><td>6</td><td>12871684.0</td><td>33554432.0</td></tr>
<tr><td>45</td><td>DK8</td><td>fc09208d6f</td><td>2019-03-30 10:38:53</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>45</td><td>macgyver</td><td>4e92f89baa</td><td>2019-05-22 14:23:53</td><td>9</td><td>17442536.0</td><td>9437184.0</td></tr>

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
      <tr><td scope='row'>294</td><td>aussiemark</td><td>de002b1df0</td><td>2019-05-22 14:23:53</td><td>3</td><td>208104856.0</td><td>6045042.0</td></tr>
<tr><td>258</td><td>DK1</td><td>bfba7469f4</td><td>2019-05-22 14:23:53</td><td>3</td><td>78236468.0</td><td>8912896.0</td></tr>
<tr><td>243</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2019-05-22 14:23:53</td><td>1</td><td>110336388.0</td><td>6260730.0</td></tr>
<tr><td>212</td><td>austinav1</td><td>c1b1592c16</td><td>2019-02-17 19:27:15</td><td>2</td><td>262144000.0</td><td>6291456.0</td></tr>
<tr><td>204</td><td>DiamondGolem</td><td>09fd5d0bd6</td><td>2019-05-19 17:03:53</td><td>2</td><td>21542999.0</td><td>11523777.0</td></tr>
<tr><td>201</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2019-05-22 14:23:53</td><td>3</td><td>144122508.0</td><td>3071204.0</td></tr>
<tr><td>183</td><td>DK17</td><td>629439ff3a</td><td>2019-03-14 10:23:53</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>178</td><td>Fat80y</td><td>3599f32da4</td><td>2019-03-02 17:03:53</td><td>6</td><td>73682386.0</td><td>12505725.0</td></tr>
<tr><td>159</td><td>waffledonkey2003</td><td>be7e5eec73</td><td>2019-04-19 18:08:53</td><td>12</td><td>57671680.0</td><td>10485760.0</td></tr>
<tr><td>156</td><td>DK27</td><td>7a81a0207e</td><td>2019-02-22 20:37:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>156</td><td>DK22</td><td>f5785c737f</td><td>2019-02-22 21:42:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>156</td><td>Marco V</td><td>0966aa3842</td><td>2019-05-22 14:23:53</td><td>3</td><td>631912968.0</td><td>6237810.0</td></tr>
<tr><td>154</td><td>DK25</td><td>f14b7a141a</td><td>2019-02-22 20:37:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>148</td><td>DK5</td><td>58d5956491</td><td>2019-02-22 20:42:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>143</td><td>DK6</td><td>e6ab95ae5a</td><td>2019-04-03 20:58:53</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>140</td><td>Free-Range Comp.</td><td>071f76c528</td><td>2019-04-09 23:13:53</td><td>3</td><td>668744376.0</td><td>5767168.0</td></tr>
<tr><td>133</td><td>Zoey</td><td>a517033a35</td><td>2019-02-08 05:02:15</td><td>2</td><td>354418688.0</td><td>8178578.0</td></tr>
<tr><td>131</td><td>DK11</td><td>e0f6876a75</td><td>2019-02-21 20:57:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>131</td><td>superluis018</td><td>2cb753e34e</td><td>2019-05-22 14:23:53</td><td>3</td><td>78643200.0</td><td>8388608.0</td></tr>
<tr><td>128</td><td>GM</td><td>f97856d3c2</td><td>2019-05-22 14:23:53</td><td>1</td><td>54050552.0</td><td>3145728.0</td></tr>
<tr><td>126</td><td>DK20</td><td>31a2601e02</td><td>2019-02-22 21:42:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>122</td><td>vehsak</td><td>e79bc084c9</td><td>2019-03-28 13:18:53</td><td>1</td><td>31457280.0</td><td>4194304.0</td></tr>
<tr><td>111</td><td>abcdefyyy</td><td>f57cfbf9b3</td><td>2019-05-22 14:23:53</td><td>3</td><td>4281764.0</td><td>4194304.0</td></tr>
<tr><td>110</td><td>DK18</td><td>b37d4a4ad2</td><td>2019-03-13 18:28:53</td><td>3</td><td>34630624.0</td><td>8912896.0</td></tr>
<tr><td>109</td><td>snakelips</td><td>e0d04800ab</td><td>2019-01-23 18:32:15</td><td>7</td><td>1048576.0</td><td>2894748.0</td></tr>
<tr><td>104</td><td>lordvader</td><td>eab55fea11</td><td>2019-05-22 14:23:53</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>101</td><td>moon0</td><td>c298c45088</td><td>2019-02-15 00:12:15</td><td>1</td><td>32505856.0</td><td>12479472.0</td></tr>
<tr><td>101</td><td>BitCryptic-Bal1</td><td>a731e91723</td><td>2019-05-22 14:23:53</td><td>1</td><td>1048576.0</td><td>5708574.0</td></tr>
<tr><td>99</td><td>tj&e_funkotron</td><td>fee60b3ef3</td><td>2019-02-01 00:07:15</td><td>3</td><td>1048576.0</td><td>6291456.0</td></tr>
<tr><td>98</td><td>DK23</td><td>bcae614d6a</td><td>2019-02-22 21:42:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>95</td><td>DK16</td><td>cae4745f9d</td><td>2019-03-14 00:43:53</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>94</td><td>xeqres</td><td>c01a28b851</td><td>2019-05-22 14:23:53</td><td>3</td><td>1048576.0</td><td>5242880.0</td></tr>
<tr><td>89</td><td></td><td>892d074702</td><td>2019-01-09 01:07:15</td><td>21</td><td>787915267.0</td><td>143435771.0</td></tr>
<tr><td>83</td><td>Loki23_Golem</td><td>aa62bc6250</td><td>2019-04-05 04:18:53</td><td>15</td><td>214293312.0</td><td>56615220.0</td></tr>
<tr><td>82</td><td>Pacifica01</td><td>157f3260a4</td><td>2019-05-22 14:23:53</td><td>3</td><td>52428800.0</td><td>6037578.0</td></tr>
<tr><td>81</td><td>cryptohnode1</td><td>efb810bac8</td><td>2019-04-06 11:03:53</td><td>39</td><td>266446912.0</td><td>2986422.0</td></tr>
<tr><td>78</td><td>Vie'</td><td>890f3267c3</td><td>2019-04-14 00:18:53</td><td>2</td><td>2268442.0</td><td>4378110.0</td></tr>
<tr><td>78</td><td>vrbros</td><td>f18d2d83f7</td><td>2019-05-22 14:23:53</td><td>3</td><td>36869512.0</td><td>12491186.0</td></tr>
<tr><td>76</td><td>Dinkum</td><td>b7597b678c</td><td>2019-05-22 14:23:53</td><td>4</td><td>8912896.0</td><td>8628256.0</td></tr>
<tr><td>74</td><td>grunt</td><td>0022abe511</td><td>2019-01-14 19:42:15</td><td>7</td><td>1048576.0</td><td>12503772.0</td></tr>
<tr><td>74</td><td>DonsDell</td><td>bfbd973bfd</td><td>2019-05-22 14:23:53</td><td>5</td><td>658529094.0</td><td>14120542.0</td></tr>
<tr><td>72</td><td>DK26</td><td>1c6c008734</td><td>2019-02-27 20:43:53</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>72</td><td>Pro Grade</td><td>3258c0b410</td><td>2019-05-22 14:23:53</td><td>11</td><td>140277716.0</td><td>10485760.0</td></tr>
<tr><td>70</td><td>Durin2</td><td>b9340eeb6d</td><td>2019-03-07 12:28:53</td><td>1</td><td>52428800.0</td><td>5242880.0</td></tr>
<tr><td>70</td><td>DEDICATEDfastSSD</td><td>d3849667d4</td><td>2019-03-17 19:58:53</td><td>2</td><td>228417232.0</td><td>9983450.0</td></tr>
<tr><td>70</td><td>macgyver</td><td>4e92f89baa</td><td>2019-05-22 14:23:53</td><td>9</td><td>17442536.0</td><td>9437184.0</td></tr>
<tr><td>69</td><td>bigarmsbiggut12</td><td>f080031296</td><td>2019-05-22 14:23:53</td><td>2</td><td>17418500.0</td><td>4955690.0</td></tr>
<tr><td>65</td><td>Wakanda</td><td>d37ca109b8</td><td>2019-05-19 22:23:53</td><td>9</td><td>101234204.0</td><td>11292544.0</td></tr>
<tr><td>65</td><td>Vicente</td><td>0d3c417e55</td><td>2019-05-22 11:23:53</td><td>6</td><td>472540832.0</td><td>11219762.0</td></tr>
<tr><td>65</td><td>golemnode587394</td><td>036671814f</td><td>2019-05-22 14:23:53</td><td>3</td><td>1048576.0</td><td>5737484.0</td></tr>

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
      <tr><td scope='row'>1372</td><td>ImALumberJack</td><td>839b655694</td><td>2019-05-22 14:23:53</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr>
<tr><td>1178</td><td>TastyDoe</td><td>1f8e0cdf90</td><td>2019-05-22 14:23:53</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>1006</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2019-05-22 14:23:53</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>986</td><td>fzhut</td><td>efc9be5e59</td><td>2019-05-22 14:23:53</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>175</td><td>kascheri12</td><td>656778299a</td><td>2019-03-03 08:38:53</td><td>7</td><td>83886080.0</td><td>6291456.0</td></tr>
<tr><td>15</td><td>vm win 0.18.2</td><td>a8242a7e35</td><td>2019-02-08 09:37:15</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>15</td><td>Golem Grid</td><td>5323f4daae</td><td>2019-02-20 04:37:15</td><td>3</td><td>1048576.0</td><td>12319080.0</td></tr>
<tr><td>13</td><td>Szadok</td><td>6015c9f98f</td><td>2019-05-20 12:08:53</td><td>5</td><td>44786688.0</td><td>19377684.0</td></tr>
<tr><td>11</td><td>vm linux</td><td>ac201342cf</td><td>2019-03-05 10:03:53</td><td>3</td><td>45553560.0</td><td>12301490.0</td></tr>
<tr><td>11</td><td>macsourcezmija</td><td>e593c8c41e</td><td>2019-05-22 14:23:53</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>
<tr><td>11</td><td>Golemgrid.com M</td><td>b870aca6d7</td><td>2019-05-22 14:23:53</td><td>3</td><td>353414780.0</td><td>16785728.0</td></tr>
<tr><td>10</td><td>vm linux 0.18.2</td><td>ed13e4d451</td><td>2019-02-21 09:47:15</td><td>1</td><td>2097152.0</td><td>2097152.0</td></tr>
<tr><td>9</td><td>Bad Wolf</td><td>9d5cb6e59b</td><td>2019-04-12 08:38:53</td><td>3</td><td>131843112.0</td><td>12490148.0</td></tr>
<tr><td>9</td><td>Daniel</td><td>2b9b24dabc</td><td>2019-04-26 07:43:53</td><td>7</td><td>1048576.0</td><td>9329706.0</td></tr>

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
      <tr><td scope='row'>826</td><td>fzhut</td><td>efc9be5e59</td><td>2019-05-22 14:23:53</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>532</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2019-05-22 14:23:53</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>504</td><td>ImALumberJack</td><td>839b655694</td><td>2019-05-22 14:23:53</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr>
<tr><td>453</td><td>TastyDoe</td><td>1f8e0cdf90</td><td>2019-05-22 14:23:53</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>174</td><td>kascheri12</td><td>656778299a</td><td>2019-03-03 08:38:53</td><td>7</td><td>83886080.0</td><td>6291456.0</td></tr>
<tr><td>10</td><td>Golem Grid</td><td>5323f4daae</td><td>2019-02-20 04:37:15</td><td>3</td><td>1048576.0</td><td>12319080.0</td></tr>
<tr><td>10</td><td>vm linux</td><td>ac201342cf</td><td>2019-03-05 10:03:53</td><td>3</td><td>45553560.0</td><td>12301490.0</td></tr>
<tr><td>9</td><td>Daniel</td><td>2b9b24dabc</td><td>2019-04-26 07:43:53</td><td>7</td><td>1048576.0</td><td>9329706.0</td></tr>
<tr><td>9</td><td>Szadok</td><td>6015c9f98f</td><td>2019-05-20 12:08:53</td><td>5</td><td>44786688.0</td><td>19377684.0</td></tr>
<tr><td>9</td><td>macsourcezmija</td><td>e593c8c41e</td><td>2019-05-22 14:23:53</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>
<tr><td>8</td><td>vm linux 0.18.2</td><td>ed13e4d451</td><td>2019-02-21 09:47:15</td><td>1</td><td>2097152.0</td><td>2097152.0</td></tr>
<tr><td>8</td><td>Bad Wolf</td><td>9d5cb6e59b</td><td>2019-04-12 08:38:53</td><td>3</td><td>131843112.0</td><td>12490148.0</td></tr>
<tr><td>7</td><td>2rec ubuntu</td><td>2rec</td><td>2018-12-14 03:17:28</td><td>7</td><td>360567792.0</td><td>12212628.0</td></tr>
<tr><td>7</td><td>vm win 0.18.2</td><td>a8242a7e35</td><td>2019-02-08 09:37:15</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>7</td><td>vm golem 0.19.1</td><td>b869b4e7c5</td><td>2019-05-22 11:08:53</td><td>3</td><td>18979225.0</td><td>12582036.0</td></tr>
<tr><td>7</td><td>vm linux</td><td>8c6c3bcb42</td><td>2019-05-22 11:33:53</td><td>3</td><td>39442168.0</td><td>12268338.0</td></tr>
<tr><td>6</td><td>vm win 0.19.0</td><td>67e3fb8bb0</td><td>2019-04-04 09:38:53</td><td>3</td><td>28507264.0</td><td>12582036.0</td></tr>

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
      <tr><td scope='row'>130</td><td>fzhut</td><td>efc9be5e59</td><td>2019-05-22 14:23:53</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>61</td><td>ImALumberJack</td><td>839b655694</td><td>2019-05-22 14:23:53</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr>
<tr><td>45</td><td>TastyDoe</td><td>1f8e0cdf90</td><td>2019-05-22 14:23:53</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>37</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2019-05-22 14:23:53</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>17</td><td>kascheri12</td><td>656778299a</td><td>2019-03-03 08:38:53</td><td>7</td><td>83886080.0</td><td>6291456.0</td></tr>
<tr><td>7</td><td>2rec ubuntu</td><td>2rec</td><td>2018-12-14 03:17:28</td><td>7</td><td>360567792.0</td><td>12212628.0</td></tr>
<tr><td>7</td><td>Golem Grid</td><td>5323f4daae</td><td>2019-02-20 04:37:15</td><td>3</td><td>1048576.0</td><td>12319080.0</td></tr>
<tr><td>7</td><td>vm linux</td><td>ac201342cf</td><td>2019-03-05 10:03:53</td><td>3</td><td>45553560.0</td><td>12301490.0</td></tr>
<tr><td>6</td><td>Szadok</td><td>6015c9f98f</td><td>2019-05-20 12:08:53</td><td>5</td><td>44786688.0</td><td>19377684.0</td></tr>
<tr><td>6</td><td>macsourcezmija</td><td>e593c8c41e</td><td>2019-05-22 14:23:53</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>
<tr><td>5</td><td>vm win 0.18.2</td><td>a8242a7e35</td><td>2019-02-08 09:37:15</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>5</td><td>vm win k</td><td>856c29ef90</td><td>2019-02-20 05:42:15</td><td>3</td><td>21421412.0</td><td>12582036.0</td></tr>
<tr><td>4</td><td>vm sierra 0.18.2</td><td>87c038c829</td><td>2018-12-20 06:57:28</td><td>1</td><td>2097152.0</td><td>5242880.0</td></tr>
<tr><td>4</td><td>vm win 0.19.0</td><td>67e3fb8bb0</td><td>2019-04-04 09:38:53</td><td>3</td><td>28507264.0</td><td>12582036.0</td></tr>
<tr><td>4</td><td>vm linux 0.19.0</td><td>2199dd6957</td><td>2019-04-05 05:08:53</td><td>3</td><td>46736756.0</td><td>12301484.0</td></tr>

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
<tr><td>63</td><td></td><td>34bf695cea</td><td>2018-12-25 16:07:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>f5f643d260</td><td>2018-12-25 16:07:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td></td><td>5ad7765acc</td><td>2018-12-25 16:07:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td>golem1</td><td>c2490a5ce2</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>b1c26f12ab</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td></td><td>7e3cea8a91</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td>ice_miner_0</td><td>d5dc1c4738</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td></td><td>57ce921b99</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>1af8bd40c3</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td>ionserver</td><td>6fd381a5e8</td><td>2018-12-28 04:22:28</td><td>44</td><td>663748608.0</td><td>73400320.0</td></tr>
<tr><td>63</td><td>socrates</td><td>0941fd2329</td><td>2019-01-14 06:52:15</td><td>63</td><td>1610612736.0</td><td>99013776.0</td></tr>
<tr><td>63</td><td>kleon</td><td>a74fbbc815</td><td>2019-01-14 06:52:15</td><td>63</td><td>1610612736.0</td><td>99013779.0</td></tr>
<tr><td>63</td><td>ionserver</td><td>3e0609df46</td><td>2019-01-16 12:02:15</td><td>46</td><td>665845760.0</td><td>73400320.0</td></tr>
<tr><td>63</td><td>KERVOS</td><td>e24275e714</td><td>2019-01-17 00:42:15</td><td>63</td><td>1610612736.0</td><td>99013776.0</td></tr>
<tr><td>63</td><td>ioassembly-62core-1</td><td>21d1cda599</td><td>2019-01-29 17:07:15</td><td>62</td><td>1048576.0</td><td>24702936.0</td></tr>
<tr><td>63</td><td>ioassembly-62core-2</td><td>f1bea36319</td><td>2019-01-29 17:07:15</td><td>62</td><td>1048576.0</td><td>24702936.0</td></tr>
<tr><td>63</td><td>ionsever</td><td>b195c247f2</td><td>2019-02-15 06:42:15</td><td>46</td><td>342884352.0</td><td>78643200.0</td></tr>
<tr><td>63</td><td>ionserver</td><td>b120bec9ae</td><td>2019-02-17 11:32:15</td><td>63</td><td>1048576.0</td><td>98989092.0</td></tr>
<tr><td>63</td><td>ionserver1</td><td>caee242ea8</td><td>2019-04-16 04:03:53</td><td>61</td><td>783286272.0</td><td>85773516.0</td></tr>
<tr><td>63</td><td>icegolem1</td><td>eaf84d23d7</td><td>2019-05-22 14:23:53</td><td>63</td><td>23681284.0</td><td>24123278.0</td></tr>
<tr><td>63</td><td>icegolem3</td><td>e725b1e229</td><td>2019-05-22 14:23:53</td><td>63</td><td>26750880.0</td><td>24123278.0</td></tr>
<tr><td>63</td><td>icegolem4</td><td>a77b7f4b2b</td><td>2019-05-22 14:23:53</td><td>63</td><td>26750880.0</td><td>24123278.0</td></tr>
<tr><td>63</td><td>icegolem2</td><td>d90d730df1</td><td>2019-05-22 14:23:53</td><td>63</td><td>21824172.0</td><td>24123278.0</td></tr>
<tr><td>63</td><td>icegolem5</td><td>49c8de8086</td><td>2019-05-22 14:23:53</td><td>63</td><td>26750868.0</td><td>24123278.0</td></tr>
<tr><td>39</td><td>Terminator 420</td><td>165a7ae218</td><td>2019-01-21 19:47:15</td><td>4</td><td>165675008.0</td><td>10485760.0</td></tr>
<tr><td>39</td><td>cryptohnode1</td><td>efb810bac8</td><td>2019-04-06 11:03:53</td><td>39</td><td>266446912.0</td><td>2986422.0</td></tr>
<tr><td>35</td><td>jm667</td><td>07f6cc3da0</td><td>2019-04-13 16:18:53</td><td>35</td><td>421427812.0</td><td>12079068.0</td></tr>
<tr><td>34</td><td>davidgolem</td><td>78ed208862</td><td>2019-05-22 14:23:53</td><td>34</td><td>834560724.0</td><td>44040192.0</td></tr>
<tr><td>32</td><td>Castillos</td><td>8f9e9681c0</td><td>2019-01-22 06:52:15</td><td>32</td><td>146885868.0</td><td>13910617.0</td></tr>
<tr><td>32</td><td>Baker14</td><td>25e811deac</td><td>2019-01-29 05:17:15</td><td>26</td><td>335544320.0</td><td>41943040.0</td></tr>
<tr><td>32</td><td></td><td>8549f4b359</td><td>2019-05-17 10:28:53</td><td>32</td><td>412547764.0</td><td>25064046.0</td></tr>
<tr><td>32</td><td>KOW4G02</td><td>fefade7675</td><td>2019-05-22 14:23:53</td><td>10</td><td>31515148.0</td><td>50331648.0</td></tr>

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
