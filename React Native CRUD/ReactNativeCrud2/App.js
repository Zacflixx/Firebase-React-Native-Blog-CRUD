import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Alert,
  Platform,
  TouchableHighlight,
} from "react-native";
import Task from "./components/Task";
import CheckBox from "@react-native-community/checkbox";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);

    setCheckItems([...checkItems, toggleCheckBox]);
    setToggleCheckBox(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);

    setTaskItems(itemsCopy);

    let checkCopy = [...checkItems];
    checkCopy.splice(index, 1);
    setCheckItems(checkCopy);
  };

  const [toggleCheckBox, setToggleCheckBox] = useState();
  const [checkItems, setCheckItems] = useState([]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        //  source = {{uri:'https://i.pinimg.com/736x/71/0d/70/710d704e49cecf06c3303c67ed432c31.jpg'}}
        source={require("./assets/bg.jpg")}
      >
        {/* Added this scroll view to enable scrolling when list gets longer than the page */}
        {/* Today's Tasks */}{" "}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}> Today 's tasks </Text>

          <View style={styles.items}>
            {" "}
            {/* This is where the tasks will go! */}{" "}
            <ScrollView style={styles.scroller}>
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.zole} key={index}>
                    <Task text={item} />{" "}
                    <CheckBox
                      style={styles.CheckBox}
                      key={index}
                      disabled={false}
                      value={toggleCheckBox}
                    />{" "}
                    <TouchableOpacity
                      style={styles.circular}
                      key={index}
                      onPress={() => {
                        completeTask(index);
                      }}
                    >
                      <Text style={styles.addText2}> X </Text>{" "}
                    </TouchableOpacity>{" "}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>{" "}
          </View>
        </View>
        {/* Write a task */}{" "}
        {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}{" "}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Write a task"}
            value={task}
            onChangeText={(text) => setTask(text)}
          />{" "}
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}> + </Text>{" "}
            </View>{" "}
          </TouchableOpacity>{" "}
        </KeyboardAvoidingView>{" "}
      </ImageBackground>{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  CheckBox: {
    color: "red",
    backgroundColor: "#FFF",

    fontSize: 26,
    textAlign: "center",
    color: "#0d3e59",
    alignItems: "center",
    marginTop: 8,
    marginRight: 10,
    opacity: 0.7,
  },
  ImageBackground: {
    flex: 1,
    position: "relative",
  },

  zole: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  circular: {
    width: 42,
    height: 42,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
    flex: 0.2,
  },
  scroller: {
    backgroundColor: "#d6f2ff",
    paddingTop: 20,
    paddingBottom: 2,

    borderColor: "#cbe4f2",
    borderWidth: 2,
    borderRadius: 15,
    opacity: 0.9,
  },
  container: {
    flex: 1,
    backgroundColor: "#849abd",
  },
  taskWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 40,
    borderColor: "#55BCF6",
    borderWidth: 0.5,
  },
  items: {
    marginTop: 30,
    marginBottom: 120,
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 160,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#cbe4f2",
    borderWidth: 2,
  },
  addText: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 5,
  },
  addText2: {
    fontSize: 26,
    textAlign: "center",
    color: "#0d3e59",
    alignItems: "center",
    marginBottom: 80,
  },
});
