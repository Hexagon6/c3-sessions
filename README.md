# c3-sessions
This app lists all talks of [32c3](https://events.ccc.de/congress/2015/wiki/Main_Page).
After the basic functionality of this app is implemented I will add older conferences to the list.

# requirements
[meteor](https://meteor.com) or [docker](https://www.docker.com/)

# installation with meteor
1. `git clone https://github.com/hexagon6/c3-sessions`
2. `cd c3-sessions`
3. `meteor`

# installation with docker
1. `./build.sh` #build the container "hexagon6/c3-sessions"
2. `export MONGO_DB="mongodb://user:pw@host:27017/c3sessions"` #insert your settings for a mongodb
3. `export ROOT_URL="https://your.domain.tld"` #where people should go when accessing your app
4. `export PORT=8080` #the port where node.js should listen for connections
5. `./run.sh`

# origin
The source data in private/32c3/schedule.json, is available here (latest version ref): [http://events.ccc.de/congress/2015/Fahrplan/version](http://events.ccc.de/congress/2015/Fahrplan/version)
