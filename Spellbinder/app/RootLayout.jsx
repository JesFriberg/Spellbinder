import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import Index from "@/app/Index";
import SpellList from "@/app/SpellList";
import NotFoundScreen from "./NotFound";

import { useColorScheme } from "@/hooks/useColorScheme";

const Stack = createNativeStackNavigator();

export default function RootLayout(props) {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Index" component={Index} options={{ title: "Home", headerShown: false }} />
          <Stack.Screen name="SpellList" component={SpellList} options={{ title: "Spell List" }} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} />
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
