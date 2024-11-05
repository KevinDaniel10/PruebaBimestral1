import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'APP_mejorada',
  webDir: 'www',
  plugins: {
    App:{
      androidIcon: "icon"
    },
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
      backgroundColor: "#FF0000FF",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: false,
      splashImmersive: false,
      layoutName: "launch_screen",
      useDialog: false,
    },
    cordova: {
      preferences: {
        ScrollEnabled: 'false',
        BackupWebStorage: 'none',
        SplashMaintainAspectRatio: 'true',
        FadeSplashScreenDuration: '300',
        SplashShowOnlyFirstTime: 'false',
        SplashScreen: 'screen',
        SplashScreenDelay: '3000'
      }
    }
  },
};

export default config;
