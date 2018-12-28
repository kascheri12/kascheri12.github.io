---
title: Golem Network Globe
permalink: /globe/
---

# Golem Network Globe

<details>
<summary><strong>Details</strong></summary>
  <br />
  <p>I utilized the `golemcli` command line interface to capture the output when passing parameters `--mainnet`, `network`, and `dht`. I am able to retrieve all the known nodes per docs for <a target='\_blank' href='https://github.com/golemfactory/golem/wiki/Command-Line#network'>Command Line#network</a>.</p>

  <p>Driven by a sql database the IP addresses and lat/long of known nodes are updated every hour if the IP address of a known node_id changes.</p>
  
  <h5>Analysis</h5>

  <p>The larger the circle, the more nodes found located at the Latitude and Longitude associated with the IP address. There is a limit to 5 per marker due to size and affected area on map.</p>
  <br />
</details>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script> 
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js" type="text/javascript"></script>

<div class="globe"></div>

<p> Rotation speed & direction</p>
<input id="rotation" type="range" min="-0.005" max="0.015" step="0.000005" value="0.010" style="width: 500px"/>


<script src="//d3js.org/d3.v4.min.js"></script>
<script src="//d3js.org/topojson.v1.min.js"></script>
<script src="../assets/javascript/globe.js"></script>
