import { Text, TouchableOpacity, View } from "react-native";

const styles = {
  border: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,
    padding: 10,
    outerWidth: 0,
    margin: 10,
    textAlign: "center",
  },
};

const SecondScreen = () => {
  const showAlert = (game) => {
    game === "mobile legends"
      ? alert("You Choose Mobile Legends")
      : game === "pubg"
      ? alert("You Choose PUBG")
      : alert("You Clicked It!");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lavender",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={[styles.border, { backgroundColor: "skyblue" }]}>
        <Text style={{ textAlign: "center", fontWeight: 900 }}>
          Mobile Legend
        </Text>
        <Text>
          Mobile Legends is a multiplayer online battle arena (MOBA) game. The
          two opposing teams fight to reach and destroy the enemy’s base while
          defending their own base for control of a path.
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.border, { backgroundColor: "white" }]}
        onPress={() => showAlert("mobile legends")}
      >
        <Text style={{ fontWeight: 500, color: "lightcoral" }}>
          Mobile Legends Button
        </Text>
      </TouchableOpacity>
      <View style={[styles.border, { backgroundColor: "cornflowerblue" }]}>
        <Text style={{ textAlign: "center", fontWeight: 900 }}>PUBG</Text>
        <Text>
          PlayerUnknown’s Battlegrounds, better known as PUBG, is a multiplayer
          battle royale game in which players drop onto an island and fight to
          be the last one left standing.
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.border, { backgroundColor: "white" }]}
        onPress={() => showAlert("pubg")}
      >
        <Text style={{ fontWeight: 500, color: "teal" }}>PUBG Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;
