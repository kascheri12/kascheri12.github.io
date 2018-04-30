# Golem Network Dashboard


### Golem Network Summary

This is the eldest of the graphs that I've built to date; this is a summary of some standard network resources along with a basic node count. The three values for CPU Cores, Allowed Resource Memory, and Allowed Resource Size are found based on summing the corresponding values of the active nodes in a snapshot.

<iframe style="width:100%;height:600px" src="golem-network.html"></iframe>


### Daily Aggregate Totals

This is a new one I'm trying to put together and nail down. I'm trying to find the average values per day of snapshots of new unique nodes, subtasks requested, and subtasks computed on the date. Many nodes can come and go throughout the day so I thought that an average amongst the snapshots collected per day would work as a standard.

The function that builds these values is [get_daily_aggregate_totals()](https://github.com/kascheri12/golem_util/blob/prod/analyze_logs.py#L560).

Here's pseudo code for the functions:
  * [get_avg_new_unique_node_count_on_date(date)](https://github.com/kascheri12/golem_util/blob/prod/analyze_logs.py#L528)
    * Gather lists of distinct_node_ids_logged_on_date, distinct_timestamps_on_date, and distinct_node_ids_logged_before_date
    * Get new_unique_nodes_on_date from distinct_node_ids_logged_on_date that are not in distinct_node_ids_logged_before_date
    * return len(new_unique_nodes_on_date)/len(distinct_timestamps_on_date)
  * [get_avg_requested_subtasks_on_date(date)](https://github.com/kascheri12/golem_util/blob/prod/analyze_logs.py#L544)
    * Find list_dist_timestamps_on_date from list_nodes_on_date
    * total_count_requested_subtasks = sum(requested_subtasks) in list_nodes_on_date
    * return total_count_requested_subtasks / len(list_nodes_on_date)
  * [get_avg_subtasks_success_on_date(date)](https://github.com/kascheri12/golem_util/blob/prod/analyze_logs.py#L552)
    * Find list_dist_timestamps_on_date from list_nodes_on_date
    * total_count_subtasks_subtasks = sum(subtasks_success) in list_nodes_on_date
    * return total_count_subtasks_success / len(list_nodes_on_date)
    

<iframe style="width:100%;height:600px" src="daily_aggregate_totals_10_days.html"></iframe>


### Average Nodes Connected per Day

This one is pretty straight-forward. 

Pseudo code:
  * [get_avg_nodes_connected_on_date(date)](https://github.com/kascheri12/golem_util/blob/prod/analyze_logs.py#L523)
    * Find all_dist_timestamps_logged_on_date from all_nodes_logged_on_date
    * return len(all_nodes_logged_on_date) / len(all_timestamps_logged_on_date)

<iframe style="width:100%;height:600px" src="daily_avg_nodes_connected_30_days.html"></iframe>


### New Unique Node Count per Snapshot

This one takes the longest to build because of the iterative nature of continuing to compare a growing list of values in the past that are not newly unique nodes anymore. This graph is not completely accurate since the node_id's being reviewed are only one's that have been logged in the data gathered here. 

Pseudo code:
  * [build_y_axis_dict_for_new_unique_over_last_days(x_axis)](https://github.com/kascheri12/golem_util/blob/prod/analyze_logs.py#L266)
    * Iterate throughout each timestamp on the x_axis
      * Find distinct_ids_before_ts
      * Then find new_nodes_this_ts from all_nodes_this_ts not in distinct_id_before_ts
      * Find cnt_distinct_ts_for_new_nodes
      * avg_new_for_ts = len(new_nodes_this_ts) / cnt_distinct_ts_for_new_nodes

<iframe style="width:100%;height:600px" src="summary_last_10_days.html"></iframe>
