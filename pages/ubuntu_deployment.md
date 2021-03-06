---
title: Golem Ubuntu Deployment Instructions
---

# Installing, Running, and Testing Golem on Ubuntu 16.04

## Contents
  * **[Microsoft Azure](#microsoft-azure)**
  * **[Google Cloud](#google-cloud-deployment)**
  * **[VirtualBox](#virtualbox-deployment)**
  * **[Golem Installation](#golem-installation)**
  * **[Golem Execution](#executing-golemapp--golemcli)**
  * **[Testing Golem](#testing-golem)**

### Microsoft Azure

**Microsoft is offering $200 to anyone willing to tryout their Azure resources**

1. Visit <a href="https://portal.azure.com" target="\_blank">Microsoft Azure</a>
  * Create new account or use existing one

1. Select Virtual Machines from the menu on the left hand side of the screen

1. Select `+ Add`

1. Choose Ubuntu Server

1. Ubuntu Server 16.04 LTS

1. Select `Create`

1. Fill out the `Basics` info for your virtual machine
  * Name: golem-1
  * SSD
  * username: golemuser
  * Password
  * Resource Group: golem
  * Location: West US

1. Select the VM package you're wanting to purchase. The smallest size at the time of writing is `D2S_V3` and works for running golem.
  * Press Select

1. Settings
  * Click OK

1. `Create` the VM

While waiting for the Virtual Machine to deploy (approx 5-10 minutes),
Select `Virtual Networks` from the left hand menu,
select `golem-vnet` -> `Overview` -> `golem-1615` from Connected Devices
select IP Configurations
  * IP Forwarding : Enabled

Also need to add port forwarding rules in the security group. Those instructions will go here.

Use putty or terminal, depending on your operating system, to SSH into
the newly deployed Virtual Machine.




### Google Cloud Deployment

**Google is offering $300 to anyone with a Credit Card and phone number for verification.**
**I claimed a few free offers and got hooked. Be warned, those GPU's drain the bank quickly.**

1. Visit <a href="https://console.cloud.google.com" target="\_blank">Google Cloud</a>
  * Create new account or use existing one
  * Verify with phone number
    * Hint: You can do this 5 times via text and 3 or 4 times via voice.

1. Sign up for the **free $300 credit** for using the service
  * Need to provide address and Credit Card info
  * I believe, and don't quote me on this - you won't be charged until you "upgrade" your account.

1. From <a href="http://console.cloud.google.com" target="\_blank">Google Cloud Console</a> select **<a href="https://console.cloud.google.com/compute/" target="\_blank">Compute Engine</a>** from the left side panel.
  * `Create` a VM
  * Select a <a href="https://cloud.google.com/compute/docs/regions-zones/" target="\_blank">Zone</a>
    * Hint: Check out the location info to see CPU specs per location
  * Select a Machine Type
    * Minimum requirements I've found to work excellent:
      * 1 vCPU, 6.5GB RAM, Ubuntu 16.04, 30GB SSD

1. While waiting for that to be created, go to <a href="https://console.cloud.google.com/networking/" target="\_blank">VPC Network</a> -> <a href="https://console.cloud.google.com/networking/firewalls/" target="\_blank">Firewall Rules</a>
  * `Create` two firewall rules, __*egress*__ and __*ingress*__
  * For ease and simplicity, I just _**target all instances in the network**_, and IP ranges of `0.0.0.0/0` and **_Allow all_**.
  * Make sure to repeat for the other direction; if you did egress first, you also need an ingress rule.

1. You're done settings up the environment for Google, navigate back to
<a href="https://console.cloud.google.com/compute/" traget="\_blank">Compute Engine</a> and SSH
into the machine and move to [Golem Installation](#golem-installation).


### VitualBox Deployment

1. Install <a href="https://virtualbox.org" target="\_blank">VirtualBox</a>

1. Download latest version of <a href="http://releases.ubuntu.com/16.04/" target="\_blank">Ubuntu 16.04</a>

1. VirtualBox Preferences
  * File->Preferences->Network->Host-Only Networks
    * Make sure there is at least one entry, if not add one.

1. Windows Firewall Settings
  * *Press* `Windows Key` + r
  * *Type* wf.msc
  * Inbound Rules -> New Rule
    * TCP Rule
      * Port
      * TCP; 40103, 40104 **Think about this, these ports must be correct for this to work. Windows Firewall will block everything that's not correct**
      * Allow the connection
      * Check all boxes: Domain, Public, Private
      * GolemTCP
    * UDP Rule
      * Port
      * UDP; 40103, 40104 **Think about this, these ports must be correct for this to work. Windows Firewall will block everything that's not correct**
      * Allow the connection
      * Check all boxes: Domain, Public, Private
      * GolemUDP
  * Outbound Rules -> New Rule
    * 2 more rules, repeat the same as above.

1. New VM
  * Name: golem-1
  * Type: Linux
  * Version: Ubuntu (64-bit)
  * 10000MB RAM
  * 30GB Hard Drive

1. Setting the Settings
We want the right settings for CPU resources being allocated to this VM as well as ability to
SSH from putty or terminal (since VirtualBox's tty is atrocious)

  * Set values for RAM and CPU's
    * System->Motherboard->Base Memory(RAM)
    * System->Processor
  * Network
    * Adapter 2
      * Host-only Adapter
      * VirtualBox Host-only Ethernet Adapter
    * Adapter 1
      * Advanced->Port Forwarding
      * TCP Host Port 2222 -> Guest Port 22
      * TCP Host Port 40104 -> Guest Port 40102
      * TCP Host Port 40105 -> Gust Port 40103
      * UDP Host Port 40104 -> Guest Port 40102
      * UDP Host Port 40105 -> Guest Port 40103

1. Start VM & Install Ubuntu 16.04
  * Hint: Defaults are fine (Press enter about 8 times in a row)
  * *Tic* `openssh-server` as an installation option

### Golem Installation

1. SSH into VM
  * Issue commands below to install golem and dependencies

```
#### Download and install latest version of Golem ####
wget https://raw.githubusercontent.com/golemfactory/golem/develop/Installer/Installer_Linux/install.sh
chmod +x install.sh
./install.sh


#### Restart ####
sudo shutdown -r now


#### Dev Install Instructions ####
tmux

# Install python3.6 and dependencies
sudo add-apt-repository ppa:jonathonf/python-3.6
sudo apt-get update && sudo apt-get upgrade -y
sudo apt update && sudo apt install python3.6 python3.6-venv python3.6-dev python3-pip virtualenv -y

# Clone golem repository and create virtual environment
git clone https://github.com/golemfactory/golem.git
cd golem
virtualenv --python=python3.6 venv
source venv/bin/activate

# Install golem dependencies
sudo apt install openssl python3-dev libffi-dev pkg-config libjpeg-dev \
    libopenexr-dev libssl-dev autoconf libgmp-dev \
    libfreeimage-dev libtool python3-netifaces python3-psutil build-essential \
    python3-pip docker.io -y

# Add docker group to user
sudo usermod -a -G docker $USER

# Install hyperg
cd .. && wget https://github.com/mfranciszkiewicz/golem-hyperdrive/releases/download/v0.2.5/hyperg_0.2.5_linux-x64.tar.gz
tar xvzf hyperg_0.2.5_linux-x64.tar.gz
cp hyperg/* ~/golem/venv/bin/

# Restart the machine
sudo shutdown -r now

# Install latest source code of golem
tmux
cd golem
source venv/bin/activate
pip install -r requirements.txt
python setup.py develop
golemapp


```

### Executing Golemapp & Golemcli

You're going to want at least 2-3 command line threads most likely.
  1. golemapp
  2. golemcli
  3. automated task creation (for testing, if desired)

Use `tmux` for different threads inside the same ssh session.
Also the `tmux` threads persist when the ssh session disconnects.
The most useful `tmux` commands I use all the time:
  * `tmux` - Open new thread
  * `Ctrl + b, "` - Start new thread in bottom half of current screen
  * `Ctrl + b, ⇧` - Change focus to other area
  * `Ctrl + b, [` - Allows for scrolling; page-up, page-down, q to quit
  * `Ctrl + b, d` - exit current thread without killing
  * `tmux ls` - list threads
  * `tmux a -t 0` - Attach to target thread giving list value from ls output
  * More found [at this blog](http://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/)

Moving on.... now lets get started with running golem

```
# Start new thread
tmux
# Start golemapp from this thread
golemapp
```

Wait until you see logs for `Docker: pulling image golemfactory/base`, `Docker: pulling image golemfactory/blender`, & `Docker: pulling image golemfactory/luxrender`.
Once you see these logs (and no errors have occurred) move on to the next step.

```
# Start another tmux thread at the bottom half
# Ctrl + b, "
# Start the golemcli to see diagnostics
golemcli -i
```

From `golemcli` you can inspect settings, tasks, subtasks, etc. Play around with commands to get the feel of things.
A list of commands can be found at <a href="https://github.com/golemfactory/golem/wiki/Command-Line" target="\_blank">Golem Command Line</a>.

The first thing I like to do from `golemcli` is name my node so I know which one is mine at <a href="https://stats.golem.network" target="\_blank">Golem Stats Page</a>.

```
settings set node_name my_golem_node
settings set num_cores 2
settings set max_memory_size 6000000
settings set min_price 1
settings set getting_tasks_interval 1
```

Now go back to the first thread where golemapp is running to inspect the logs.

```
# Go back to the thread where golemapp is running to inspect logs
# Ctrl b, DOWNARROW
# Ctrl b, [ ## To initial scrolling mode. Use UPARROW to scroll
# Ctrl q    ## To quit scrolling mode.
```

At this point, if there have been no errors your node should appear on <a href="https://stats.golem.network" target="\_blank">Golem Stats Page</a>. If not, something has gone wrong and additional troubleshooting is needed. Visit <a href="https://chat.golem.network" target="\_blank">Golem Chat</a> for assistance.

### Testing Golem
This next section will be the most difficult because in order to have a
successful task request, filenames and locations must be precisely correct.
It's going to take a little bit of change, but I've built a base sample
task in a JSON style syntax that will only need some slight changes
to get working.

1. Install Dependencies
  * Unzip

  ```
  # Install Unzip
  sudo apt-get install unzip
  ```

1. *Download* and *unzip* sample golem-header.blend file

  ```
  wget http://golem.timjones.id.au/golem-header.zip
  unzip golem-header.zip
  ```

1. *Clone* golem_util repo into Git subfolder

  ```
  mkdir -p ~/Git
  cd ~/Git
  git clone https://github.com/kascheri12/golem_util.git

  ## optional - install dependencies for automation
  sudo apt-get install -y python3-pip
  pip3 install --upgrade pip
  sudo pip3 install twisted
  ```

1. Tweak a few things in the `create_task.py` file

  * **Edit** the variable `res_golem_header` to the correct file location.
  This should be `/home/<username>/golem-header.blend`. Code below
  to edit the file using vi.

    ```
    vi ~/Git/golem_util/create_task.py
    ```

  * The automation is driven by twisted's reactor. Once changes have been
  made, run `python3 create_task.py`. Make sure there's no errors in
  the golemapp logs. The most common error I found was empty resources,
  meaning I didn't put the full path of the resources I was using.
    ```
    python3 ~/Git/golem_util/create_task.py
    ```

This last part [Testing Golem](#testing-golem) is definitely the most tricky part and will require minor changes to get it to work. If you have questions, I can be found in <a href="https://chat.golem.network" target="\_blank">Golem Chat</a> `@kenny.ascheri`



<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-109439081-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-109439081-1');
</script>
