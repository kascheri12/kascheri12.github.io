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
  gauge1.set(0.8367); // set actual value
  gauge1.setTextField(document.getElementById('span_gauge_percent_change_subtasks_success_past_day'),3);
  
  var gauge2 = new Gauge(target2).setOptions(opts2); // create sexy gauge!
  gauge2.maxValue = 50; // set max gauge value
  gauge2.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge2.animationSpeed = 10; // set animation speed (32 is default value)
  gauge2.set(-8.5616); // set actual value
  gauge2.setTextField(document.getElementById('span_gauge_percent_change_subtasks_timeout_past_day'),3);
  
  var gauge3 = new Gauge(target3).setOptions(opts3); // create sexy gauge!
  gauge3.maxValue = 50; // set max gauge value
  gauge3.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge3.animationSpeed = 10; // set animation speed (32 is default value)
  gauge3.set(1.7880); // set actual value
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
      <tr><td scope='row'>2020-07-01</td><td>151488</td><td>0.8367</td><td>5874</td><td>-8.5616</td><td>3131</td><td>1.7880</td></tr>
<tr><td>2020-06-30</td><td>150231</td><td>-9.3973</td><td>6424</td><td>-0.2020</td><td>3076</td><td>-4.2937</td></tr>
<tr><td>2020-06-29</td><td>165813</td><td>-12.1241</td><td>6437</td><td>-11.2505</td><td>3214</td><td>-3.4255</td></tr>
<tr><td>2020-06-28</td><td>188690</td><td>-0.5607</td><td>7253</td><td>6.5208</td><td>3328</td><td>-7.6325</td></tr>
<tr><td>2020-06-27</td><td>189754</td><td>1.0356</td><td>6809</td><td>2.6070</td><td>3603</td><td>-3.0148</td></tr>
<tr><td>2020-06-26</td><td>187809</td><td>-1.6753</td><td>6636</td><td>-10.1300</td><td>3715</td><td>-0.4555</td></tr>
<tr><td>2020-06-25</td><td>191009</td><td>7.7236</td><td>7384</td><td>7.5288</td><td>3732</td><td>-3.0901</td></tr>
<tr><td>2020-06-24</td><td>177314</td><td>-11.2063</td><td>6867</td><td>-9.8701</td><td>3851</td><td>-1.2817</td></tr>
<tr><td>2020-06-23</td><td>199692</td><td>-0.1750</td><td>7619</td><td>-5.4480</td><td>3901</td><td>3.6397</td></tr>
<tr><td>2020-06-22</td><td>200042</td><td>6.5464</td><td>8058</td><td>-6.6389</td><td>3764</td><td>1.4829</td></tr>
<tr><td>2020-06-21</td><td>187751</td><td>0.2504</td><td>8631</td><td>-0.5072</td><td>3709</td><td>15.5452</td></tr>
<tr><td>2020-06-20</td><td>187282</td><td>-7.9958</td><td>8675</td><td>0.1270</td><td>3210</td><td>-11.0557</td></tr>
<tr><td>2020-06-19</td><td>203558</td><td>0.7459</td><td>8664</td><td>-11.0107</td><td>3609</td><td>-4.0415</td></tr>
<tr><td>2020-06-18</td><td>202051</td><td>-0.2882</td><td>9736</td><td>11.9466</td><td>3761</td><td>-8.4469</td></tr>
<tr><td>2020-06-17</td><td>202635</td><td>-9.1547</td><td>8697</td><td>-14.6851</td><td>4108</td><td>-17.0604</td></tr>
<tr><td>2020-06-16</td><td>223055</td><td>10.5239</td><td>10194</td><td>11.8990</td><td>4953</td><td>9.4586</td></tr>
<tr><td>2020-06-15</td><td>201816</td><td>-8.6061</td><td>9110</td><td>-1.6623</td><td>4525</td><td>-9.1548</td></tr>
<tr><td>2020-06-14</td><td>220820</td><td>1.3019</td><td>9264</td><td>3.2776</td><td>4981</td><td>0.5856</td></tr>
<tr><td>2020-06-13</td><td>217982</td><td>7.2788</td><td>8970</td><td>-0.3665</td><td>4952</td><td>4.2965</td></tr>
<tr><td>2020-06-12</td><td>203192</td><td>-4.0334</td><td>9003</td><td>-3.5978</td><td>4748</td><td>-2.1233</td></tr>

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
      <tr><td scope='row'>9408</td><td>Node-ByZohaib</td><td>eb4732ff31</td><td>2020-06-30 12:27:24</td><td>14</td><td>3432012.0</td><td>12279022.0</td></tr>
<tr><td>9125</td><td>M1</td><td>55ebf62911</td><td>2020-07-01 05:07:24</td><td>14</td><td>5242880.0</td><td>16777216.0</td></tr>
<tr><td>8658</td><td>The Bonejack</td><td>dac26852e2</td><td>2020-06-20 08:22:24</td><td>13</td><td>107269324.0</td><td>20971520.0</td></tr>
<tr><td>8206</td><td>Zootopia</td><td>87f1bdc964</td><td>2020-07-01 05:07:24</td><td>27</td><td>50063612.0</td><td>12294654.0</td></tr>
<tr><td>8037</td><td>BoSox9</td><td>24eb4e2c1f</td><td>2020-07-01 05:07:24</td><td>12</td><td>27262976.0</td><td>10485760.0</td></tr>
<tr><td>7499</td><td>tiger-zoo</td><td>258ab76a7c</td><td>2020-07-01 05:07:24</td><td>27</td><td>6851832.0</td><td>9219276.0</td></tr>
<tr><td>7209</td><td>Liesse</td><td>d28760e78d</td><td>2019-11-02 13:04:17</td><td>14</td><td>43027968.0</td><td>5452594.0</td></tr>
<tr><td>6813</td><td>W0RSCHD</td><td>e977f6866f</td><td>2020-03-28 09:19:17</td><td>4</td><td>53057945.0</td><td>10485760.0</td></tr>
<tr><td>6726</td><td>GoodJobBestPrice</td><td>bfced6f558</td><td>2020-06-24 01:42:24</td><td>3</td><td>6711340.0</td><td>3011940.0</td></tr>
<tr><td>6607</td><td>MS-7B24</td><td>683b230386</td><td>2020-07-01 05:07:24</td><td>5</td><td>317521464.0</td><td>35546726.0</td></tr>
<tr><td>6537</td><td>abcdefyyy</td><td>f57cfbf9b3</td><td>2020-07-01 05:07:24</td><td>3</td><td>11534336.0</td><td>4194304.0</td></tr>
<tr><td>6282</td><td>coduyen</td><td>3bf155f147</td><td>2020-02-09 18:14:17</td><td>11</td><td>80219984.0</td><td>36700160.0</td></tr>
<tr><td>6159</td><td>(Anonymous)</td><td>d843dfd5a8</td><td>2020-04-22 15:47:24</td><td>7</td><td>143658892.0</td><td>11058252.0</td></tr>
<tr><td>6097</td><td>tintirimintiri</td><td>6cb35353d1</td><td>2020-07-01 05:07:24</td><td>14</td><td>42699756.0</td><td>18471398.0</td></tr>
<tr><td>5863</td><td>M2</td><td>9783f12b91</td><td>2020-07-01 05:07:24</td><td>1</td><td>15728640.0</td><td>12582912.0</td></tr>
<tr><td>5838</td><td>vuSa8Ri</td><td>da7980a71a</td><td>2020-07-01 05:07:24</td><td>7</td><td>390539608.0</td><td>24501074.0</td></tr>
<tr><td>5789</td><td>The_Bras_Node</td><td>873bd46534</td><td>2020-06-29 11:57:24</td><td>5</td><td>39127764.0</td><td>11668068.0</td></tr>
<tr><td>5681</td><td>Tobi Voos</td><td>f4ae245446</td><td>2020-06-27 11:47:24</td><td>6</td><td>17648740.0</td><td>11125148.0</td></tr>
<tr><td>5553</td><td>DonsDell</td><td>bfbd973bfd</td><td>2020-06-30 08:17:24</td><td>5</td><td>658529094.0</td><td>14120542.0</td></tr>
<tr><td>5490</td><td>xeqres</td><td>c01a28b851</td><td>2020-07-01 05:07:24</td><td>3</td><td>1048576.0</td><td>5242880.0</td></tr>
<tr><td>5387</td><td>DedoGolem</td><td>364fd5af24</td><td>2020-07-01 05:07:24</td><td>22</td><td>53372518.0</td><td>16777216.0</td></tr>
<tr><td>5211</td><td>obad-hai</td><td>dc6942cfa6</td><td>2020-07-01 05:07:24</td><td>7</td><td>1048576.0</td><td>6130620.0</td></tr>
<tr><td>5057</td><td>spliffstar-macos</td><td>5015bfd932</td><td>2020-01-09 00:34:17</td><td>3</td><td>305846972.0</td><td>9437184.0</td></tr>
<tr><td>4767</td><td>ciumete</td><td>8283860bb8</td><td>2020-07-01 05:07:24</td><td>6</td><td>18503328.0</td><td>33554432.0</td></tr>
<tr><td>4614</td><td>Pacifica01</td><td>157f3260a4</td><td>2020-06-23 23:57:24</td><td>2</td><td>8388608.0</td><td>4718592.0</td></tr>
<tr><td>4524</td><td>mainich1</td><td>08dfebdc9c</td><td>2019-08-05 06:02:02</td><td>10</td><td>16777216.0</td><td>21810380.0</td></tr>
<tr><td>4515</td><td>MMX99</td><td>6d24d6189a</td><td>2020-06-29 09:22:24</td><td>10</td><td>62914560.0</td><td>10485760.0</td></tr>
<tr><td>4505</td><td>macgyver</td><td>4e92f89baa</td><td>2020-05-15 11:52:24</td><td>9</td><td>26214400.0</td><td>9437184.0</td></tr>
<tr><td>4251</td><td>desktop-torino</td><td>9d4bdceb2c</td><td>2020-06-18 02:52:24</td><td>7</td><td>838853812.0</td><td>12246272.0</td></tr>
<tr><td>4217</td><td>kenadian</td><td>9e36e4be75</td><td>2020-06-30 02:37:24</td><td>2</td><td>22266036.0</td><td>24159190.0</td></tr>
<tr><td>4095</td><td>Threadripper32</td><td>f540fde2b8</td><td>2020-06-10 01:22:24</td><td>31</td><td>8304952.0</td><td>10485760.0</td></tr>
<tr><td>3956</td><td>KRSM17</td><td>b8535af1b2</td><td>2020-07-01 05:07:24</td><td>25</td><td>367001600.0</td><td>33554432.0</td></tr>
<tr><td>3938</td><td>Pacifica02_b</td><td>3bf599d6d3</td><td>2019-08-29 09:12:02</td><td>11</td><td>160432128.0</td><td>16777216.0</td></tr>
<tr><td>3926</td><td>CornDoge</td><td>c39c51a5b7</td><td>2020-06-29 09:22:24</td><td>6</td><td>3145728.0</td><td>6291456.0</td></tr>
<tr><td>3925</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2020-07-01 05:07:24</td><td>7</td><td>110090008.0</td><td>18454936.0</td></tr>
<tr><td>3901</td><td>fuchur2</td><td>312d46498d</td><td>2020-01-11 08:09:17</td><td>13</td><td>1058118041.0</td><td>21951638.0</td></tr>
<tr><td>3878</td><td>plumbus</td><td>611f591f51</td><td>2019-12-11 20:44:17</td><td>6</td><td>52428800.0</td><td>8388608.0</td></tr>
<tr><td>3790</td><td>tempest</td><td>5ad86f3605</td><td>2020-07-01 05:07:24</td><td>11</td><td>81827044.0</td><td>37014732.0</td></tr>
<tr><td>3776</td><td>Zoltar001</td><td>33d0c65813</td><td>2020-05-01 15:32:24</td><td>3</td><td>249620452.0</td><td>12290778.0</td></tr>
<tr><td>3720</td><td>Corgolem</td><td>eb8b06fd37</td><td>2020-06-29 09:17:24</td><td>7</td><td>158085804.0</td><td>25117248.0</td></tr>
<tr><td>3690</td><td>Procrastinator</td><td>719a719bcc</td><td>2019-09-24 00:22:02</td><td>26</td><td>74029465.0</td><td>10485760.0</td></tr>
<tr><td>3637</td><td>Uriel</td><td>1fa11fce44</td><td>2020-06-24 01:52:24</td><td>9</td><td>21181235.0</td><td>20065084.0</td></tr>
<tr><td>3623</td><td>textletter</td><td>5f21cd5b25</td><td>2019-12-15 17:09:17</td><td>9</td><td>156237824.0</td><td>20132658.0</td></tr>
<tr><td>3556</td><td>oncoming storm</td><td>6c15fa96c1</td><td>2020-07-01 05:07:24</td><td>3</td><td>1048576.0</td><td>9903912.0</td></tr>
<tr><td>3443</td><td>teamdir_i7</td><td>e27b1a82c9</td><td>2020-06-27 09:52:24</td><td>6</td><td>936290772.0</td><td>15356148.0</td></tr>
<tr><td>3390</td><td>Kmanstocker</td><td>fc3e5b1b60</td><td>2020-06-29 20:12:24</td><td>3</td><td>389092863.0</td><td>5242880.0</td></tr>
<tr><td>3328</td><td>lordvader</td><td>eab55fea11</td><td>2020-07-01 05:07:24</td><td>3</td><td>55377524.0</td><td>5242880.0</td></tr>
<tr><td>3288</td><td>maco-nodey-1</td><td>51b78ede71</td><td>2020-02-28 16:24:17</td><td>7</td><td>78269596.0</td><td>12582912.0</td></tr>
<tr><td>3269</td><td>GamingPC</td><td>7e6a3047b6</td><td>2020-05-05 20:07:24</td><td>6</td><td>8388608.0</td><td>8388608.0</td></tr>

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
      <tr><td scope='row'>932</td><td>Fuzzy Golem</td><td>06af924c46</td><td>2019-09-07 09:17:02</td><td>5</td><td>60648864.0</td><td>20971520.0</td></tr>
<tr><td>845</td><td>DedoGolem</td><td>364fd5af24</td><td>2020-07-01 05:07:24</td><td>22</td><td>53372518.0</td><td>16777216.0</td></tr>
<tr><td>730</td><td>Skippa-golem</td><td>78d7d62331</td><td>2019-07-21 18:47:02</td><td>7</td><td>1048576.0</td><td>6122186.0</td></tr>
<tr><td>572</td><td>plumbus</td><td>611f591f51</td><td>2019-12-11 20:44:17</td><td>6</td><td>52428800.0</td><td>8388608.0</td></tr>
<tr><td>525</td><td>BoSox9</td><td>24eb4e2c1f</td><td>2020-07-01 05:07:24</td><td>12</td><td>27262976.0</td><td>10485760.0</td></tr>
<tr><td>480</td><td>Linkmark-Hetzner</td><td>6b597b8612</td><td>2020-06-17 22:17:24</td><td>18</td><td>13071384.0</td><td>3026798.0</td></tr>
<tr><td>479</td><td>Gaiseric-1</td><td>eac919aed5</td><td>2020-06-26 17:47:24</td><td>10</td><td>97832140.0</td><td>41943040.0</td></tr>
<tr><td>452</td><td>GolemMultiCore</td><td>735abafcb3</td><td>2019-04-22 15:13:53</td><td>12</td><td>31562137.0</td><td>6291456.0</td></tr>
<tr><td>444</td><td>MS-7B24</td><td>683b230386</td><td>2020-07-01 05:07:24</td><td>5</td><td>317521464.0</td><td>35546726.0</td></tr>
<tr><td>417</td><td>olexiyb</td><td>89cc383411</td><td>2020-01-02 05:39:17</td><td>7</td><td>45746484.0</td><td>25118762.0</td></tr>
<tr><td>364</td><td>cryptodave</td><td>dc068d492b</td><td>2019-08-25 15:07:02</td><td>9</td><td>18835832.0</td><td>10485760.0</td></tr>
<tr><td>355</td><td>(Anonymous)</td><td>d843dfd5a8</td><td>2020-04-22 15:47:24</td><td>7</td><td>143658892.0</td><td>11058252.0</td></tr>
<tr><td>318</td><td>The Bonejack</td><td>dac26852e2</td><td>2020-06-20 08:22:24</td><td>13</td><td>107269324.0</td><td>20971520.0</td></tr>
<tr><td>313</td><td>MaccyD1</td><td>deb4a9c8f0</td><td>2019-05-14 19:43:53</td><td>6</td><td>14026792.0</td><td>5242880.0</td></tr>
<tr><td>311</td><td>arcane99</td><td>f82e5ecb03</td><td>2020-04-22 13:22:24</td><td>7</td><td>1048576.0</td><td>16882072.0</td></tr>
<tr><td>303</td><td>serbit</td><td>ab72ad7294</td><td>2020-05-20 00:22:24</td><td>6</td><td>23034360.0</td><td>7340032.0</td></tr>
<tr><td>295</td><td>MMX99</td><td>6d24d6189a</td><td>2020-06-29 09:22:24</td><td>10</td><td>62914560.0</td><td>10485760.0</td></tr>
<tr><td>276</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2020-06-25 08:57:24</td><td>1</td><td>41662900.0</td><td>6260730.0</td></tr>
<tr><td>264</td><td>samthegolem</td><td>bdb78989b1</td><td>2019-08-18 22:17:02</td><td>3</td><td>313067428.0</td><td>10485760.0</td></tr>
<tr><td>260</td><td>BestXCoreAndGPU</td><td>d7f3fd0e2a</td><td>2020-01-25 00:24:17</td><td>3</td><td>75078041.0</td><td>9193034.0</td></tr>
<tr><td>235</td><td>Fat80y 3</td><td>bcc87a9746</td><td>2019-05-11 00:58:53</td><td>3</td><td>21468996.0</td><td>9382164.0</td></tr>
<tr><td>223</td><td>eggsparkle2</td><td>ad2a22cfc2</td><td>2020-01-04 22:54:17</td><td>7</td><td>1395124.0</td><td>12494480.0</td></tr>
<tr><td>214</td><td>123</td><td>437316f010</td><td>2019-06-20 13:47:02</td><td>2</td><td>96064104.0</td><td>10649904.0</td></tr>
<tr><td>198</td><td>Durin2</td><td>b9340eeb6d</td><td>2020-05-28 12:12:24</td><td>3</td><td>52428800.0</td><td>12085722.0</td></tr>
<tr><td>194</td><td>mainich1</td><td>08dfebdc9c</td><td>2019-08-05 06:02:02</td><td>10</td><td>16777216.0</td><td>21810380.0</td></tr>
<tr><td>193</td><td>abcdefyyy</td><td>f57cfbf9b3</td><td>2020-07-01 05:07:24</td><td>3</td><td>11534336.0</td><td>4194304.0</td></tr>
<tr><td>187</td><td>CornDoge</td><td>c39c51a5b7</td><td>2020-06-29 09:22:24</td><td>6</td><td>3145728.0</td><td>6291456.0</td></tr>
<tr><td>183</td><td>grunt</td><td>0022abe511</td><td>2019-01-14 19:42:15</td><td>7</td><td>1048576.0</td><td>12503772.0</td></tr>
<tr><td>181</td><td>xeon123</td><td>7c0ebb359c</td><td>2020-06-21 14:17:24</td><td>11</td><td>230896435.0</td><td>12478054.0</td></tr>
<tr><td>167</td><td>DK24</td><td>b2483f1942</td><td>2019-02-22 20:37:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>162</td><td>mig-eth</td><td>867f600af6</td><td>2019-09-20 11:52:02</td><td>3</td><td>62989116.0</td><td>12348020.0</td></tr>
<tr><td>159</td><td>desktop-torino</td><td>9d4bdceb2c</td><td>2020-06-18 02:52:24</td><td>7</td><td>838853812.0</td><td>12246272.0</td></tr>
<tr><td>159</td><td>GolemDarkKnight</td><td>33e9149c9c</td><td>2020-06-25 00:37:24</td><td>3</td><td>305452588.0</td><td>6291456.0</td></tr>
<tr><td>158</td><td>Xurce</td><td>88b7696013</td><td>2019-09-09 00:17:02</td><td>8</td><td>19922944.0</td><td>10485760.0</td></tr>
<tr><td>154</td><td>hood</td><td>225c4925b5</td><td>2020-04-19 15:39:17</td><td>11</td><td>1048576.0</td><td>49476062.0</td></tr>
<tr><td>152</td><td>orgWasm</td><td>b4d6421943</td><td>2020-06-10 04:17:24</td><td>7</td><td>314572800.0</td><td>12582912.0</td></tr>
<tr><td>149</td><td>Sivir</td><td>f61c8405ba</td><td>2020-05-31 00:12:24</td><td>3</td><td>1048576.0</td><td>9397436.0</td></tr>
<tr><td>149</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2020-07-01 05:07:24</td><td>7</td><td>110090008.0</td><td>18454936.0</td></tr>
<tr><td>140</td><td>EyeIsBoss</td><td>6bbeb79e20</td><td>2019-07-09 14:42:02</td><td>7</td><td>627685696.0</td><td>25137618.0</td></tr>
<tr><td>138</td><td>Vicente</td><td>0d3c417e55</td><td>2020-05-26 10:07:24</td><td>7</td><td>406724616.0</td><td>12317724.0</td></tr>
<tr><td>129</td><td>GolemNerd-GPU</td><td>879093baed</td><td>2019-04-30 23:48:53</td><td>1</td><td>1048576.0</td><td>5887620.0</td></tr>
<tr><td>124</td><td>Nexus</td><td>a3564f7685</td><td>2019-12-13 09:19:17</td><td>7</td><td>31457280.0</td><td>10485760.0</td></tr>
<tr><td>119</td><td>SGS_Gol</td><td>73cb7b5daf</td><td>2020-06-24 22:52:24</td><td>10</td><td>105172172.0</td><td>11848908.0</td></tr>
<tr><td>117</td><td>original</td><td>c60d9a9246</td><td>2020-01-02 16:24:17</td><td>3</td><td>84858801.0</td><td>18824778.0</td></tr>
<tr><td>115</td><td>mine</td><td>d4545af398</td><td>2019-05-22 15:08:53</td><td>7</td><td>1048576.0</td><td>9290799.0</td></tr>
<tr><td>114</td><td>Katznode</td><td>b4fdf00b27</td><td>2019-01-05 02:57:15</td><td>5</td><td>13408537.0</td><td>4951305.0</td></tr>
<tr><td>111</td><td>FrankinStineNode</td><td>c867218fae</td><td>2019-03-01 19:33:53</td><td>2</td><td>119560982.0</td><td>4194304.0</td></tr>
<tr><td>109</td><td>mrkmerc</td><td>2e00892ac8</td><td>2020-02-17 18:59:17</td><td>3</td><td>67825596.0</td><td>15627434.0</td></tr>
<tr><td>106</td><td>Natgolem1</td><td>b9a06cad67</td><td>2019-09-21 21:17:02</td><td>3</td><td>13107200.0</td><td>6205260.0</td></tr>
<tr><td>101</td><td>lordvader</td><td>eab55fea11</td><td>2020-07-01 05:07:24</td><td>3</td><td>55377524.0</td><td>5242880.0</td></tr>

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
      <tr><td scope='row'>775</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2020-06-25 08:57:24</td><td>1</td><td>41662900.0</td><td>6260730.0</td></tr>
<tr><td>592</td><td>DiamondGolem</td><td>09fd5d0bd6</td><td>2020-07-01 04:42:24</td><td>1</td><td>21542999.0</td><td>9097758.0</td></tr>
<tr><td>545</td><td>BitCryptic-Bal1</td><td>a731e91723</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>5708354.0</td></tr>
<tr><td>503</td><td>DK1</td><td>bfba7469f4</td><td>2020-06-19 01:37:24</td><td>3</td><td>28244540.0</td><td>8912896.0</td></tr>
<tr><td>426</td><td>abcdefyyy</td><td>f57cfbf9b3</td><td>2020-07-01 05:07:24</td><td>3</td><td>11534336.0</td><td>4194304.0</td></tr>
<tr><td>367</td><td>Random</td><td>3599f32da4</td><td>2020-01-02 09:49:17</td><td>7</td><td>52308328.0</td><td>12478054.0</td></tr>
<tr><td>358</td><td>Marco V</td><td>0966aa3842</td><td>2020-06-27 10:37:24</td><td>3</td><td>628941716.0</td><td>6237810.0</td></tr>
<tr><td>337</td><td>GM</td><td>f97856d3c2</td><td>2020-01-08 13:34:17</td><td>1</td><td>137973256.0</td><td>3145728.0</td></tr>
<tr><td>334</td><td>Pacifica01</td><td>157f3260a4</td><td>2020-06-23 23:57:24</td><td>2</td><td>8388608.0</td><td>4718592.0</td></tr>
<tr><td>306</td><td>xeqres</td><td>c01a28b851</td><td>2020-07-01 05:07:24</td><td>3</td><td>1048576.0</td><td>5242880.0</td></tr>
<tr><td>294</td><td>aussiemark</td><td>de002b1df0</td><td>2019-08-11 01:02:02</td><td>3</td><td>177018776.0</td><td>6045042.0</td></tr>
<tr><td>294</td><td>ImALumberJack</td><td>839b655694</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>24709718.0</td></tr>
<tr><td>251</td><td>lordvader</td><td>eab55fea11</td><td>2020-07-01 05:07:24</td><td>3</td><td>55377524.0</td><td>5242880.0</td></tr>
<tr><td>236</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2020-07-01 05:07:24</td><td>7</td><td>110090008.0</td><td>18454936.0</td></tr>
<tr><td>235</td><td>whodunnit</td><td>fbd13c89e0</td><td>2020-07-01 05:07:24</td><td>4</td><td>53896806.0</td><td>6291456.0</td></tr>
<tr><td>234</td><td>Kmanstocker</td><td>fc3e5b1b60</td><td>2020-06-29 20:12:24</td><td>3</td><td>389092863.0</td><td>5242880.0</td></tr>
<tr><td>233</td><td>Corgolem1</td><td>40f70bf407</td><td>2020-07-01 05:07:24</td><td>1</td><td>14743672.0</td><td>5980032.0</td></tr>
<tr><td>233</td><td>superluis018</td><td>2cb753e34e</td><td>2020-07-01 05:07:24</td><td>3</td><td>25165824.0</td><td>7340032.0</td></tr>
<tr><td>229</td><td>JMHnode</td><td>07a87d17ad</td><td>2020-06-30 22:02:24</td><td>2</td><td>110113484.0</td><td>5242880.0</td></tr>
<tr><td>225</td><td>M2</td><td>9783f12b91</td><td>2020-07-01 05:07:24</td><td>1</td><td>15728640.0</td><td>12582912.0</td></tr>
<tr><td>212</td><td>austinav1</td><td>c1b1592c16</td><td>2019-02-17 19:27:15</td><td>2</td><td>262144000.0</td><td>6291456.0</td></tr>
<tr><td>210</td><td></td><td>8c6b3222ea</td><td>2020-06-24 12:47:24</td><td>1</td><td>8063556.0</td><td>1526628.0</td></tr>
<tr><td>204</td><td>Corgolem2</td><td>d199ae507c</td><td>2020-07-01 05:07:24</td><td>1</td><td>16505960.0</td><td>5980038.0</td></tr>
<tr><td>202</td><td>(Anonymous)</td><td>d843dfd5a8</td><td>2020-04-22 15:47:24</td><td>7</td><td>143658892.0</td><td>11058252.0</td></tr>
<tr><td>190</td><td>London-essex</td><td>5034ff18ae</td><td>2019-09-20 17:27:02</td><td>3</td><td>281834196.0</td><td>6291456.0</td></tr>
<tr><td>188</td><td>Skynet41</td><td>c94f4c6be6</td><td>2020-06-12 15:17:24</td><td>3</td><td>10485760.0</td><td>6231756.0</td></tr>
<tr><td>185</td><td>Pro Grade</td><td>3258c0b410</td><td>2020-04-06 17:44:17</td><td>11</td><td>106393440.0</td><td>10485760.0</td></tr>
<tr><td>185</td><td>Lilaschwarz</td><td>5c141cff47</td><td>2020-04-17 21:29:17</td><td>5</td><td>125249170.0</td><td>12506264.0</td></tr>
<tr><td>184</td><td>golemnode587394</td><td>036671814f</td><td>2020-07-01 05:07:24</td><td>3</td><td>1048576.0</td><td>5737500.0</td></tr>
<tr><td>183</td><td>DK17</td><td>629439ff3a</td><td>2019-03-14 10:23:53</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>176</td><td>teamdir_amd</td><td>4d994fed55</td><td>2020-06-30 23:52:24</td><td>2</td><td>286043080.0</td><td>6125654.0</td></tr>
<tr><td>175</td><td>Austinav1</td><td>a69dd45786</td><td>2020-03-04 04:04:17</td><td>2</td><td>12423672.0</td><td>5242880.0</td></tr>
<tr><td>174</td><td>GoodJobBestPrice</td><td>bfced6f558</td><td>2020-06-24 01:42:24</td><td>3</td><td>6711340.0</td><td>3011940.0</td></tr>
<tr><td>172</td><td>TastyDoe</td><td>1f8e0cdf90</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>168</td><td></td><td>47c0a89a0a</td><td>2019-10-30 05:34:17</td><td>7</td><td>83899520.0</td><td>12519254.0</td></tr>
<tr><td>168</td><td>DaSSiMac</td><td>b8eaf9b957</td><td>2020-05-28 00:47:24</td><td>2</td><td>142758900.0</td><td>8388608.0</td></tr>
<tr><td>164</td><td>macgyver</td><td>4e92f89baa</td><td>2020-05-15 11:52:24</td><td>9</td><td>26214400.0</td><td>9437184.0</td></tr>
<tr><td>162</td><td>kenadian</td><td>9e36e4be75</td><td>2020-06-30 02:37:24</td><td>2</td><td>22266036.0</td><td>24159190.0</td></tr>
<tr><td>159</td><td>waffledonkey2003</td><td>be7e5eec73</td><td>2019-04-19 18:08:53</td><td>12</td><td>57671680.0</td><td>10485760.0</td></tr>
<tr><td>159</td><td>Dinkum</td><td>b7597b678c</td><td>2019-11-02 02:09:17</td><td>3</td><td>1338102.0</td><td>6252360.0</td></tr>
<tr><td>158</td><td>DonsDell</td><td>bfbd973bfd</td><td>2020-06-30 08:17:24</td><td>5</td><td>658529094.0</td><td>14120542.0</td></tr>
<tr><td>156</td><td>DK27</td><td>7a81a0207e</td><td>2019-02-22 20:37:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>156</td><td>DK22</td><td>f5785c737f</td><td>2019-02-22 21:42:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>154</td><td>DK25</td><td>f14b7a141a</td><td>2019-02-22 20:37:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>150</td><td>vehsak</td><td>e79bc084c9</td><td>2020-02-13 20:49:17</td><td>2</td><td>1048576.0</td><td>4194304.0</td></tr>
<tr><td>149</td><td>bigarmsbiggut12</td><td>f080031296</td><td>2020-07-01 05:07:24</td><td>2</td><td>26961276.0</td><td>4955690.0</td></tr>
<tr><td>148</td><td>DK5</td><td>58d5956491</td><td>2019-02-22 20:42:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>148</td><td>The_Bras_Node</td><td>873bd46534</td><td>2020-06-29 11:57:24</td><td>5</td><td>39127764.0</td><td>11668068.0</td></tr>

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
      <tr><td scope='row'>1415</td><td>fzhut</td><td>efc9be5e59</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>1372</td><td>ImALumberJack</td><td>839b655694</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>24709718.0</td></tr>
<tr><td>1178</td><td>TastyDoe</td><td>1f8e0cdf90</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>1006</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>175</td><td>kascheri12</td><td>656778299a</td><td>2019-03-03 08:38:53</td><td>7</td><td>83886080.0</td><td>6291456.0</td></tr>
<tr><td>28</td><td>vlk17</td><td>cf55366659</td><td>2020-06-16 02:37:24</td><td>3</td><td>1048576.0</td><td>12212928.0</td></tr>
<tr><td>27</td><td>macsourcezmija</td><td>e593c8c41e</td><td>2019-07-31 03:12:02</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>

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
      <tr><td scope='row'>1019</td><td>fzhut</td><td>efc9be5e59</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>691</td><td>ImALumberJack</td><td>839b655694</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>24709718.0</td></tr>
<tr><td>629</td><td>TastyDoe</td><td>1f8e0cdf90</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>581</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>174</td><td>kascheri12</td><td>656778299a</td><td>2019-03-03 08:38:53</td><td>7</td><td>83886080.0</td><td>6291456.0</td></tr>
<tr><td>28</td><td>vlk17</td><td>cf55366659</td><td>2020-06-16 02:37:24</td><td>3</td><td>1048576.0</td><td>12212928.0</td></tr>
<tr><td>22</td><td>macsourcezmija</td><td>e593c8c41e</td><td>2019-07-31 03:12:02</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>

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
      <tr><td scope='row'>130</td><td>fzhut</td><td>efc9be5e59</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>105</td><td>ImALumberJack</td><td>839b655694</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>24709718.0</td></tr>
<tr><td>85</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>79</td><td>TastyDoe</td><td>1f8e0cdf90</td><td>2020-07-01 05:07:24</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>22</td><td>macsourcezmija</td><td>e593c8c41e</td><td>2019-07-31 03:12:02</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>
<tr><td>17</td><td>kascheri12</td><td>656778299a</td><td>2019-03-03 08:38:53</td><td>7</td><td>83886080.0</td><td>6291456.0</td></tr>
<tr><td>13</td><td>linzmija</td><td>b3c80ffe72</td><td>2020-03-21 05:44:17</td><td>1</td><td>19615860.0</td><td>1526546.0</td></tr>
<tr><td>12</td><td>vm linux 19.2</td><td>bc2e959fc9</td><td>2019-07-11 07:02:02</td><td>3</td><td>46465400.0</td><td>12301476.0</td></tr>

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
<tr><td>71</td><td></td><td>ffd990c57b</td><td>2019-07-13 17:47:02</td><td>71</td><td>321062728.0</td><td>396189518.0</td></tr>
<tr><td>71</td><td>72Cores512GB</td><td>111f19e622</td><td>2019-07-18 18:47:02</td><td>71</td><td>885778900.0</td><td>396189374.0</td></tr>
<tr><td>67</td><td></td><td>787315b3f7</td><td>2019-06-23 11:12:02</td><td>67</td><td>233299960.0</td><td>11534630.0</td></tr>
<tr><td>64</td><td>str</td><td>40d9bd011b</td><td>2020-06-21 06:37:24</td><td>1</td><td>127170036.0</td><td>6126456.0</td></tr>
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
<tr><td>63</td><td>ice_miner_0</td><td>d5dc1c4738</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td></td><td>b1c26f12ab</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td></td><td>57ce921b99</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>7e3cea8a91</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td></td><td>1af8bd40c3</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td>golem1</td><td>c2490a5ce2</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td>ionserver</td><td>6fd381a5e8</td><td>2018-12-28 04:22:28</td><td>44</td><td>663748608.0</td><td>73400320.0</td></tr>
<tr><td>63</td><td>socrates</td><td>0941fd2329</td><td>2019-01-14 06:52:15</td><td>63</td><td>1610612736.0</td><td>99013776.0</td></tr>
<tr><td>63</td><td>kleon</td><td>a74fbbc815</td><td>2019-01-14 06:52:15</td><td>63</td><td>1610612736.0</td><td>99013779.0</td></tr>
<tr><td>63</td><td>ionserver</td><td>3e0609df46</td><td>2019-01-16 12:02:15</td><td>46</td><td>665845760.0</td><td>73400320.0</td></tr>
<tr><td>63</td><td>KERVOS</td><td>e24275e714</td><td>2019-01-17 00:42:15</td><td>63</td><td>1610612736.0</td><td>99013776.0</td></tr>
<tr><td>63</td><td>ionsever</td><td>b195c247f2</td><td>2019-02-15 06:42:15</td><td>46</td><td>342884352.0</td><td>78643200.0</td></tr>
<tr><td>63</td><td>ionserver</td><td>b120bec9ae</td><td>2019-02-17 11:32:15</td><td>63</td><td>1048576.0</td><td>98989092.0</td></tr>
<tr><td>63</td><td>ionserver1</td><td>caee242ea8</td><td>2019-04-16 04:03:53</td><td>61</td><td>783286272.0</td><td>85773516.0</td></tr>
<tr><td>63</td><td>icegolem2</td><td>d90d730df1</td><td>2019-09-03 12:07:02</td><td>63</td><td>21824172.0</td><td>24123278.0</td></tr>
<tr><td>63</td><td>icegolem5</td><td>49c8de8086</td><td>2019-09-03 12:07:02</td><td>63</td><td>26750868.0</td><td>24123278.0</td></tr>
<tr><td>63</td><td>icegolem3</td><td>e725b1e229</td><td>2019-09-03 12:07:02</td><td>63</td><td>26750880.0</td><td>24123278.0</td></tr>
<tr><td>63</td><td>ioassembly-62core-1</td><td>21d1cda599</td><td>2019-09-13 19:02:02</td><td>62</td><td>1048576.0</td><td>24702888.0</td></tr>
<tr><td>63</td><td>ioassembly-62core-2</td><td>f1bea36319</td><td>2019-09-13 19:02:02</td><td>62</td><td>1048576.0</td><td>24702936.0</td></tr>
<tr><td>63</td><td>icegolem1</td><td>eaf84d23d7</td><td>2019-09-24 15:12:02</td><td>63</td><td>23681284.0</td><td>24123278.0</td></tr>
<tr><td>63</td><td>icegolem4</td><td>a77b7f4b2b</td><td>2019-10-26 09:34:17</td><td>63</td><td>26750880.0</td><td>24123278.0</td></tr>
<tr><td>63</td><td>billou</td><td>3e7dc969db</td><td>2020-03-06 10:44:17</td><td>63</td><td>1680659844.0</td><td>197905928.0</td></tr>
<tr><td>63</td><td></td><td>b5b58d40ee</td><td>2020-04-23 13:37:24</td><td>63</td><td>254783112.0</td><td>377697818.0</td></tr>
<tr><td>63</td><td>Crusher(64 core)</td><td>b57f3aa761</td><td>2020-07-01 05:07:24</td><td>63</td><td>167277880.0</td><td>36700160.0</td></tr>
<tr><td>48</td><td>gigatron</td><td>f71bb6a3fe</td><td>2020-01-30 07:39:17</td><td>47</td><td>60617148.0</td><td>24604632.0</td></tr>

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
