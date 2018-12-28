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
  gauge1.set(-5.1763); // set actual value
  gauge1.setTextField(document.getElementById('span_gauge_percent_change_subtasks_success_past_day'),3);
  
  var gauge2 = new Gauge(target2).setOptions(opts2); // create sexy gauge!
  gauge2.maxValue = 50; // set max gauge value
  gauge2.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge2.animationSpeed = 10; // set animation speed (32 is default value)
  gauge2.set(-13.5742); // set actual value
  gauge2.setTextField(document.getElementById('span_gauge_percent_change_subtasks_timeout_past_day'),3);
  
  var gauge3 = new Gauge(target3).setOptions(opts3); // create sexy gauge!
  gauge3.maxValue = 50; // set max gauge value
  gauge3.setMinValue(-50);  // Prefer setter over gauge.minValue = 0
  gauge3.animationSpeed = 10; // set animation speed (32 is default value)
  gauge3.set(-3.8819); // set actual value
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
      <tr><td scope='row'>2018-12-28</td><td>78332</td><td>-5.1763</td><td>4737</td><td>-13.5742</td><td>3417</td><td>-3.8819</td></tr>
<tr><td>2018-12-27</td><td>82608</td><td>5.1166</td><td>5481</td><td>2.3147</td><td>3555</td><td>7.2398</td></tr>
<tr><td>2018-12-26</td><td>78587</td><td>5.6405</td><td>5357</td><td>10.4081</td><td>3315</td><td>-2.2412</td></tr>
<tr><td>2018-12-25</td><td>74391</td><td>-3.3908</td><td>4852</td><td>-1.3821</td><td>3391</td><td>2.6953</td></tr>
<tr><td>2018-12-24</td><td>77002</td><td>-2.0605</td><td>4920</td><td>-1.3830</td><td>3302</td><td>-5.0058</td></tr>
<tr><td>2018-12-23</td><td>78622</td><td>-3.8063</td><td>4989</td><td>-5.5293</td><td>3476</td><td>1.5780</td></tr>
<tr><td>2018-12-22</td><td>81733</td><td>6.6189</td><td>5281</td><td>9.3148</td><td>3422</td><td>6.0099</td></tr>
<tr><td>2018-12-21</td><td>76659</td><td>1.3458</td><td>4831</td><td>-2.7576</td><td>3228</td><td>14.3464</td></tr>
<tr><td>2018-12-20</td><td>75641</td><td>0.1682</td><td>4968</td><td>-3.4590</td><td>2823</td><td>-12.3836</td></tr>
<tr><td>2018-12-19</td><td>75514</td><td>-7.5886</td><td>5146</td><td>-6.4874</td><td>3222</td><td>-3.9069</td></tr>
<tr><td>2018-12-18</td><td>81715</td><td>1.0649</td><td>5503</td><td>-0.2176</td><td>3353</td><td>-2.3019</td></tr>
<tr><td>2018-12-17</td><td>80854</td><td>5.2033</td><td>5515</td><td>6.2825</td><td>3432</td><td>3.1250</td></tr>
<tr><td>2018-12-16</td><td>76855</td><td>4.6187</td><td>5189</td><td>6.9456</td><td>3328</td><td>0.2410</td></tr>
<tr><td>2018-12-15</td><td>73462</td><td>-3.8027</td><td>4852</td><td>-6.5125</td><td>3320</td><td>-1.0727</td></tr>
<tr><td>2018-12-14</td><td>76366</td><td>3.4601</td><td>5190</td><td>4.4056</td><td>3356</td><td>10.4674</td></tr>
<tr><td>2018-12-13</td><td>73812</td><td>2.7722</td><td>4971</td><td>9.8806</td><td>3038</td><td>1.6734</td></tr>
<tr><td>2018-12-12</td><td>71821</td><td>-4.0532</td><td>4524</td><td>-5.9068</td><td>2988</td><td>-2.8293</td></tr>
<tr><td>2018-12-11</td><td>74855</td><td>-5.8605</td><td>4808</td><td>-5.4846</td><td>3075</td><td>-13.1110</td></tr>
<tr><td>2018-12-10</td><td>79515</td><td>-0.1695</td><td>5087</td><td>0.6330</td><td>3539</td><td>-2.2106</td></tr>
<tr><td>2018-12-09</td><td>79650</td><td>36.4618</td><td>5055</td><td>35.4139</td><td>3619</td><td>69.7467</td></tr>

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
      <tr><td scope='row'>1779</td><td>grunt</td><td>0022abe511</td><td>2018-12-28 10:37:28</td><td>7</td><td>2097152.0</td><td>9437184.0</td></tr>
<tr><td>1265</td><td>ryzenGolem</td><td>ea132c2185</td><td>2018-12-23 03:07:28</td><td>12</td><td>108895867.0</td><td>10485760.0</td></tr>
<tr><td>1141</td><td>DonsDell</td><td>bfbd973bfd</td><td>2018-12-28 10:37:28</td><td>5</td><td>658529094.0</td><td>14120543.0</td></tr>
<tr><td>1115</td><td>xeqres</td><td>c01a28b851</td><td>2018-12-28 10:37:28</td><td>3</td><td>1048576.0</td><td>5242880.0</td></tr>
<tr><td>1042</td><td>cryptodave</td><td>dc068d492b</td><td>2018-12-28 10:37:28</td><td>9</td><td>37994224.0</td><td>10485760.0</td></tr>
<tr><td>1006</td><td>DK18</td><td>b37d4a4ad2</td><td>2018-12-27 19:37:28</td><td>3</td><td>83886080.0</td><td>8912896.0</td></tr>
<tr><td>990</td><td>DK11</td><td>e0f6876a75</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>973</td><td>DK16</td><td>cae4745f9d</td><td>2018-12-27 23:32:28</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>967</td><td>BoSox9</td><td>24eb4e2c1f</td><td>2018-12-28 10:37:28</td><td>15</td><td>52428800.0</td><td>23068672.0</td></tr>
<tr><td>963</td><td>GolemMultiCore</td><td>735abafcb3</td><td>2018-12-28 10:37:28</td><td>15</td><td>57962036.0</td><td>17825792.0</td></tr>
<tr><td>953</td><td>Ryzen8core</td><td>8475b3a5f5</td><td>2018-12-28 10:37:28</td><td>12</td><td>56350424.0</td><td>10659242.0</td></tr>
<tr><td>952</td><td>Gforce</td><td>07511fb5e4</td><td>2018-12-28 10:37:28</td><td>11</td><td>334937163.0</td><td>9280907.0</td></tr>
<tr><td>950</td><td>DK26</td><td>1c6c008734</td><td>2018-12-28 03:52:28</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>929</td><td>GolemGuy</td><td>24c9f0722f</td><td>2018-12-18 19:27:28</td><td>5</td><td>21228292.0</td><td>25128441.0</td></tr>
<tr><td>917</td><td>DK22</td><td>f5785c737f</td><td>2018-12-28 05:22:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>916</td><td>mainichi</td><td>08dfebdc9c</td><td>2018-12-28 10:37:28</td><td>10</td><td>132011136.0</td><td>23656995.0</td></tr>
<tr><td>910</td><td>DK25</td><td>f14b7a141a</td><td>2018-12-28 05:27:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>910</td><td>DK12</td><td>6bf6602ed9</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>900</td><td>DK20</td><td>31a2601e02</td><td>2018-12-28 09:07:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>892</td><td>DK17</td><td>629439ff3a</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>888</td><td>LilaSchwarz</td><td>5c141cff47</td><td>2018-12-28 10:37:28</td><td>5</td><td>125249170.0</td><td>12544588.0</td></tr>
<tr><td>879</td><td>DK19</td><td>89d1e6953d</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>865</td><td>Fuzzy Golem</td><td>06af924c46</td><td>2018-12-28 10:37:28</td><td>5</td><td>228589568.0</td><td>20971520.0</td></tr>
<tr><td>857</td><td>coduyen</td><td>3bf155f147</td><td>2018-12-27 10:47:28</td><td>11</td><td>104857600.0</td><td>36700160.0</td></tr>
<tr><td>834</td><td>DK13</td><td>356626023e</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>833</td><td>DK23</td><td>bcae614d6a</td><td>2018-12-28 05:42:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>829</td><td>Node-ByZohaib</td><td>eb4732ff31</td><td>2018-12-28 10:37:28</td><td>14</td><td>132912696.0</td><td>12279024.0</td></tr>
<tr><td>802</td><td>Vicente</td><td>0d3c417e55</td><td>2018-12-28 10:37:28</td><td>6</td><td>631885743.0</td><td>5818343.0</td></tr>
<tr><td>786</td><td>DK4</td><td>bfba7469f4</td><td>2018-12-28 07:37:28</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>770</td><td>Cloud9</td><td>8905205743</td><td>2018-12-28 10:37:28</td><td>11</td><td>24991212.0</td><td>17825792.0</td></tr>
<tr><td>766</td><td>DK24</td><td>b2483f1942</td><td>2018-12-28 05:27:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>760</td><td>DK-golem6</td><td>b9d72465a1</td><td>2018-12-28 10:37:28</td><td>3</td><td>50426019.0</td><td>9357024.0</td></tr>
<tr><td>755</td><td>PILLAGER</td><td>7ce29c9105</td><td>2018-12-28 10:37:28</td><td>14</td><td>740809328.0</td><td>49828331.0</td></tr>
<tr><td>737</td><td>Kinezumi</td><td>9d39a4a596</td><td>2018-12-02 12:47:12</td><td>7</td><td>83043856.0</td><td>24117248.0</td></tr>
<tr><td>724</td><td>WishMeLuck1</td><td>fa52fe0e2e</td><td>2018-12-28 10:37:28</td><td>11</td><td>66084300.0</td><td>12507360.0</td></tr>
<tr><td>717</td><td>DK27</td><td>7a81a0207e</td><td>2018-12-28 05:47:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>710</td><td>fuchur</td><td>62d8e962af</td><td>2018-12-19 08:47:28</td><td>14</td><td>63418400.0</td><td>24117248.0</td></tr>
<tr><td>704</td><td>AbdArthurdent</td><td>7803d4a14e</td><td>2018-12-28 06:57:28</td><td>7</td><td>146800640.0</td><td>17836206.0</td></tr>
<tr><td>701</td><td>DK5</td><td>58d5956491</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>697</td><td>golem-spliff-osx</td><td>5015bfd932</td><td>2018-12-28 10:37:28</td><td>2</td><td>861266898.0</td><td>5662310.0</td></tr>
<tr><td>674</td><td>Fuzzy Golem 2</td><td>cce082b147</td><td>2018-12-28 10:37:28</td><td>2</td><td>995424069.0</td><td>18874368.0</td></tr>
<tr><td>660</td><td>DuttyNode</td><td>6d1649c4e8</td><td>2018-12-28 10:37:28</td><td>4</td><td>129050954.0</td><td>6291456.0</td></tr>
<tr><td>658</td><td>trancephorm</td><td>213a71706a</td><td>2018-12-27 11:37:28</td><td>5</td><td>227735836.0</td><td>20964049.0</td></tr>
<tr><td>633</td><td>Cormatic</td><td>5ee5b3e65c</td><td>2018-12-25 23:07:28</td><td>24</td><td>104857600.0</td><td>20971520.0</td></tr>
<tr><td>632</td><td>Pukerud</td><td>1fca5d276c</td><td>2018-12-22 01:37:28</td><td>14</td><td>51926456.0</td><td>11901528.0</td></tr>
<tr><td>626</td><td>MSI</td><td>2ff806ca2c</td><td>2018-12-24 07:52:28</td><td>6</td><td>27195980.0</td><td>11534336.0</td></tr>
<tr><td>625</td><td>EyeIsBoss</td><td>6bbeb79e20</td><td>2018-12-28 10:37:28</td><td>7</td><td>771707628.0</td><td>25137618.0</td></tr>
<tr><td>616</td><td>macgyver</td><td>4e92f89baa</td><td>2018-12-28 10:37:28</td><td>28</td><td>73400320.0</td><td>9437184.0</td></tr>

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
      <tr><td scope='row'>183</td><td>grunt</td><td>0022abe511</td><td>2018-12-28 10:37:28</td><td>7</td><td>2097152.0</td><td>9437184.0</td></tr>
<tr><td>166</td><td>DK24</td><td>b2483f1942</td><td>2018-12-28 05:27:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>157</td><td>cryptodave</td><td>dc068d492b</td><td>2018-12-28 10:37:28</td><td>9</td><td>37994224.0</td><td>10485760.0</td></tr>
<tr><td>134</td><td>Sivir</td><td>f61c8405ba</td><td>2018-12-28 10:37:28</td><td>3</td><td>1048576.0</td><td>9397437.0</td></tr>
<tr><td>130</td><td>Fat80y 3</td><td>bcc87a9746</td><td>2018-12-28 10:37:28</td><td>3</td><td>8806664.0</td><td>9382164.0</td></tr>
<tr><td>115</td><td>CM</td><td>deb4a9c8f0</td><td>2018-12-28 10:37:28</td><td>6</td><td>13482896.0</td><td>5242880.0</td></tr>
<tr><td>114</td><td>mine</td><td>d4545af398</td><td>2018-12-28 10:37:28</td><td>7</td><td>1048576.0</td><td>9290799.0</td></tr>
<tr><td>107</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2018-12-28 10:37:28</td><td>1</td><td>128395548.0</td><td>6290334.0</td></tr>
<tr><td>97</td><td>mrkmerc</td><td>2e00892ac8</td><td>2018-12-28 10:37:28</td><td>3</td><td>257536004.0</td><td>15627435.0</td></tr>
<tr><td>97</td><td>FrankinStineNode</td><td>c867218fae</td><td>2018-12-28 10:37:28</td><td>2</td><td>119560982.0</td><td>2449776.0</td></tr>
<tr><td>97</td><td>Bloopd</td><td>fcab66f556</td><td>2018-12-28 10:37:28</td><td>2</td><td>10485760.0</td><td>5310545.0</td></tr>
<tr><td>83</td><td>sparklenose</td><td>b76d24a6fd</td><td>2018-12-26 19:02:28</td><td>5</td><td>157286400.0</td><td>8388608.0</td></tr>
<tr><td>80</td><td>DuttyNode</td><td>6d1649c4e8</td><td>2018-12-28 10:37:28</td><td>4</td><td>129050954.0</td><td>6291456.0</td></tr>
<tr><td>78</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2018-12-28 08:52:28</td><td>1</td><td>881575164.0</td><td>6260778.0</td></tr>
<tr><td>70</td><td>Flaci75</td><td>6d31161d92</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>3119553.0</td></tr>
<tr><td>63</td><td>Elizabeth</td><td>3e54698dce</td><td>2018-12-28 06:37:28</td><td>2</td><td>725474168.0</td><td>5093570.0</td></tr>
<tr><td>59</td><td>DK13</td><td>356626023e</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>59</td><td>DK6</td><td>e6ab95ae5a</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>57</td><td>something</td><td>898df9f449</td><td>2018-12-28 10:37:28</td><td>2</td><td>440401920.0</td><td>16777216.0</td></tr>
<tr><td>56</td><td>DK12</td><td>6bf6602ed9</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>51</td><td>klopsknoedel</td><td>c82b9e2435</td><td>2018-12-14 09:37:28</td><td>6</td><td>94371840.0</td><td>9387834.0</td></tr>
<tr><td>49</td><td>MMX99</td><td>6d24d6189a</td><td>2018-12-28 07:27:28</td><td>10</td><td>62914560.0</td><td>10485760.0</td></tr>
<tr><td>48</td><td>HomePC w10</td><td>21c1954eb1</td><td>2018-12-28 10:37:28</td><td>4</td><td>1048576.0</td><td>8388608.0</td></tr>
<tr><td>47</td><td></td><td>89cc383411</td><td>2018-12-23 01:12:28</td><td>6</td><td>6291456.0</td><td>12535860.0</td></tr>
<tr><td>45</td><td>macgyver</td><td>4e92f89baa</td><td>2018-12-28 10:37:28</td><td>28</td><td>73400320.0</td><td>9437184.0</td></tr>
<tr><td>45</td><td>DK8</td><td>fc09208d6f</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>44</td><td>MMZ68</td><td>6557e52dad</td><td>2018-12-26 06:22:28</td><td>7</td><td>32618880.0</td><td>11534336.0</td></tr>
<tr><td>44</td><td>ciumete</td><td>8283860bb8</td><td>2018-12-28 10:37:28</td><td>6</td><td>26214400.0</td><td>33554432.0</td></tr>
<tr><td>44</td><td>DK17</td><td>629439ff3a</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>41</td><td>Vicente</td><td>0d3c417e55</td><td>2018-12-28 10:37:28</td><td>6</td><td>631885743.0</td><td>5818343.0</td></tr>
<tr><td>41</td><td>DK11</td><td>e0f6876a75</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>40</td><td>nodeone</td><td>e0a9b3e00a</td><td>2018-11-30 04:12:21</td><td>5</td><td>92710840.0</td><td>10026679.0</td></tr>
<tr><td>40</td><td>SkitsoGolem</td><td>4d6d75f510</td><td>2018-12-16 10:22:28</td><td>5</td><td>20694104.0</td><td>10028817.0</td></tr>
<tr><td>40</td><td>DK23</td><td>bcae614d6a</td><td>2018-12-28 05:42:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>40</td><td>DK19</td><td>89d1e6953d</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>40</td><td>HypnoNode</td><td>aa99d9e417</td><td>2018-12-28 10:37:28</td><td>3</td><td>16572964.0</td><td>3670016.0</td></tr>
<tr><td>39</td><td>Pukerud</td><td>1fca5d276c</td><td>2018-12-22 01:37:28</td><td>14</td><td>51926456.0</td><td>11901528.0</td></tr>
<tr><td>39</td><td>Jambo</td><td>0aa3346fc0</td><td>2018-12-28 10:37:28</td><td>3</td><td>19984260.0</td><td>6180024.0</td></tr>
<tr><td>38</td><td>DK10</td><td>28fdc5a919</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>38</td><td>The_Bras_Node</td><td>873bd46534</td><td>2018-12-28 10:37:28</td><td>4</td><td>90868908.0</td><td>11668068.0</td></tr>
<tr><td>37</td><td>dollarbone</td><td>e224e508e8</td><td>2018-12-20 14:37:28</td><td>6</td><td>7697984.0</td><td>10759678.0</td></tr>
<tr><td>37</td><td>DK7</td><td>d1effca797</td><td>2018-12-22 21:12:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>37</td><td>DK18</td><td>b37d4a4ad2</td><td>2018-12-27 19:37:28</td><td>3</td><td>83886080.0</td><td>8912896.0</td></tr>
<tr><td>37</td><td>sifotes_main</td><td>49dad8a6f7</td><td>2018-12-28 10:37:28</td><td>5</td><td>15284092.0</td><td>9938275.0</td></tr>
<tr><td>36</td><td>Node-ByZohaib</td><td>eb4732ff31</td><td>2018-12-28 10:37:28</td><td>14</td><td>132912696.0</td><td>12279024.0</td></tr>
<tr><td>36</td><td>plumbus</td><td>611f591f51</td><td>2018-12-28 10:37:28</td><td>6</td><td>52428800.0</td><td>8388608.0</td></tr>
<tr><td>36</td><td>Almightyg73</td><td>9453522248</td><td>2018-12-28 10:37:28</td><td>6</td><td>105478283.0</td><td>5537570.0</td></tr>
<tr><td>34</td><td>DK27</td><td>7a81a0207e</td><td>2018-12-28 05:47:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>34</td><td>Forever_A-gator</td><td>8484883572</td><td>2018-12-28 10:37:28</td><td>7</td><td>121717464.0</td><td>6150057.0</td></tr>
<tr><td>34</td><td>MIG-ETH</td><td>867f600af6</td><td>2018-12-28 10:37:28</td><td>3</td><td>94371840.0</td><td>11534336.0</td></tr>

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
      <tr><td scope='row'>193</td><td></td><td>de002b1df0</td><td>2018-12-28 08:42:28</td><td>1</td><td>1048576000.0</td><td>8388608.0</td></tr>
<tr><td>172</td><td>DK17</td><td>629439ff3a</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>153</td><td>austinav1</td><td>c1b1592c16</td><td>2018-12-28 10:37:28</td><td>3</td><td>293601280.0</td><td>7340032.0</td></tr>
<tr><td>152</td><td>Fat80y</td><td>3599f32da4</td><td>2018-12-28 10:37:28</td><td>6</td><td>73682386.0</td><td>12505725.0</td></tr>
<tr><td>145</td><td>DK27</td><td>7a81a0207e</td><td>2018-12-28 05:47:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>142</td><td>DK25</td><td>f14b7a141a</td><td>2018-12-28 05:27:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>141</td><td>DK22</td><td>f5785c737f</td><td>2018-12-28 05:22:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>134</td><td>DK5</td><td>58d5956491</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>131</td><td>Zoey</td><td>a517033a35</td><td>2018-12-19 02:17:28</td><td>1</td><td>397568392.0</td><td>8178578.0</td></tr>
<tr><td>126</td><td>DiamondGolem</td><td>09fd5d0bd6</td><td>2018-12-22 08:27:28</td><td>2</td><td>21542999.0</td><td>11523777.0</td></tr>
<tr><td>123</td><td>DK11</td><td>e0f6876a75</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>119</td><td>DK20</td><td>31a2601e02</td><td>2018-12-28 09:07:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>105</td><td>DK6</td><td>e6ab95ae5a</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>95</td><td>waffledonkey2003</td><td>be7e5eec73</td><td>2018-12-28 10:37:28</td><td>14</td><td>57671680.0</td><td>23068672.0</td></tr>
<tr><td>93</td><td>moon0</td><td>c298c45088</td><td>2018-12-28 10:37:28</td><td>1</td><td>32505856.0</td><td>12479472.0</td></tr>
<tr><td>92</td><td>gm</td><td>f97856d3c2</td><td>2018-12-21 05:32:28</td><td>1</td><td>142178502.0</td><td>3145728.0</td></tr>
<tr><td>90</td><td>tj&e_funkotron</td><td>fee60b3ef3</td><td>2018-12-28 10:37:28</td><td>3</td><td>1048576.0</td><td>6291456.0</td></tr>
<tr><td>89</td><td></td><td>892d074702</td><td>2018-12-22 08:42:28</td><td>21</td><td>787915267.0</td><td>143435771.0</td></tr>
<tr><td>89</td><td>DK18</td><td>b37d4a4ad2</td><td>2018-12-27 19:37:28</td><td>3</td><td>83886080.0</td><td>8912896.0</td></tr>
<tr><td>85</td><td>DK16</td><td>cae4745f9d</td><td>2018-12-27 23:32:28</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>82</td><td>DK23</td><td>bcae614d6a</td><td>2018-12-28 05:42:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>78</td><td>cryptohnode1</td><td>efb810bac8</td><td>2018-12-21 18:37:28</td><td>39</td><td>269232912.0</td><td>2986422.0</td></tr>
<tr><td>76</td><td>DK4</td><td>bfba7469f4</td><td>2018-12-28 07:37:28</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>74</td><td>grunt</td><td>0022abe511</td><td>2018-12-28 10:37:28</td><td>7</td><td>2097152.0</td><td>9437184.0</td></tr>
<tr><td>72</td><td>DGRIGG1</td><td>9da4e2f04c</td><td>2018-12-28 08:52:28</td><td>1</td><td>881575164.0</td><td>6260778.0</td></tr>
<tr><td>71</td><td>xeqres</td><td>c01a28b851</td><td>2018-12-28 10:37:28</td><td>3</td><td>1048576.0</td><td>5242880.0</td></tr>
<tr><td>69</td><td>superluis018</td><td>2cb753e34e</td><td>2018-12-28 10:37:28</td><td>3</td><td>78643200.0</td><td>8388608.0</td></tr>
<tr><td>68</td><td>DK26</td><td>1c6c008734</td><td>2018-12-28 03:52:28</td><td>3</td><td>104857600.0</td><td>8912896.0</td></tr>
<tr><td>67</td><td>DEDICATEDfastSSD</td><td>d3849667d4</td><td>2018-12-28 10:37:28</td><td>2</td><td>260364048.0</td><td>9983450.0</td></tr>
<tr><td>67</td><td>Durin2</td><td>b9340eeb6d</td><td>2018-12-28 10:37:28</td><td>1</td><td>52428800.0</td><td>5242880.0</td></tr>
<tr><td>55</td><td>m_node01</td><td>5df112fcd3</td><td>2018-12-16 11:57:28</td><td>2</td><td>52428800.0</td><td>4194304.0</td></tr>
<tr><td>55</td><td>Fat80y 3</td><td>bcc87a9746</td><td>2018-12-28 10:37:28</td><td>3</td><td>8806664.0</td><td>9382164.0</td></tr>
<tr><td>54</td><td>redka</td><td>b99f49e45a</td><td>2018-12-27 03:02:28</td><td>1</td><td>419430400.0</td><td>3066129.0</td></tr>
<tr><td>54</td><td>Fat80y 1</td><td>a5157c6d80</td><td>2018-12-28 10:37:28</td><td>3</td><td>481751608.0</td><td>12543825.0</td></tr>
<tr><td>54</td><td>vehsak</td><td>e79bc084c9</td><td>2018-12-28 10:37:28</td><td>1</td><td>31457280.0</td><td>4194304.0</td></tr>
<tr><td>50</td><td>Loki_Golem_1</td><td>aa62bc6250</td><td>2018-12-28 10:37:28</td><td>15</td><td>220442552.0</td><td>56615220.0</td></tr>
<tr><td>49</td><td>snakelips</td><td>e0d04800ab</td><td>2018-12-28 10:37:28</td><td>7</td><td>1048576.0</td><td>2894748.0</td></tr>
<tr><td>49</td><td>DK19</td><td>89d1e6953d</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>48</td><td>JumpNode2</td><td>4ef31fa7ec</td><td>2018-12-02 14:32:12</td><td>1</td><td>392369056.0</td><td>2865284.0</td></tr>
<tr><td>48</td><td>golemnode587394</td><td>036671814f</td><td>2018-12-24 19:32:28</td><td>3</td><td>1048576.0</td><td>5737506.0</td></tr>
<tr><td>47</td><td>abcdefyyy</td><td>f57cfbf9b3</td><td>2018-12-28 10:37:28</td><td>3</td><td>9427376.0</td><td>4194304.0</td></tr>
<tr><td>46</td><td>Kinezumi</td><td>9d39a4a596</td><td>2018-12-02 12:47:12</td><td>7</td><td>83043856.0</td><td>24117248.0</td></tr>
<tr><td>46</td><td>bigarmsbiggut</td><td>f080031296</td><td>2018-12-28 09:22:28</td><td>2</td><td>35390224.0</td><td>4955690.0</td></tr>
<tr><td>45</td><td>DonsDell</td><td>bfbd973bfd</td><td>2018-12-28 10:37:28</td><td>5</td><td>658529094.0</td><td>14120543.0</td></tr>
<tr><td>45</td><td>Vicente</td><td>0d3c417e55</td><td>2018-12-28 10:37:28</td><td>6</td><td>631885743.0</td><td>5818343.0</td></tr>
<tr><td>43</td><td>Tordek</td><td>c2dc8f5cc4</td><td>2018-12-28 10:37:28</td><td>1</td><td>128395548.0</td><td>6290334.0</td></tr>
<tr><td>43</td><td>DK13</td><td>356626023e</td><td>2018-12-28 10:37:28</td><td>3</td><td>104857600.0</td><td>5242880.0</td></tr>
<tr><td>42</td><td>mainnet-gf-0 git</td><td>d7ce2191b8</td><td>2018-12-28 10:37:28</td><td>1</td><td>1048576.0</td><td>3033828.0</td></tr>
<tr><td>39</td><td>plowplow</td><td>02eae79914</td><td>2018-11-30 14:47:21</td><td>2</td><td>209715200.0</td><td>16777216.0</td></tr>
<tr><td>39</td><td>WishMeLuck1</td><td>fa52fe0e2e</td><td>2018-12-28 10:37:28</td><td>11</td><td>66084300.0</td><td>12507360.0</td></tr>

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
      <tr><td scope='row'>872</td><td>ImALumberJack</td><td>839b655694</td><td>2018-12-28 10:37:28</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr>
<tr><td>856</td><td>Tasty Doe</td><td>1f8e0cdf90</td><td>2018-12-28 10:37:28</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>687</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2018-12-28 10:37:28</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>353</td><td>fzhut</td><td>efc9be5e59</td><td>2018-12-28 10:37:28</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>15</td><td>vm win 0.18.2</td><td>a8242a7e35</td><td>2018-12-20 06:02:28</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>10</td><td>vm linux 0.18.2</td><td>ed13e4d451</td><td>2018-12-18 11:32:28</td><td>1</td><td>1048576.0</td><td>3102126.0</td></tr>
<tr><td>9</td><td>Scyther</td><td>a3020d305e</td><td>2018-12-28 10:32:28</td><td>1</td><td>58586777.0</td><td>4404018.0</td></tr>
<tr><td>8</td><td>vm sierra 0.18.2</td><td>87c038c829</td><td>2018-12-20 06:57:28</td><td>1</td><td>2097152.0</td><td>5242880.0</td></tr>
<tr><td>7</td><td>2rec ubuntu</td><td>2rec</td><td>2018-12-14 03:17:28</td><td>7</td><td>360567792.0</td><td>12212628.0</td></tr>
<tr><td>6</td><td>Szadok</td><td>6015c9f98f</td><td>2018-12-28 10:37:28</td><td>7</td><td>254014000.0</td><td>25165824.0</td></tr>
<tr><td>4</td><td></td><td>01090e3877</td><td>2018-12-14 05:27:28</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>4</td><td>vm win docker</td><td>84861d2c2c</td><td>2018-12-14 09:27:28</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>
<tr><td>4</td><td>oncoming storm</td><td>6c15fa96c1</td><td>2018-12-28 10:37:28</td><td>3</td><td>59463872.0</td><td>12227040.0</td></tr>
<tr><td>3</td><td></td><td>b977047110</td><td>2018-12-03 11:42:12</td><td>3</td><td>1048576.0</td><td>4701183.0</td></tr>
<tr><td>3</td><td>Bad Wolf</td><td>9d5cb6e59b</td><td>2018-12-20 12:07:28</td><td>3</td><td>120398032.0</td><td>12490149.0</td></tr>

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
      <tr><td scope='row'>339</td><td>fzhut</td><td>efc9be5e59</td><td>2018-12-28 10:37:28</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>264</td><td>Tasty Doe</td><td>1f8e0cdf90</td><td>2018-12-28 10:37:28</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>203</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2018-12-28 10:37:28</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>149</td><td>ImALumberJack</td><td>839b655694</td><td>2018-12-28 10:37:28</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr>
<tr><td>8</td><td>vm linux 0.18.2</td><td>ed13e4d451</td><td>2018-12-18 11:32:28</td><td>1</td><td>1048576.0</td><td>3102126.0</td></tr>
<tr><td>7</td><td>2rec ubuntu</td><td>2rec</td><td>2018-12-14 03:17:28</td><td>7</td><td>360567792.0</td><td>12212628.0</td></tr>
<tr><td>7</td><td>vm win 0.18.2</td><td>a8242a7e35</td><td>2018-12-20 06:02:28</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>6</td><td>Szadok</td><td>6015c9f98f</td><td>2018-12-28 10:37:28</td><td>7</td><td>254014000.0</td><td>25165824.0</td></tr>
<tr><td>5</td><td>vm sierra 0.18.2</td><td>87c038c829</td><td>2018-12-20 06:57:28</td><td>1</td><td>2097152.0</td><td>5242880.0</td></tr>
<tr><td>4</td><td></td><td>01090e3877</td><td>2018-12-14 05:27:28</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>4</td><td>oncoming storm</td><td>6c15fa96c1</td><td>2018-12-28 10:37:28</td><td>3</td><td>59463872.0</td><td>12227040.0</td></tr>
<tr><td>3</td><td></td><td>c655c4771a</td><td>2018-11-30 06:37:21</td><td>2</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>3</td><td></td><td>b977047110</td><td>2018-12-03 11:42:12</td><td>3</td><td>1048576.0</td><td>4701183.0</td></tr>
<tr><td>3</td><td>vm win docker</td><td>84861d2c2c</td><td>2018-12-14 09:27:28</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>
<tr><td>3</td><td>Scyther</td><td>a3020d305e</td><td>2018-12-28 10:32:28</td><td>1</td><td>58586777.0</td><td>4404018.0</td></tr>
<tr><td>2</td><td>vm linux 18.2</td><td>47ce96ff3b</td><td>2018-12-18 10:22:28</td><td>7</td><td>1048576.0</td><td>9204903.0</td></tr>
<tr><td>2</td><td>Bad Wolf</td><td>9d5cb6e59b</td><td>2018-12-20 12:07:28</td><td>3</td><td>120398032.0</td><td>12490149.0</td></tr>
<tr><td>2</td><td>tempest</td><td>4ed165ea89</td><td>2018-12-28 10:37:28</td><td>11</td><td>117096912.0</td><td>49248342.0</td></tr>

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
      <tr><td scope='row'>8</td><td>Tasty Doe</td><td>1f8e0cdf90</td><td>2018-12-28 10:37:28</td><td>1</td><td>1048576.0</td><td>6130374.0</td></tr>
<tr><td>7</td><td>2rec ubuntu</td><td>2rec</td><td>2018-12-14 03:17:28</td><td>7</td><td>360567792.0</td><td>12212628.0</td></tr>
<tr><td>6</td><td>ImALumberJack</td><td>839b655694</td><td>2018-12-28 10:37:28</td><td>7</td><td>1048576.0</td><td>24709830.0</td></tr>
<tr><td>5</td><td>vm win 0.18.2</td><td>a8242a7e35</td><td>2018-12-20 06:02:28</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>4</td><td>vm sierra 0.18.2</td><td>87c038c829</td><td>2018-12-20 06:57:28</td><td>1</td><td>2097152.0</td><td>5242880.0</td></tr>
<tr><td>4</td><td>Szadok</td><td>6015c9f98f</td><td>2018-12-28 10:37:28</td><td>7</td><td>254014000.0</td><td>25165824.0</td></tr>
<tr><td>4</td><td>CaptainArmadillo</td><td>ead88c641f</td><td>2018-12-28 10:37:28</td><td>1</td><td>1048576.0</td><td>6130386.0</td></tr>
<tr><td>3</td><td></td><td>c655c4771a</td><td>2018-11-30 06:37:21</td><td>2</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>3</td><td></td><td>01090e3877</td><td>2018-12-14 05:27:28</td><td>1</td><td>1048576.0</td><td>4701180.0</td></tr>
<tr><td>3</td><td>vm linux 0.18.2</td><td>ed13e4d451</td><td>2018-12-18 11:32:28</td><td>1</td><td>1048576.0</td><td>3102126.0</td></tr>
<tr><td>3</td><td>oncoming storm</td><td>6c15fa96c1</td><td>2018-12-28 10:37:28</td><td>3</td><td>59463872.0</td><td>12227040.0</td></tr>
<tr><td>2</td><td></td><td>b977047110</td><td>2018-12-03 11:42:12</td><td>3</td><td>1048576.0</td><td>4701183.0</td></tr>
<tr><td>2</td><td>vm win docker</td><td>84861d2c2c</td><td>2018-12-14 09:27:28</td><td>2</td><td>1048576.0</td><td>1048576.0</td></tr>

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
      <tr><td scope='row'>63</td><td></td><td>819fa3c479</td><td>2018-12-07 21:17:12</td><td>63</td><td>1048576.0</td><td>198089248.0</td></tr>
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
<tr><td>63</td><td></td><td>b1c26f12ab</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td></td><td>7e3cea8a91</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td>ice_miner_0</td><td>d5dc1c4738</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089238.0</td></tr>
<tr><td>63</td><td></td><td>1af8bd40c3</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td></td><td>57ce921b99</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td>golem1</td><td>c2490a5ce2</td><td>2018-12-25 16:12:28</td><td>63</td><td>1048576.0</td><td>198089241.0</td></tr>
<tr><td>63</td><td>ionserver</td><td>6fd381a5e8</td><td>2018-12-28 04:22:28</td><td>44</td><td>663748608.0</td><td>73400320.0</td></tr>
<tr><td>63</td><td>ioassembly-62core-2</td><td>f1bea36319</td><td>2018-12-28 10:37:28</td><td>62</td><td>1048576.0</td><td>24702936.0</td></tr>
<tr><td>63</td><td>ioassembly-62core-1</td><td>21d1cda599</td><td>2018-12-28 10:37:28</td><td>62</td><td>1048576.0</td><td>24702936.0</td></tr>
<tr><td>63</td><td>ionserver</td><td>3e0609df46</td><td>2018-12-28 10:37:28</td><td>45</td><td>629145600.0</td><td>73400320.0</td></tr>
<tr><td>39</td><td>cryptohnode1</td><td>efb810bac8</td><td>2018-12-21 18:37:28</td><td>39</td><td>269232912.0</td><td>2986422.0</td></tr>
<tr><td>34</td><td>davidgolem</td><td>78ed208862</td><td>2018-12-28 10:37:28</td><td>34</td><td>834560724.0</td><td>44040192.0</td></tr>
<tr><td>32</td><td>Castillos</td><td>8f9e9681c0</td><td>2018-12-04 13:17:12</td><td>32</td><td>143270064.0</td><td>13910617.0</td></tr>
<tr><td>32</td><td>Zanthrox</td><td>39fe33f170</td><td>2018-12-28 00:47:28</td><td>32</td><td>20497436.0</td><td>12523779.0</td></tr>
<tr><td>32</td><td>SuperServer</td><td>29d99e9d1c</td><td>2018-12-28 10:37:28</td><td>32</td><td>1048576.0</td><td>100580937.0</td></tr>
<tr><td>32</td><td>KOW4G02</td><td>fefade7675</td><td>2018-12-28 10:37:28</td><td>32</td><td>99462992.0</td><td>50331648.0</td></tr>
<tr><td>31</td><td>Spreadnode</td><td>bcda4f4dea</td><td>2018-12-03 11:37:12</td><td>31</td><td>1048576.0</td><td>25074568.0</td></tr>
<tr><td>31</td><td></td><td>748284266c</td><td>2018-12-08 12:57:12</td><td>31</td><td>1048576.0</td><td>49480344.0</td></tr>
<tr><td>31</td><td></td><td>6355ef132b</td><td>2018-12-19 11:07:28</td><td>31</td><td>1048576.0</td><td>6265296.0</td></tr>
<tr><td>31</td><td>Miner A</td><td>c6c68a033c</td><td>2018-12-22 04:32:28</td><td>31</td><td>1048576.0</td><td>12501807.0</td></tr>
<tr><td>31</td><td>Threadripper-Max</td><td>832633c10d</td><td>2018-12-27 20:22:28</td><td>31</td><td>20971520.0</td><td>25069437.0</td></tr>
<tr><td>31</td><td>Airborne3325</td><td>6e76d7718e</td><td>2018-12-28 10:37:28</td><td>30</td><td>454929882.0</td><td>23816241.0</td></tr>
<tr><td>31</td><td>ushan001</td><td>b2c991299a</td><td>2018-12-28 10:37:28</td><td>31</td><td>441959880.0</td><td>222805431.0</td></tr>
<tr><td>31</td><td>pupo</td><td>b681589b6c</td><td>2018-12-28 10:37:28</td><td>31</td><td>118620344.0</td><td>25067550.0</td></tr>
<tr><td>30</td><td>MazingerG</td><td>9f620be31b</td><td>2018-12-08 21:45:49</td><td>30</td><td>349175808.0</td><td>47723668.0</td></tr>
<tr><td>29</td><td>NightSky</td><td>da98bf2ac0</td><td>2018-12-28 10:37:28</td><td>29</td><td>15728640.0</td><td>12313329.0</td></tr>
<tr><td>28</td><td>macgyver</td><td>4e92f89baa</td><td>2018-12-28 10:37:28</td><td>28</td><td>73400320.0</td><td>9437184.0</td></tr>
<tr><td>27</td><td></td><td>d7c46b1d37</td><td>2018-12-08 21:45:49</td><td>27</td><td>172706376.0</td><td>12457155.0</td></tr>
<tr><td>27</td><td>zootopia</td><td>87f1bdc964</td><td>2018-12-28 10:37:28</td><td>27</td><td>35222648.0</td><td>12192853.0</td></tr>

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
