import React, { useEffect, useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  Image,
  RefreshControl,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Ionicons } from '@expo/vector-icons';
import { Button, Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { FloatingAction } from "react-native-floating-action";


const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export  function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);



  const actions = [
    {
      text: "Create Post",
      icon: require("./../../assets/png/heart.png"),
      name: "NewPost",
      position: 1
    },
  ]

  const navigation = useNavigation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
console.log("refreshing");
  }, [refreshing]);

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{ flex: 1 }}
      >

        <View
          style={[
            tw`w-full p-5`,
            {
              backgroundColor: COLORS.primary,
            },
          ]}
        >

          <View style={[tw`w-full py-4 justify-between items-end flex-row`]}>
            <View>
              <Text style={[tw`text-base text-white capitalize font-bold`]}>
                dimanche
              </Text>
              <Text style={[tw`text-6xl mt-1 text-white capitalize font-black`]}>
                Sept. 19
              </Text>
            </View>
            <View>
              {/* Profile pic */}
              <Image
                source={require("../../assets/png/smileGirl.png")}
                style={[tw`h-12 w-12 rounded-full mb-2`]}
              />
            </View>
          </View>

          {/* main pic */}
          <Image
            source={require("../../assets/png/ads.jpg")}
            style={[tw`w-full h-[250px] rounded-xl bg-gray-600 mb-6`]}
          />
        </View>

        <View style={tw`-mt-6 bg-gray-200 rounded-t-5 w-full `}>
          <View style={tw`w-full  p-2 items-center`}>
            <View style={tw`p-1 w-[40px] rounded-full bg-gray-600 `}></View>
          </View>

          <View style={tw`p-3  pt-4 w-full `}>
            <Text style={tw`text-3xl font-bold pl-3`}>History</Text>
          </View>

          {[1, 1, 1, 1].map((item, index) => (


            <View style={tw`p-2 w-full `} key={index}>
              
              <View style={tw`flex-row justify-between h-15 rounded-5 bg-sky-100`}>
                <Text style={tw`text-base font-bold`}>test {item}</Text>
                
              </View>
            </View>
          ))}


        </View>
        <StatusBar style="dark" />
      </ScrollView>

      <FloatingAction
        actions={actions}
        color={COLORS.primary}
        onPressItem={name => {
          navigation.navigate("AddPost");
        }}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  map: {
    width: SIZES.width,
    height: SIZES.height,
  },
});
