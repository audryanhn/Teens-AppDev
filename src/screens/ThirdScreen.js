import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ThirdScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "mistyrose",
        flexDirection: "column",
      }}
    >
      <ScrollView>
        <View style={{ backgroundColor: "red" }}>
          <Image
            style={styles.image}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyZHb1xRALpxnlM7JNL6HeKlk0z5-fVv0Yw&s",
            }}
          />
          <Text style={[styles.text, { textAlign: "center" }]}>Pikachu</Text>
        </View>

        <View style={{ backgroundColor: "blue" }}>
          <Image
            style={styles.image}
            source={require("../../assets/flareon.jpg")}
          />
          <Text style={styles.text}>Flareon</Text>
        </View>

        <View style={{ backgroundColor: "orange" }}>
          <Image
            style={styles.image}
            source={require("../../assets/Rapidash.jpg")}
          />
          <Text style={styles.text}>Rapidash</Text>
        </View>
        <View style={{ backgroundColor: "teal" }}>
          <Image
            style={styles.image}
            source={{
              uri: "https://d18xazalilbrpm.cloudfront.net/media/catalog/product/cache/a79ec3f7a1096baffe71b5bb544d7c70/c/r/cr-10010046_001_alt100.jpg",
            }}
          />
          <Text style={styles.text}>Bulbasaur</Text>
        </View>
        <View style={{ backgroundColor: "salmon" }}>
          <Image
            style={styles.image}
            source={{
              uri: "https://pokestop.io/img/pokemon/psyduck-256x256.png",
            }}
          />
          <Text style={styles.text}>Psyduck</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 30,
    padding: 10,
    textAlign: "center",
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
    borderRadius: 100,
    marginTop: 40,
  },
});

export default ThirdScreen;
