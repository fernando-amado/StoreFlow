import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

export class Utilidades {
  static async cambiarStatusBar(style: 'Dark' | 'Light') {
    if (!Capacitor.isNativePlatform()) return;
    await StatusBar.setStyle({ style: Style[style] });
  }

  // static async showSplash() {
  //   await SplashScreen.show({
  //     autoHide: true,
  //     showDuration: 3000,
  //   });
  // }
}
