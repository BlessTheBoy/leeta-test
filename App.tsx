import Providers from "@/context";
import Navigator from "@navigator/root";
import { Platform, UIManager } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Fonts } from "@/plugins/Fonts";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

SplashScreen.preventAutoHideAsync();

function App(): React.JSX.Element | null {
  const [loaded, error] = useFonts(Fonts);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Providers>
      <Navigator />
    </Providers>
  );
}

export default App;
