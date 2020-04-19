const Bravia = require('bravia');

// The time in milliseconds for the bravia discovery to scan for.
let timeout = 5000;


// Connects to a Bravia TV at 192.168.1.2:80 with the PSK 0000.
let bravia = new Bravia('192.168.0.105', '80', 'presharedkey');

/** Retrieves all the system method type versions.
bravia.system.getVersions()
  .then(versions => console.log(versions))
  .catch(error => console.error(error));

// Retrieves all the system method types and versions.
bravia.system.getMethodTypes()
  .then(methods => {
    console.log(methods);
    methods.forEach(function(item) {
      console.log(item);
    });
  })
  .catch(error => console.error(error));
**/

let str = JSON.stringify({
    uri: 'com.sony.dtv.com.amazon.amazonvideo.livingroom.com.amazon.ignition.IgnitionActivity',
  });

let js = JSON.parse(str);

// Retrieves all the available IRCC commands from the TV.
bravia.appControl.invoke('setActiveApp', '1.0', js)
  .then(commands => {
    console.dir(commands);
  })
  .catch(error => console.error(error));

console.log("THIS WORKS");
