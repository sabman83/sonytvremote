const appControlVersion = '1.0';
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


let getAppUri = (appName) => {
    var n = appMap[appName];
    if(n) {
      return {
        uri: appMap[appName]
      }
    } else {
      return {};
    }
  }

const setApp = (tv, appName) => {
  return tv.appControl.invoke('setActiveApp', appControlVersion, getAppUri(appName))
    .then(success => { return 1})
    .catch(error => {
        console.error(error);
        return 0;
      }
    );
}
exports.setApp = setApp;
