import { Button, Text, View } from "react-native";

const FirstScreen = () => {
  const onClick = () => {
    alert("HAI SAYANG");
  };

  return (
    <View style={styles.view}>
      <Text>
        {/*  This is an example of an Element written in a Javascript Function */}
        Hello World!
      </Text>
      <Button title="Try to Click This one" onPress={onClick} />
    </View>
  );
};

const styles = {
  view: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
};
export default FirstScreen;
