
const Bravia = require('bravia');
const appControlVersion = '1.0';
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

let appMap = {
  youtube: "com.sony.dtv.com.google.android.youtube.tv.com.google.android.apps.youtube.tv.activity.ShellActivity",
  hulu: "com.sony.dtv.com.hulu.livingroomplus.com.hulu.livingroomplus.WKFactivity",
  vudu: "com.sony.dtv.air.com.vudu.air.DownloaderTablet.air.com.vudu.air.DownloaderTablet.TvMainActivity",
  prime: "com.sony.dtv.com.amazon.amazonvideo.livingroom.com.amazon.ignition.IgnitionActivity",
  netflix: "com.sony.dtv.com.netflix.ninja.com.netflix.ninja.MainActivity",
  hbo: "com.sony.dtv.com.hbo.hbonow.com.hbo.go.LaunchActivity",
  plex: "com.sony.dtv.com.plexapp.android.com.plexapp.plex.activities.SplashActivity",
  vimeo: "com.sony.dtv.com.vimeo.android.videoapp.com.vimeo.android.videoapp.core.MainActivity",
};




 /** var getAppUri = (appName) => {
    var n = appMap[appName];
    if(n) {
      return {
        uri: appMap[appName]
      }
    } else {
      return {};
    }
  }


**/
const setApp = (appName) => {
  bravia.appControl.invoke('setActiveApp', appControlVersion, getAppUri(appName))
    .then(success => { return 1})
    .catch(error => {
        console.error(error);
        return 0;
      }
    );
}
exports.setApp = setApp;
