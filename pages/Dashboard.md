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
  gauge1.set(1.1090); // set actual value
  gauge1.setTextField(document.getElementById('span_gauge_percent_change_subtasks_success_past_day'),3);
  
  var gauge2 = new Gauge(target2).setOptions(opts2); // create sexy gauge!
  gauge2.maxValue = 50; // set max gauge value
  gauge2.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge2.animationSpeed = 10; // set animation speed (32 is default value)
  gauge2.set(0.2337); // set actual value
  gauge2.setTextField(document.getElementById('span_gauge_percent_change_subtasks_timeout_past_day'),3);
  
  var gauge3 = new Gauge(target3).setOptions(opts3); // create sexy gauge!
  gauge3.maxValue = 50; // set max gauge value
  gauge3.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge3.animationSpeed = 10; // set animation speed (32 is default value)
  gauge3.set(-7.5316); // set actual value
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
      <tr><td scope='row'>2020-05-20</td><td>222913</td><td>1.1090</td><td>8579</td><td>0.2337</td><td>4469</td><td>-7.5316</td></tr>
<tr><td>2020-05-19</td><td>220468</td><td>1.5724</td><td>8559</td><td>-8.1061</td><td>4833</td><td>-0.5965</td></tr>
<tr><td>2020-05-18</td><td>217055</td><td>-3.6395</td><td>9314</td><td>-2.2563</td><td>4862</td><td>-5.4821</td></tr>
<tr><td>2020-05-17</td><td>225253</td><td>14.1041</td><td>9529</td><td>18.4757</td><td>5144</td><td>12.2409</td></tr>
<tr><td>2020-05-16</td><td>197410</td><td>-6.0516</td><td>8043</td><td>-6.7803</td><td>4583</td><td>5.5748</td></tr>
<tr><td>2020-05-15</td><td>210126</td><td>-1.2064</td><td>8628</td><td>-2.6075</td><td>4341</td><td>27.2274</td></tr>
<tr><td>2020-05-14</td><td>212692</td><td>5.7690</td><td>8859</td><td>3.0476</td><td>3412</td><td>-16.2905</td></tr>
<tr><td>2020-05-13</td><td>201091</td><td>2.1887</td><td>8597</td><td>-3.7182</td><td>4076</td><td>-7.1949</td></tr>
<tr><td>2020-05-12</td><td>196784</td><td>1.5214</td><td>8929</td><td>6.0829</td><td>4392</td><td>7.3052</td></tr>
<tr><td>2020-05-11</td><td>193835</td><td>-9.8119</td><td>8417</td><td>-3.3750</td><td>4093</td><td>-14.6580</td></tr>
<tr><td>2020-05-10</td><td>214923</td><td>7.1465</td><td>8711</td><td>5.9990</td><td>4796</td><td>15.0948</td></tr>
<tr><td>2020-05-09</td><td>200588</td><td>-2.5818</td><td>8218</td><td>-0.6408</td><td>4167</td><td>-12.5315</td></tr>
<tr><td>2020-05-08</td><td>205904</td><td>-0.0660</td><td>8271</td><td>-4.7559</td><td>4764</td><td>-0.4181</td></tr>
<tr><td>2020-05-07</td><td>206040</td><td>-2.1968</td><td>8684</td><td>-1.5420</td><td>4784</td><td>1.3130</td></tr>
<tr><td>2020-05-06</td><td>210668</td><td>-0.1204</td><td>8820</td><td>16.3588</td><td>4722</td><td>16.6502</td></tr>
<tr><td>2020-05-05</td><td>210922</td><td>5.6242</td><td>7580</td><td>-12.5317</td><td>4048</td><td>6.8356</td></tr>
<tr><td>2020-05-04</td><td>199691</td><td>-6.2431</td><td>8666</td><td>2.9583</td><td>3789</td><td>-14.6814</td></tr>
<tr><td>2020-05-03</td><td>212988</td><td>7.2544</td><td>8417</td><td>2.9602</td><td>4441</td><td>6.8318</td></tr>
<tr><td>2020-05-02</td><td>198582</td><td>-1.8175</td><td>8175</td><td>1.0382</td><td>4157</td><td>-3.7063</td></tr>
<tr><td>2020-05-01</td><td>202258</td><td>-1.2644</td><td>8091</td><td>-2.1763</td><td>4317</td><td>-7.6380</td></tr>

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
      <tr><td scope='row'>9201</td><td>Node-ByZohaib</td><td>eb4732ff31</td><td>2020-04-10 13:24:17</td><td>14</td><td>3432012.0</td><td>12279022.0</td></tr>
<tr><td>8679</td><td>M1</td><td>55ebf62911</td><td>2020-05-20 10:17:24</td><td>14</td><td>10485760.0</td><td>16777216.0</td></tr>
<tr><td>8386</td><td>The Bonejack</td><td>dac26852e2</td><td>2020-05-20 10:17:24</td><td>13</td><td>107269324.0</td><td>20971520.0</td></tr>
<tr><td>8149</td><td>Zootopia</td><td>87f1bdc964</td><td>2020-05-20 10:17:24</td><td>27</td><td>56533896.0</td><td>12294668.0</td></tr>
<tr><td>7840</td><td>BoSox9</td><td>24eb4e2c1f</td><td>2020-05-20 10:17:24</td><td>12</td><td>27262976.0</td><td>10485760.0</td></tr>
<tr><td>7452</td><td>tiger-zoo</td><td>258ab76a7c</td><td>2020-05-20 10:17:24</td><td>27</td><td>11613184.0</td><td>9219278.0</td></tr>
<tr><td>7209</td><td>Liesse</td><td>d28760e78d</td><td>2019-11-02 13:04:17</td><td>14</td><td>43027968.0</td><td>5452594.0</td></tr>
<tr><td>6813</td><td>W0RSCHD</td><td>e977f6866f</td><td>2020-03-28 09:19:17</td><td>4</td><td>53057945.0</td><td>10485760.0</td></tr>
<tr><td>6642</td><td>GoodJobBestPrice</td><td>bfced6f558</td><td>2020-05-20 10:17:24</td><td>3</td><td>9126724.0</td><td>3011952.0</td></tr>
<tr><td>6607</td><td>MS-7B24</td><td>683b230386</td><td>2020-05-20 10:17:24</td><td>5</td><td>318347673.0</td><td>35546726.0</td></tr>
<tr><td>6328</td><td>abcdefyyy</td><td>f57cfbf9b3</td><td>2020-05-20 10:17:24</td><td>3</td><td>11534336.0</td><td>4194304.0</td></tr>
<tr><td>6282</td><td>coduyen</td><td>3bf155f147</td><td>2020-02-09 18:14:17</td><td>11</td><td>80219984.0</td><td>36700160.0</td></tr>
<tr><td>6159</td><td>(Anonymous)</td><td>d843dfd5a8</td><td>2020-04-22 15:47:24</td><td>7</td><td>143658892.0</td><td>11058252.0</td></tr>
<tr><td>5994</td><td>tintirimintiri</td><td>6cb35353d1</td><td>2020-05-20 10:17:24</td><td>14</td><td>42699756.0</td><td>18471398.0</td></tr>
<tr><td>5838</td><td>vuSa8Ri</td><td>da7980a71a</td><td>2020-05-20 10:17:24</td><td>7</td><td>390539608.0</td><td>24501090.0</td></tr>
<tr><td>5735</td><td>The_Bras_Node</td><td>873bd46534</td><td>2020-05-20 10:17:24</td><td>5</td><td>39127764.0</td><td>11668068.0</td></tr>
<tr><td>5636</td><td>Tobi Voos</td><td>f4ae245446</td><td>2020-05-16 19:37:24</td><td>6</td><td>19125792.0</td><td>11125148.0</td></tr>
<tr><td>5594</td><td>M2</td><td>9783f12b91</td><td>2020-05-20 10:17:24</td><td>1</td><td>15728640.0</td><td>12582912.0</td></tr>
<tr><td>5426</td><td>xeqres</td><td>c01a28b851</td><td>2020-05-20 10:17:24</td><td>3</td><td>1048576.0</td><td>5242880.0</td></tr>
<tr><td>5367</td><td>DonsDell</td><td>bfbd973bfd</td><td>2020-05-20 10:17:24</td><td>5</td><td>658529094.0</td><td>14120542.0</td></tr>
<tr><td>5194</td><td>DedoGolem</td><td>364fd5af24</td><td>2020-05-20 10:17:24</td><td>22</td><td>53372518.0</td><td>16777216.0</td></tr>
<tr><td>5193</td><td>obad-hai</td><td>dc6942cfa6</td><td>2020-05-20 10:17:24</td><td>7</td><td>1048576.0</td><td>6130620.0</td></tr>
<tr><td>5057</td><td>spliffstar-macos</td><td>5015bfd932</td><td>2020-01-09 00:34:17</td><td>3</td><td>305846972.0</td><td>9437184.0</td></tr>
<tr><td>4676</td><td>ciumete</td><td>8283860bb8</td><td>2020-05-20 10:17:24</td><td>6</td><td>28604444.0</td><td>33554432.0</td></tr>
<tr><td>4524</td><td>mainich1</td><td>08dfebdc9c</td><td>2019-08-05 06:02:02</td><td>10</td><td>16777216.0</td><td>21810380.0</td></tr>
<tr><td>4505</td><td>macgyver</td><td>4e92f89baa</td><td>2020-05-15 11:52:24</td><td>9</td><td>26214400.0</td><td>9437184.0</td></tr>
<tr><td>4478</td><td>Pacifica01</td><td>157f3260a4</td><td>2020-05-20 10:17:24</td><td>2</td><td>8388608.0</td><td>4718592.0</td></tr>
<tr><td>4391</td><td>MMX99</td><td>6d24d6189a</td><td>2020-05-20 10:17:24</td><td>10</td><td>62914560.0</td><td>10485760.0</td></tr>
<tr><td>4251</td><td>l3t0l</td><td>9d4bdceb2c</td><td>2020-05-20 10:17:24</td><td>4</td><td>600679452.0</td><td>12167970.0</td></tr>
<tr><td>4151</td><td>kenadian</td><td>9e36e4be75</td><td>2020-05-18 11:32:24</td><td>3</td><td>36924848.0</td><td>25165824.0</td></tr>
<tr><td>3938</td><td>Pacifica02_b</td><td>3bf599d6d3</td><td>2019-08-29 09:12:02</td><td>11</td><td>160432128.0</td><td>16777216.0</td></tr>
<tr><td>3909</td><td>Shedhead</td><td>c39c51a5b7</td><td>2020-05-17 12:22:24</td><td>6</td><td>3145728.0</td><td>6291456.0</td></tr>
<tr><td>3901</td><td>fuchur2</td><td>312d46498d</td><td>2020-01-11 08:09:17</td><td>13</td><td>1058118041.0</td><td>21951638.0</td></tr>
<tr><td>3878</td><td>plumbus</td><td>611f591f51</td><td>2019-12-11 20:44:17</td><td>6</td><td>52428800.0</td><td>8388608.0</td></tr>
<tr><td>3776</td><td>Zoltar001</td><td>33d0c65813</td><td>2020-05-01 15:32:24</td><td>3</td><td>249620452.0</td><td>12290778.0</td></tr>
<tr><td>3740</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2020-05-20 10:17:24</td><td>7</td><td>110100480.0</td><td>16777216.0</td></tr>
<tr><td>3690</td><td>Procrastinator</td><td>719a719bcc</td><td>2019-09-24 00:22:02</td><td>26</td><td>74029465.0</td><td>10485760.0</td></tr>
<tr><td>3640</td><td>tempest</td><td>5ad86f3605</td><td>2020-05-20 10:17:24</td><td>11</td><td>81827044.0</td><td>37014732.0</td></tr>
<tr><td>3623</td><td>textletter</td><td>5f21cd5b25</td><td>2019-12-15 17:09:17</td><td>9</td><td>156237824.0</td><td>20132658.0</td></tr>
<tr><td>3550</td><td>Threadripper32</td><td>f540fde2b8</td><td>2020-05-20 10:17:24</td><td>31</td><td>8304952.0</td><td>10485760.0</td></tr>
<tr><td>3544</td><td>Uriel</td><td>1fa11fce44</td><td>2020-05-20 10:17:24</td><td>9</td><td>21181235.0</td><td>20065084.0</td></tr>
<tr><td>3529</td><td>oncoming storm</td><td>6c15fa96c1</td><td>2020-05-20 05:17:24</td><td>3</td><td>4667096.0</td><td>9903912.0</td></tr>
<tr><td>3443</td><td>teamdir_i7</td><td>e27b1a82c9</td><td>2020-05-20 10:17:24</td><td>7</td><td>913740304.0</td><td>15357714.0</td></tr>
<tr><td>3415</td><td>Corgolem</td><td>eb8b06fd37</td><td>2020-05-20 10:17:24</td><td>7</td><td>207169816.0</td><td>25117248.0</td></tr>
<tr><td>3400</td><td>KRSM17</td><td>b8535af1b2</td><td>2020-05-20 10:17:24</td><td>25</td><td>367001600.0</td><td>33554432.0</td></tr>
<tr><td>3340</td><td>Kmanstocker</td><td>fc3e5b1b60</td><td>2020-05-20 10:17:24</td><td>3</td><td>389092863.0</td><td>5242880.0</td></tr>
<tr><td>3307</td><td>lordvader</td><td>eab55fea11</td><td>2020-05-20 10:17:24</td><td>3</td><td>59233976.0</td><td>5242880.0</td></tr>
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
<tr><td>843</td><td>DedoGolem</td><td>364fd5af24</td><td>2020-05-20 10:17:24</td><td>22</td><td>53372518.0</td><td>16777216.0</td></tr>
<tr><td>730</td><td>Skippa-golem</td><td>78d7d62331</td><td>2019-07-21 18:47:02</td><td>7</td><td>1048576.0</td><td>6122186.0</td></tr>
<tr><td>572</td><td>plumbus</td><td>611f591f51</td><td>2019-12-11 20:44:17</td><td>6</td><td>52428800.0</td><td>8388608.0</td></tr>
<tr><td>516</td><td>BoSox9</td><td>24eb4e2c1f</td><td>2020-05-20 10:17:24</td><td>12</td><td>27262976.0</td><td>10485760.0</td></tr>
<tr><td>452</td><td>GolemMultiCore</td><td>735abafcb3</td><td>2019-04-22 15:13:53</td><td>12</td><td>31562137.0</td><td>6291456.0</td></tr>
<tr><td>452</td><td>Linkmark-Hetzner</td><td>6b597b8612</td><td>2020-05-19 00:47:24</td><td>18</td><td>22489492.0</td><td>3026796.0</td></tr>
<tr><td>444</td><td>MS-7B24</td><td>683b230386</td><td>2020-05-20 10:17:24</td><td>5</td><td>318347673.0</td><td>35546726.0</td></tr>
<tr><td>442</td><td>Gaiseric-1</td><td>eac919aed5</td><td>2020-05-08 17:02:24</td><td>10</td><td>97832140.0</td><td>41943040.0</td></tr>
<tr><td>417</td><td>olexiyb</td><td>89cc383411</td><td>2020-01-02 05:39:17</td><td>7</td><td>45746484.0</td><td>25118762.0</td></tr>
<tr><td>364</td><td>cryptodave</td><td>dc068d492b</td><td>2019-08-25 15:07:02</td><td>9</td><td>18835832.0</td><td>10485760.0</td></tr>
<tr><td>355</td><td>(Anonymous)</td><td>d843dfd5a8</td><td>2020-04-22 15:47:24</td><td>7</td><td>143658892.0</td><td>11058252.0</td></tr>
<tr><td>318</td><td>The Bonejack</td><td>dac26852e2</td><td>2020-05-20 10:17:24</td><td>13</td><td>107269324.0</td><td>20971520.0</td></tr>
<tr><td>313</td><td>MaccyD1</td><td>deb4a9c8f0</td><td>2019-05-14 19:43:53</td><td>6</td><td>14026792.0</td><td>5242880.0</td></tr>
<tr><td>311</td><td>arcane99</td><td>f82e5ecb03</td><td>2020-04-22 13:22:24</td><td>7</td><td>1048576.0</td><td>16882072.0</td></tr>
<tr><td>303</td><td>serbit</td><td>ab72ad7294</td><td>2020-05-20 00:22:24</td><td>6</td><td>23034360.0</td><td>7340032.0</td></tr>
<tr><td>295</td><td>MMX99</td><td>6d24d6189a</td><td>2020-05-20 10:17:24</td><td>10</td><td>62914560.0</td><td>10485760.0</td></tr>
<tr><td>264</td><td>samthegolem</td><td>bdb78989b1</td><td>2019-08-18 22:17:02</td><td>3</td><td>313067428.0</td><td>10485760.0</td></tr>
<tr><td>260</td><td>BestXCoreAndGPU</td><td>d7f3fd0e2a</td><td>2020-01-25 00:24:17</td><td>3</td><td>75078041.0</td><td>9193034.0</td></tr>
<tr><td>242</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2020-05-20 10:17:24</td><td>1</td><td>34876192.0</td><td>6205482.0</td></tr>
<tr><td>235</td><td>Fat80y 3</td><td>bcc87a9746</td><td>2019-05-11 00:58:53</td><td>3</td><td>21468996.0</td><td>9382164.0</td></tr>
<tr><td>223</td><td>eggsparkle2</td><td>ad2a22cfc2</td><td>2020-01-04 22:54:17</td><td>7</td><td>1395124.0</td><td>12494480.0</td></tr>
<tr><td>214</td><td>123</td><td>437316f010</td><td>2019-06-20 13:47:02</td><td>2</td><td>96064104.0</td><td>10649904.0</td></tr>
<tr><td>198</td><td>Durin2</td><td>b9340eeb6d</td><td>2020-04-22 23:22:24</td><td>3</td><td>52428800.0</td><td>12085724.0</td></tr>
<tr><td>194</td><td>mainich1</td><td>08dfebdc9c</td><td>2019-08-05 06:02:02</td><td>10</td><td>16777216.0</td><td>21810380.0</td></tr>
<tr><td>190</td><td>abcdefyyy</td><td>f57cfbf9b3</td><td>2020-05-20 10:17:24</td><td>3</td><td>11534336.0</td><td>4194304.0</td></tr>
<tr><td>187</td><td>Shedhead</td><td>c39c51a5b7</td><td>2020-05-17 12:22:24</td><td>6</td><td>3145728.0</td><td>6291456.0</td></tr>
<tr><td>183</td><td>grunt</td><td>0022abe511</td><td>2019-01-14 19:42:15</td><td>7</td><td>1048576.0</td><td>12503772.0</td></tr>
<tr><td>167</td><td>DK24</td><td>b2483f1942</td><td>2019-02-22 20:37:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>162</td><td>mig-eth</td><td>867f600af6</td><td>2019-09-20 11:52:02</td><td>3</td><td>62989116.0</td><td>12348020.0</td></tr>
<tr><td>159</td><td>l3t0l</td><td>9d4bdceb2c</td><td>2020-05-20 10:17:24</td><td>4</td><td>600679452.0</td><td>12167970.0</td></tr>
<tr><td>158</td><td>Xurce</td><td>88b7696013</td><td>2019-09-09 00:17:02</td><td>8</td><td>19922944.0</td><td>10485760.0</td></tr>
<tr><td>154</td><td>hood</td><td>225c4925b5</td><td>2020-04-19 15:39:17</td><td>11</td><td>1048576.0</td><td>49476062.0</td></tr>
<tr><td>152</td><td>xeon123</td><td>7c0ebb359c</td><td>2020-05-15 04:07:24</td><td>11</td><td>230896435.0</td><td>12478054.0</td></tr>
<tr><td>152</td><td>orgWasm</td><td>b4d6421943</td><td>2020-05-20 10:17:24</td><td>7</td><td>314572800.0</td><td>12582912.0</td></tr>
<tr><td>149</td><td>Sivir</td><td>f61c8405ba</td><td>2019-12-13 22:44:17</td><td>3</td><td>1048576.0</td><td>9397436.0</td></tr>
<tr><td>149</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2020-05-20 10:17:24</td><td>7</td><td>110100480.0</td><td>16777216.0</td></tr>
<tr><td>140</td><td>EyeIsBoss</td><td>6bbeb79e20</td><td>2019-07-09 14:42:02</td><td>7</td><td>627685696.0</td><td>25137618.0</td></tr>
<tr><td>138</td><td>Vicente</td><td>0d3c417e55</td><td>2020-04-05 10:49:17</td><td>7</td><td>409351424.0</td><td>12317724.0</td></tr>
<tr><td>129</td><td>GolemNerd-GPU</td><td>879093baed</td><td>2019-04-30 23:48:53</td><td>1</td><td>1048576.0</td><td>5887620.0</td></tr>
<tr><td>124</td><td>Nexus</td><td>a3564f7685</td><td>2019-12-13 09:19:17</td><td>7</td><td>31457280.0</td><td>10485760.0</td></tr>
<tr><td>117</td><td>original</td><td>c60d9a9246</td><td>2020-01-02 16:24:17</td><td>3</td><td>84858801.0</td><td>18824778.0</td></tr>
<tr><td>115</td><td>mine</td><td>d4545af398</td><td>2019-05-22 15:08:53</td><td>7</td><td>1048576.0</td><td>9290799.0</td></tr>
<tr><td>114</td><td>Katznode</td><td>b4fdf00b27</td><td>2019-01-05 02:57:15</td><td>5</td><td>13408537.0</td><td>4951305.0</td></tr>
<tr><td>112</td><td>SGS_Gol</td><td>73cb7b5daf</td><td>2020-05-20 08:37:24</td><td>10</td><td>105172172.0</td><td>11848908.0</td></tr>
<tr><td>111</td><td>FrankinStineNode</td><td>c867218fae</td><td>2019-03-01 19:33:53</td><td>2</td><td>119560982.0</td><td>4194304.0</td></tr>
<tr><td>109</td><td>mrkmerc</td><td>2e00892ac8</td><td>2020-02-17 18:59:17</td><td>3</td><td>67825596.0</td><td>15627434.0</td></tr>
<tr><td>106</td><td>Natgolem1</td><td>b9a06cad67</td><td>2019-09-21 21:17:02</td><td>3</td><td>13107200.0</td><td>6205260.0</td></tr>
<tr><td>104</td><td>GolemDarkKnight</td><td>33e9149c9c</td><td>2020-05-12 23:27:24</td><td>3</td><td>305452588.0</td><td>6291456.0</td></tr>
<tr><td>101</td><td>lordvader</td><td>eab55fea11</td><td>2020-05-20 10:17:24</td><td>3</td><td>59233976.0</td><td>5242880.0</td></tr>

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
      <tr><td scope='row'>747</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2020-05-20 10:17:24</td><td>1</td><td>34876192.0</td><td>6205482.0</td></tr>
<tr><td>578</td><td>DiamondGolem</td><td>09fd5d0bd6</td><td>2020-05-19 05:02:24</td><td>1</td><td>21542999.0</td><td>9097758.0</td></tr>
<tr><td>544</td><td>BitCryptic-Bal1</td><td>a731e91723</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>5708366.0</td></tr>
<tr><td>502</td><td>DK1</td><td>bfba7469f4</td><td>2019-07-24 01:47:02</td><td>3</td><td>27907708.0</td><td>8912896.0</td></tr>
<tr><td>417</td><td>abcdefyyy</td><td>f57cfbf9b3</td><td>2020-05-20 10:17:24</td><td>3</td><td>11534336.0</td><td>4194304.0</td></tr>
<tr><td>367</td><td>Random</td><td>3599f32da4</td><td>2020-01-02 09:49:17</td><td>7</td><td>52308328.0</td><td>12478054.0</td></tr>
<tr><td>358</td><td>Marco V</td><td>0966aa3842</td><td>2020-05-20 08:37:24</td><td>3</td><td>627544440.0</td><td>6237810.0</td></tr>
<tr><td>337</td><td>GM</td><td>f97856d3c2</td><td>2020-01-08 13:34:17</td><td>1</td><td>137973256.0</td><td>3145728.0</td></tr>
<tr><td>323</td><td>Pacifica01</td><td>157f3260a4</td><td>2020-05-20 10:17:24</td><td>2</td><td>8388608.0</td><td>4718592.0</td></tr>
<tr><td>294</td><td>aussiemark</td><td>de002b1df0</td><td>2019-08-11 01:02:02</td><td>3</td><td>177018776.0</td><td>6045042.0</td></tr>
<tr><td>294</td><td>xeqres</td><td>c01a28b851</td><td>2020-05-20 10:17:24</td><td>3</td><td>1048576.0</td><td>5242880.0</td></tr>
<tr><td>277</td><td>ImALumberJack</td><td>839b655694</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>24709718.0</td></tr>
<tr><td>250</td><td>lordvader</td><td>eab55fea11</td><td>2020-05-20 10:17:24</td><td>3</td><td>59233976.0</td><td>5242880.0</td></tr>
<tr><td>236</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2020-05-20 10:17:24</td><td>7</td><td>110100480.0</td><td>16777216.0</td></tr>
<tr><td>233</td><td>superluis018</td><td>2cb753e34e</td><td>2020-05-20 10:17:24</td><td>3</td><td>42991616.0</td><td>4194304.0</td></tr>
<tr><td>228</td><td>whodunnit</td><td>fbd13c89e0</td><td>2020-05-20 10:17:24</td><td>4</td><td>53896806.0</td><td>6291456.0</td></tr>
<tr><td>214</td><td>JMHnode</td><td>07a87d17ad</td><td>2020-05-19 01:37:24</td><td>2</td><td>119532816.0</td><td>5242880.0</td></tr>
<tr><td>213</td><td>Corgolem1</td><td>40f70bf407</td><td>2020-05-20 10:17:24</td><td>1</td><td>18854340.0</td><td>5980034.0</td></tr>
<tr><td>212</td><td>austinav1</td><td>c1b1592c16</td><td>2019-02-17 19:27:15</td><td>2</td><td>262144000.0</td><td>6291456.0</td></tr>
<tr><td>211</td><td>Kmanstocker</td><td>fc3e5b1b60</td><td>2020-05-20 10:17:24</td><td>3</td><td>389092863.0</td><td>5242880.0</td></tr>
<tr><td>211</td><td>M2</td><td>9783f12b91</td><td>2020-05-20 10:17:24</td><td>1</td><td>15728640.0</td><td>12582912.0</td></tr>
<tr><td>203</td><td>ewishrog</td><td>8c6b3222ea</td><td>2020-05-20 10:17:24</td><td>1</td><td>435268800.0</td><td>9098054.0</td></tr>
<tr><td>202</td><td>(Anonymous)</td><td>d843dfd5a8</td><td>2020-04-22 15:47:24</td><td>7</td><td>143658892.0</td><td>11058252.0</td></tr>
<tr><td>190</td><td>London-essex</td><td>5034ff18ae</td><td>2019-09-20 17:27:02</td><td>3</td><td>281834196.0</td><td>6291456.0</td></tr>
<tr><td>188</td><td>Skynet41</td><td>c94f4c6be6</td><td>2020-05-15 13:12:24</td><td>3</td><td>10485760.0</td><td>6231756.0</td></tr>
<tr><td>185</td><td>Pro Grade</td><td>3258c0b410</td><td>2020-04-06 17:44:17</td><td>11</td><td>106393440.0</td><td>10485760.0</td></tr>
<tr><td>185</td><td>Lilaschwarz</td><td>5c141cff47</td><td>2020-04-17 21:29:17</td><td>5</td><td>125249170.0</td><td>12506264.0</td></tr>
<tr><td>183</td><td>DK17</td><td>629439ff3a</td><td>2019-03-14 10:23:53</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>183</td><td>golemnode587394</td><td>036671814f</td><td>2020-02-11 19:19:17</td><td>3</td><td>1048576.0</td><td>5737500.0</td></tr>
<tr><td>179</td><td>Corgolem2</td><td>d199ae507c</td><td>2020-05-20 10:17:24</td><td>1</td><td>21126156.0</td><td>5980028.0</td></tr>
<tr><td>175</td><td>Austinav1</td><td>a69dd45786</td><td>2020-03-04 04:04:17</td><td>2</td><td>12423672.0</td><td>5242880.0</td></tr>
<tr><td>172</td><td>GoodJobBestPrice</td><td>bfced6f558</td><td>2020-05-20 10:17:24</td><td>3</td><td>9126724.0</td><td>3011952.0</td></tr>
<tr><td>168</td><td></td><td>47c0a89a0a</td><td>2019-10-30 05:34:17</td><td>7</td><td>83899520.0</td><td>12519254.0</td></tr>
<tr><td>168</td><td>DaSSiMac</td><td>b8eaf9b957</td><td>2020-03-30 13:44:17</td><td>2</td><td>262144000.0</td><td>8388608.0</td></tr>
<tr><td>166</td><td>TastyDoe</td><td>1f8e0cdf90</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>164</td><td>macgyver</td><td>4e92f89baa</td><td>2020-05-15 11:52:24</td><td>9</td><td>26214400.0</td><td>9437184.0</td></tr>
<tr><td>159</td><td>waffledonkey2003</td><td>be7e5eec73</td><td>2019-04-19 18:08:53</td><td>12</td><td>57671680.0</td><td>10485760.0</td></tr>
<tr><td>159</td><td>Dinkum</td><td>b7597b678c</td><td>2019-11-02 02:09:17</td><td>3</td><td>1338102.0</td><td>6252360.0</td></tr>
<tr><td>158</td><td>kenadian</td><td>9e36e4be75</td><td>2020-05-18 11:32:24</td><td>3</td><td>36924848.0</td><td>25165824.0</td></tr>
<tr><td>156</td><td>DK27</td><td>7a81a0207e</td><td>2019-02-22 20:37:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>156</td><td>DK22</td><td>f5785c737f</td><td>2019-02-22 21:42:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>156</td><td>DonsDell</td><td>bfbd973bfd</td><td>2020-05-20 10:17:24</td><td>5</td><td>658529094.0</td><td>14120542.0</td></tr>
<tr><td>154</td><td>DK25</td><td>f14b7a141a</td><td>2019-02-22 20:37:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>150</td><td>vehsak</td><td>e79bc084c9</td><td>2020-02-13 20:49:17</td><td>2</td><td>1048576.0</td><td>4194304.0</td></tr>
<tr><td>149</td><td>bigarmsbiggut12</td><td>f080031296</td><td>2020-05-20 10:17:24</td><td>2</td><td>21940408.0</td><td>4955690.0</td></tr>
<tr><td>148</td><td>DK5</td><td>58d5956491</td><td>2019-02-22 20:42:15</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>148</td><td>The_Bras_Node</td><td>873bd46534</td><td>2020-05-20 10:17:24</td><td>5</td><td>39127764.0</td><td>11668068.0</td></tr>
<tr><td>145</td><td>teamdir_amd</td><td>4d994fed55</td><td>2020-05-20 10:17:24</td><td>2</td><td>577531608.0</td><td>6125658.0</td></tr>

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
      <tr><td scope='row'>1415</td><td>fzhut</td><td>efc9be5e59</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>1372</td><td>ImALumberJack</td><td>839b655694</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>24709718.0</td></tr>
<tr><td>1178</td><td>TastyDoe</td><td>1f8e0cdf90</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>1006</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>175</td><td>kascheri12</td><td>656778299a</td><td>2019-03-03 08:38:53</td><td>7</td><td>83886080.0</td><td>6291456.0</td></tr>
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
      <tr><td scope='row'>1019</td><td>fzhut</td><td>efc9be5e59</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>691</td><td>ImALumberJack</td><td>839b655694</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>24709718.0</td></tr>
<tr><td>629</td><td>TastyDoe</td><td>1f8e0cdf90</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>581</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>174</td><td>kascheri12</td><td>656778299a</td><td>2019-03-03 08:38:53</td><td>7</td><td>83886080.0</td><td>6291456.0</td></tr>
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
      <tr><td scope='row'>130</td><td>fzhut</td><td>efc9be5e59</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>105</td><td>ImALumberJack</td><td>839b655694</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>24709718.0</td></tr>
<tr><td>85</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>79</td><td>TastyDoe</td><td>1f8e0cdf90</td><td>2020-05-20 10:17:24</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
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
<tr><td>63</td><td>golem1</td><td>c2490a5ce2</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>57ce921b99</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>b1c26f12ab</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td></td><td>7e3cea8a91</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td></td><td>1af8bd40c3</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
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
<tr><td>63</td><td>Crusher(64 core)</td><td>b57f3aa761</td><td>2020-05-20 10:17:24</td><td>63</td><td>180894636.0</td><td>40162086.0</td></tr>
<tr><td>48</td><td>gigatron</td><td>f71bb6a3fe</td><td>2020-01-30 07:39:17</td><td>47</td><td>60617148.0</td><td>24604632.0</td></tr>
<tr><td>39</td><td>Terminator 420</td><td>165a7ae218</td><td>2019-01-21 19:47:15</td><td>4</td><td>165675008.0</td><td>10485760.0</td></tr>

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
