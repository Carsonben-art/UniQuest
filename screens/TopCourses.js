import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const TopCourses = () => {
  const courses = [
    {
      id: "0",
      image: require("../assets/images/class.jpg"),
      name: "Software",
    },
    {
      id: "1",
      image: require("../assets/images/class1.jpg"),
      name: "Science",
    },
    {
      id: "2",
      image: require("../assets/images/class2.jpg"),
      name: "Analysis",
    },
    {
      id: "3",
      image: require("../assets/student.jpg"),
      name: "Finance",
    },
    {
      id: "4",
      image: require("../assets/images/class.jpg"),
      name: "Project ",
    },
  ];
  return (
    <View style={styles.container}>
        {/* <Text style={{marginLeft: 10, fontSize: 25, fontWeight: '800', color: '#493d8a'}}>Top Courses</Text> */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {courses.map((item, index) => (
          <View key={item.id} style={{margin: 10}}>
            <Image
              source={item.image}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <Text style={{marginTop: 6, textAlign: 'center'}}>{item.name}</Text>
          </View>
        ))}
       
      </ScrollView>
    </View>
  );
};

export default TopCourses;

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
});
