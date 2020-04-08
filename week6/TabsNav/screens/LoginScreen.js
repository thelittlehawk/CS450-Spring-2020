import * as React from "react";
import { View, Button, Text, TextInput } from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  return (
    <View>
      <b>Go To Root Screen</b>
      <TextInput
        onChange={(e) => {
          setUsername(e.nativeEvent.text);
        }}
        placeholder="Enter username"
      />
      <TextInput
        onChange={(e) => {
          setPassword(e.nativeEvent.text);
        }}
        placeholder="Enter password"
      />
      <Button
        onPress={() => {
          if (username === "test" && password === "test") {
            navigation.navigate("Root", {
              newParam: 10,
            });
          } else {
            setError("Incorrect credentials.");
          }
        }}
        title="Login"
      />
      <Text>{error}</Text>
    </View>
  );
}

LoginScreen.navigationOptions = {
  header: null,
};
