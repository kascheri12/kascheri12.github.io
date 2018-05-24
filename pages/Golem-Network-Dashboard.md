---
title: Dashboard
---

# Golem Network Dashboard


<div id="Golem-Network-Summary"></div>

### Golem Network Summary

This is a summary of some standard resources along with a basic active node count. The three values for CPU Cores, Allowed Resource Memory, and Allowed Resource Size are found based on summing the corresponding values of the active nodes in a snapshot and dividing each by the number of snapshots.

<iframe style="width:100%;height:600px" src="{{ base }}/{{ site.graphs_dir }}/golem-network.html"></iframe>


<div id="Average-Daily-Subtasks-Totals"></div>

### Average Daily Subtask Totals

This one shows the average values per day of snapshots of new unique nodes, subtasks requested, and subtasks computed on the date. Many nodes can come and go throughout the day so I thought that an average amongst the snapshots collected per day would work as a standard daily metric for these graphs.

The function that builds these values is [get_avg_daily_subtask_totals()](https://github.com/kascheri12/golem_util/blob/4b40695b16f120776a49613bf94678f732ef2b93/analyze_data.py#L701).

Here's pseudo code for the functions:
  * [get_avg_requested_subtasks_on_date(list_nodes_on_date,distinct_timestamps_on_date)](https://github.com/kascheri12/golem_util/blob/4b40695b16f120776a49613bf94678f732ef2b93/analyze_data.py#L646)
    * total_count_requested_subtasks = sum( requested_subtasks ) in list_nodes_on_date
    * return total_count_requested_subtasks / len(distinct_timestamp_on_date)
  * [get_avg_subtasks_completed_on_date(list_nodes_on_date,distinct_timestamps_on_date)](https://github.com/kascheri12/golem_util/blob/4b40695b16f120776a49613bf94678f732ef2b93/analyze_data.py#L650)
    * total_count_requested_subtasks = sum( requested_subtasks ) in list_nodes_on_date
    * return total_count_subtasks_success / len(distinct_timestamps_on_date)
  
The reason that the average total completed subtasks on a given date is greater than the average requested subtasks is because this is only a snapshot in time of the nodes that are connected. A node that has completed subtasks for another might still be connected to the network while the requested has since left the network thereby removing that count from future snapshots while it is disconnected.

<iframe style="width:100%;height:600px" src="{{ base }}/{{ site.graphs_dir }}/avg_daily_subtasks_totals.html"></iframe>


<div id="Average-Daily-Failed-Totals"></div>

### Average Daily Failed Totals

<iframe style="width:100%;height:600px" src="{{ base }}/{{ site.graphs_dir }}/avg_daily_failed_totals.html"></iframe>


<div id="Average-Nodes-Connected-per-Day"></div>

### Average Active Nodes per Day

This one is pretty straight-forward. Snapshots only include active nodes, inactive node data is not being collected during a snapshot.

Pseudo code:
  * [get_avg_nodes_connected_on_date(date)](https://github.com/kascheri12/golem_util/blob/4b40695b16f120776a49613bf94678f732ef2b93/analyze_data.py#L625)
    * Find all_dist_timestamps_logged_on_date from all_nodes_logged_on_date
    * return len(all_nodes_logged_on_date) / len(all_timestamps_logged_on_date)

<iframe style="width:100%;height:600px" src="{{ base }}/{{ site.graphs_dir }}/avg_daily_nodes_connected.html"></iframe>


<div id="Average-New-Unique-Node-Count-per-Day"></div>

### Average New Unique Node Count per Day

Node ID's collected and referenced below are only ones collected in the time that I've been collecting data.

Pseudo code:
* [get_avg_new_unique_node_count_on_date(date)](https://github.com/kascheri12/golem_util/blob/4b40695b16f120776a49613bf94678f732ef2b93/analyze_data.py#L630)
  * Gather lists of distinct_node_ids_logged_on_date, distinct_timestamps_on_date, and distinct_node_ids_logged_before_date
  * Get new_unique_nodes_on_date from distinct_node_ids_logged_on_date that are not in distinct_node_ids_logged_before_date
  * return len(new_unique_nodes_on_date)/len(distinct_timestamps_on_date)

<iframe style="width:100%;height:600px" src="{{ base }}/{{ site.graphs_dir }}/avg_daily_unique_totals.html"></iframe>


<div id="New-Unique-Node-Count-per-Snapshot"></div>

### New Unique Node Count per Snapshot

This one takes the longest to build because of the iterative nature of continuing to compare a growing list of values in the past that are not newly unique nodes anymore.

Pseudo code:
  * [build_y_axis_dict_for_new_unique_over_last_days(x_axis)](https://github.com/kascheri12/golem_util/blob/4b40695b16f120776a49613bf94678f732ef2b93/analyze_data.py#L258)
    * Iterate throughout each timestamp on the x_axis
      * Find distinct_ids_before_ts
      * Then find new_nodes_this_ts from all_nodes_this_ts not in distinct_id_before_ts
      * Find cnt_distinct_ts_for_new_nodes
      * avg_new_for_ts = len(new_nodes_this_ts) / cnt_distinct_ts_for_new_nodes

<iframe style="width:100%;height:600px" src="{{ base }}/{{ site.graphs_dir }}/new_unique_node_count_per_snapshot.html"></iframe>
