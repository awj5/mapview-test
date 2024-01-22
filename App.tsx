import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function App() {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.container}
      initialRegion={{
        latitude: -33.865143,
        longitude: 151.2099,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
