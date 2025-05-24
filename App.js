import { SafeAreaView } from "react-native-safe-area-context";
import ThirdScreen from "./src/screens/ThirdScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThirdScreen />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ff9",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#999",
//     fontWeight: "900",
//   },
// });
