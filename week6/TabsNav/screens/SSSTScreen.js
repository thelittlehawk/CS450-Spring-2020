import * as React from "react";
import { Text, TextInput, ScrollView, View, Button } from "react-native";

import { studentsList } from "./../data";

export default function SSSTScreen() {
  const [students, setStudents] = React.useState(studentsList);
  return (
    <ScrollView>
      <Text>Students</Text>
      <TextInput
        onChange={(e) => {
          if (e.nativeEvent.text === "") {
            setStudents(studentsList);
          } else {
            setStudents(
              studentsList.filter((s) => s.fullName === e.nativeEvent.text)
            );
          }
        }}
      />
      {students.map((s) => (
        <View style={{ margin: "10px" }}>
          <Text>{s.fullName}</Text>
          <Button onPress={() => alert(s.index)} title="Details" />
        </View>
      ))}
    </ScrollView>
  );
}

SSSTScreen.navigationOptions = {
  header: null,
};
