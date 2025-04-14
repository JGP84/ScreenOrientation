import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import * as ScreenOrientation from "expo-screen-orientation"

export default function HomeScreen() {
  useEffect(() => {
    const unlockScreenOrientation = async () => {
      await ScreenOrientation.unlockAsync()
    }
    unlockScreenOrientation()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hello Developers!</Text>
      <View style={styles.orientation}>
        <Text style={styles.text}>Testing Screen Orientation!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  orientation: {
    backgroundColor: "peru",
    width: "50%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
})