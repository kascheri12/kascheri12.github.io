# Mainnet Testing on April 25, 2018

## Requestor Testing Nodes

This test was conducted with two nodes as requestors located in different parts of the world at approx the same time.

1. MacBook Pro - MacOS 10.13.4
  * Location: Oregon, North America
  * [Machine Specs](https://everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-i7-2.8-15-dual-graphics-mid-2015-retina-display-specs.html)

2. Google Cloud Platform - Ubuntu 16.04 LTS
  * Location: St. Ghislain, Belgium
  * [1 vCPU, 6.5 GB, 30 GB SSD](https://cloud.google.com/compute/docs/regions-zones/)

## Task Template

Today's test will be rendering a very simple blender file, the Golem Header blender file from [golem.timejones.id.au](http://golem.timjones.id.au/).

The sample task settings I used for this test were 50 subtasks per task, resolution of 6000x4000, a bidding price of 3GNT, and a subtask timeout of 8 minutes.

Shown below is a snippet of how I'm building the skeleton frame of the task before writing it to a file and utilizing the `golemcli` tool to add the task file.

```
self.build_simple_golem_header_task(50,6000,4000,3,8)

def build_simple_golem_header_task(self,subtasks,height,width,price,subtask_to_min):
  ts = {
    "name":"Golem Task Simple",
    "type": "Blender",
    "subtasks": subtasks,
    "options": {
        "frame_count": 1,
        "output_path": "",
        "format": "PNG",
        "resolution": [
            height,
            width
        ],
        "frames": "1",
        "compositing": False
    },
    "timeout": "20:00:00",
    "subtask_timeout": "0:"+str(subtask_to_min)+":00",
    "bid": price,
    "resources": self.res_golem_header
  }

```

## Timing

Since I chose to have a large amount of subtasks per task during this test I also decided to only request a new task once per hour. I checked back up after a few hours had elapsed and both requesting nodes were doing great!

The *MacBook* output below shows the tasks being created each hour followed by the tasks being computed and completed.

```
(venv) MacBook-Pro:golem_util$ python create_task.py
Create new task 2018-04-25 01:13:30.042552
Create new task 2018-04-25 02:13:30.043537
...
Create new task 2018-04-25 21:13:30.043349
Create new task 2018-04-25 22:13:30.046377

>> tasks show
id                                    ETA        subtasks  status     completion
------------------------------------  -------  ----------  ---------  ------------
4bdd8ee2-484c-11e8-8a84-656778299a23  0:00:00          50  Finished   100.00 %
ad80654a-4854-11e8-a351-656778299a23  0:00:00          50  Finished   100.00 %
...
d553f406-4892-11e8-af9a-656778299a23  0:19:03          50  Computing  98.00 %
6a88185c-48f7-11e8-a199-656778299a23  0:00:00          50  Finished   100.00 %
cc49c486-48ff-11e8-a21e-656778299a23  0:06:24          50  Computing  96.00 %
2de49a9a-4908-11e8-b141-656778299a23  0:00:00          50  Finished   100.00 %

```

As I write this it's coming up on 12 hours since the above task has been stuck at 98%, I don't have high hopes that it's going to finish successfully. And the same goes with the task at 96% also. Those are two casualties out of the 27 tasks in the past 24 hours from this one node alone. As an additional note on this topic - I tried to restart a few failed subtasks with command `golemcli subtasks restart id` for the task stuck at 98% but it didn't show signs of change.

The Ubuntu node was flawless and had a 100% completion, until the very end!

The CPU usage was running quite high around the 22 hour period. This screenshot shows the rise in CPU usage throughout the day:
<img src="/20180425_CPU_Usage.png" alt="Google Cloud Platform CPU Usage over past 24 hours throughout test" style="max-width: 40%;">

When I logged into the node and my tmux session, the `golemcli` command was giving me RPC: call errors for any command I gave it.

Instead of waiting it out, I canceled the creation of any new tasks and chose to restart the node before waiting for it to finish the task it was currently computing.

After restarting the node and waiting a few hours there's been no change in the task stuck at 78%.

```
(venv) kascheri12@instance-4:~/golem_util$ python create_task.py
Create new task 2018-04-25 06:32:27.811656
Create new task 2018-04-25 07:32:27.911531
...
Create new task 2018-04-26 03:32:27.911601
Create new task 2018-04-26 04:32:27.911614


>> tasks show
id                                    ETA        subtasks  status     completion
------------------------------------  -------  ----------  ---------  ------------
032e6ada-48b7-11e8-8798-1079749b012b  0:00:00          50  Finished   100.00 %
3f87d438-48a6-11e8-8865-1079749b012b  0:00:00          50  Finished   100.00 %
a0deb5b8-48ae-11e8-941b-1079749b012b  0:00:00          50  Finished   100.00 %
eca2da1c-48e0-11e8-a84b-1079749b012b  0:00:00          50  Finished   100.00 %
65ff2ea4-48bf-11e8-bcef-1079749b012b  0:00:00          50  Finished   100.00 %
cf18440c-485a-11e8-82d7-1079749b012b  0:00:00          50  Finished   100.00 %
4fa40eae-48e9-11e8-9da5-1079749b012b  0:00:00          50  Finished   100.00 %
2eb7bb42-48d0-11e8-8cfc-1079749b012b  0:00:00          50  Finished   100.00 %
7bd04a78-4895-11e8-bd2d-1079749b012b  0:00:00          50  Finished   100.00 %
57bad9b4-487c-11e8-aca1-1079749b012b  0:00:00          50  Finished   100.00 %
ddccda52-489d-11e8-88f0-1079749b012b  0:00:00          50  Finished   100.00 %
7563f1cc-4902-11e8-8065-1079749b012b  0:00:00          50  Finished   100.00 %
94eccf8a-486b-11e8-a365-1079749b012b  0:00:00          50  Finished   100.00 %
f496d318-4873-11e8-b53a-1079749b012b  0:00:00          50  Finished   100.00 %
b1298a2c-48f1-11e8-b205-1079749b012b  0:00:00          50  Finished   100.00 %
19f66fac-488d-11e8-9d3b-1079749b012b  0:00:00          50  Finished   100.00 %
c74d2594-48c7-11e8-83b6-1079749b012b  0:00:00          50  Finished   100.00 %
d6d70f76-490a-11e8-aa55-1079749b012b  0:23:24          50  Computing  78.00 %
30e45e86-4863-11e8-8831-1079749b012b  0:00:00          50  Finished   100.00 %
6d3ca0b4-4852-11e8-8949-1079749b012b  0:00:00          50  Finished   100.00 %
12492b1c-48fa-11e8-8a1d-1079749b012b  0:00:00          50  Finished   100.00 %
8b6f32f8-48d8-11e8-8dc9-1079749b012b  0:00:00          50  Finished   100.00 %

```



## Analyzing the Tests

As the day wore on and every few hours things seemed to be going well, it dawned on me that I could probably capture this data fairly simply using python and gather some node names from my subtask request output. If I could put these names together, I could build a 3d network graph based on this test data! How exciting!!

So I started throwing some list aggregation commands strung together in python to handle the output from `golemcli` into analyzable data.

After hours of tinkering and fidgeting with variables, I was finally able to get these 3d networks created from the data gathered from my tests.

#### Golem Network Providers in MacBook tasks
<iframe style="width:850px;height:850px;" src="golem-network-3d-20180425-macbook.html">
</iframe>
<br>
<br>
#### Golem Network Providers in Ubuntu tasks
<iframe style="width:850px;height:850px;" src="golem-network-3d-20180425-ubuntu.html">
</iframe>



## Cost Analysis

At the beginning of this test both of the nodes had a `reserved_balance` of `0 GNT` and had not requested any tasks on mainnet yet.

*MacBook Results*

  ```
  available_balance: 93.192083 GNT
  eth_balance: 0.018597 ETH
  reserved_balance: 414.400000 GNT
  total_balance: 507.592083 GNT

  ```

  26 tasks @ 50 subtasks
  2 tasks @ 20 subtasks

  * 28 total tasks = 14.8 GNT / task
  * 26 Finished tasks = 15.93846 GNT / *finished* task
  * 1335 finished subtasks = 0.31041 GNT / *completed* subtask

*Google Clout Platform Ubuntu Results*


  ```
  available_balance: 215.25 GNT
  eth_balance: 0.011440 ETH
  reserved_balance: 194.250000 GNT
  total_balance: 409.500000 GNT

  ```

  23 tasks @ 50 subtasks

  * 23 total tasks = 8.44565 GNT / task
  * 22 Finished tasks = 8.829545 GNT / *finished* task
  * 1139 finished subtasks = 0.17054 GNT / *completed* subtask


I'm pleased with these results as a benchmark for improvement.

Thank you so much to the Golem Team for all the hard work to get releases out each month, to keep the communication happening in the AMA's, blogposts, and twitter among others. Keep up the great work everybody, lets keep the community growing!
