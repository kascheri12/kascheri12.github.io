# Installing, Running, and Testing Golem 0.9.0 on Ubuntu 16.04

###### Notes
  * This tutorial will cover golem version 0.9.0
  * Ubuntu 16.04

#### Table of Contents
  * **[Google Cloud](#google-cloud-deployment)**
  * **[VirtualBox](#virtualbox-deployment)**
  * **[Golem Installation](#golem-installation)**
  * **[Golem Execution](#executing-golemapp--golemcli)**
  * **[Testing Golem](#testing-golem)**

## Google Cloud Deployment

**Google is offering $300 to anyone with a Credit Card and phone number for verification.**
**I claimed a few free offers and got hooked. Be warned, those GPU's drain the bank quickly.**

1. Visit [Google Cloud](https://console.cloud.google.com)
  * Create new account or use existing one
  * Verify with phone number
    * Hint: You can do this 5 times via text and 3 or 4 times via voice.

1. Sign up for the free $300 credit for using the service
  * You do need to provide address and Credit Card info to Google, however interested you are in doing that.
  * I believe, and don't quote me on this - that they don't charge you until you "upgrade" your account.

1. Once logged in and viewing the console, select Compute Engine from the left side panel.
  * `Create` a VM
  * Select a location
    * Hint: Check out the location info to see CPU specs per location
  * Machine Type
    * Minimum requirements I've found to work excellent:
      * 1 vCPU, 7GB RAM, Ubuntu 16.04, 30GB SSD
      
1. While waiting for that to be created, go to VPC Network -> Firewall Rules
  * Create two firewall rules, egress and ingress
  * For ease and simplicity, I just target all instances in the network, and IP ranges of `0.0.0.0/0` and Allow all.
  * Make sure to repeat for the other direction; if you did egress first, you also need an ingress rule.
  
1. You're done settings up the environment for Google, navigate back to Compute Engine and 
SSH into the machine and move to [Golem Installation](@golem-installation).

  
## VitualBox Deployment

1. Install [VirtualBox](https://virtualbox.org)

1. Download latest version of [Ubuntu 16.04](http://releases.ubuntu.com/16.04/)

1. VirtualBox Preferences
  * File->Preferences->Network->Host-Only Networks
    * Make sure there is at least one entry, if not add one.

1. New VM
  * Name: golem; Type: Linux; Version: Ubuntu (64-bit); 10GB RAM
  
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

1. Start VM & Install Ubuntu 16.04
  * Hint: Defaults are fine (Press enter about 8 times in a row)

  
## Golem Installation

1. SSH into VM
  * Issue commands below to install golem and dependencies

```

#### Download Golem RC, Decompress ####
wget https://github.com/golemfactory/golem/releases/download/0.9.0/golem-linux_x64-0.9.0.tar.gz
tar xvzf golem-linux_x64-0.9.0.tar.gz


#### Download and install Docker ####
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce


#### Add docker group to current user
sudo usermod -aG docker ${USER}


#### Download and install HyperDrive ####
wget https://github.com/mfranciszkiewicz/golem-hyperdrive/releases/download/v0.2.3/hyperg_0.2.3_linux-x64.tar.gz
tar xvzf hyperg_0.2.3_linux-x64.tar.gz
sudo cp -r hyperg/* /usr/local/bin


#### Check python #### Maybe Optional/Unnecessary
which python3
sudo ln -s /usr/bin/python3 /usr/local/bin/python


#### Restart ####
sudo shutdown -r now

```

## Executing Golemapp & Golemcli

You're going to want at least 2-3 command line threads most likely.
  1. golemapp
  2. golemcli
  3. automated task creation (for testing)
  
Use `tmux` for different threads inside the same ssh session. 
Also the `tmux` threads persist when the ssh session disconnects.
The most useful `tmux` commands I use all the time:
  * `tmux` - Open new thread
  * `Ctrl + b, d` - exit current thread without killing
  * `tmux ls` - list threads
  * `tmux a -t 0` - Attach to target thread giving list value from ls output
  * `Ctrl + b, [` - Allows for scrolling, page-up, page-down, q to quit

Moving on.... now lets get started with running golem

```

# Start new thread
tmux
# Start golemapp from this thread (always thread 0)
cd ~/golem-0.9.0
./golemapp

# Exit the tmux thread and start another
# Ctrl + b, d
tmux
# Start the golemcli to see diagnostics
cd ~/golem-0.9.0
./golemcli -i

# Go back to thread 0 where golemapp is running to inspect logs
# Ctrl b, d
tmux ls  # View all tmux threads
tmux a -t 0  # Attach to thread 0

```
  
## Testing Golem
