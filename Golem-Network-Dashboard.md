# Golem Network Dashboard


### Golem Network Summary

My most mature graph that I've built to date is this summary of some important network resources and basic node count.

<iframe style="width:100%;height:600px" src="golem-network.html"></iframe>


### Daily Aggregate Totals

This is a new one I'm trying to understand and nail down. The idea is that I'm finding the average values for these measurements on the date based on all the snapshots I have accumulated for that date. Many nodes can come and go throughout the day so I thought that an average would be more accurate.

<iframe style="width:100%;height:600px" src="daily_aggregate_totals_10_days.html"></iframe>


### Average Nodes Connected per Day

<iframe style="width:100%;height:600px" src="daily_avg_nodes_connected_10_days.html"></iframe>


### New Unique Node Count per Snapshot

The way I'm finding these values are by counting the number of node_id's in a snapshop that aren't in any previous snapshots. This is the y value of the graph.

<iframe style="width:100%;height:600px" src="summary_last_10_days.html"></iframe>
