import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { InputComponent } from "../components/InputComponent";

const FourthScreen = () => {
  return (
    <View style={{ margin: 16 }}>
      <ScrollView>
        <ImageBackground
          style={{
            width: "100%",
            height: 200,
            justifyContent: "flex-end",
            alignItems: "center",
            opacity: 0.8,
          }}
          imageStyle={{ borderRadius: 10 }}
          source={{ uri: "https://wallpaperaccess.com/full/250180.jpg" }}
        >
          <Text style={styles.text}>Disneyland</Text>
        </ImageBackground>

        <InputComponent
          title="Description"
          height={140}
          placeholder="About the Place"
        />
        <InputComponent
          title="Phone Number"
          height={40}
          keyboardType="number-pad"
          placeholder="Phone Number"
        />
        <InputComponent
          title="Location"
          height={40}
          keyboardType="default"
          placeholder="Location"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "mistyrose",
    padding: 8,
    margin: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    height: 140,
    fontSize: 16,
  },
});

export default FourthScreen;
