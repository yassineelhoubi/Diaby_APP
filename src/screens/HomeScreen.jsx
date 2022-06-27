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
import { Divider, Modal } from "react-native-paper";
import { DiaryInputModal } from "../modules/userDiary";
import { List } from 'react-native-paper';
import { useGetAllByQueryStringQuery } from "../app/features/userDiary/userDiary.api";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    console.log("refreshing");
  }, [refreshing]);

  const { user } = useSelector(state => state.user.user);
  const { data: historyData, isLoading } = useGetAllByQueryStringQuery(`userId=${user._id}`);

  const [modalVisible, setModalVisible] = useState(false);
  const [userDiary, setUserDiary] = useState({ type: "", value: "" });
  const handleModalVisibility = {
    setModalVisible,
    modalVisible
  }
  const handleUserDiary = {
    setUserDiary,
    userDiary
  }

  const actions = [
    {
      text: "Sugar Level",
      icon: require("./../../assets/png/diabetes.png"),
      name: "sugarLevel",
      position: 1,
      color: COLORS.primaryText,
    },
    {
      text: "Insulin",
      icon: require("./../../assets/png/injection.png"),
      name: "insulin",
      position: 2,
      color: COLORS.primaryText,
    },
    {
      text: "Pill",
      icon: require("./../../assets/png/pill.png"),
      name: "pill",
      position: 3,
      color: COLORS.primaryText,
    }
  ]


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

        <View style={tw`-mt-6 bg-gray-200 rounded-t-5 w-full min-h-100 `}>
          <View style={tw`w-full  p-2 items-center`}>
            <View style={tw`p-1 w-[40px] rounded-full bg-gray-600 `}></View>
          </View>

          <View style={tw`p-3 pt-4 w-full `}>
            <Text style={{ color: COLORS.primary, fontSize: 30, fontWeight: "bold", letterSpacing: 3 }}>History</Text>
          </View>

          {historyData && historyData.map((item, index) => (

            <View key={index}>
              <List.Item
                title={`Type: ${item.type}`}
                description={`Value: ${item.value}`}
                key={item._id}
                left={() => <List.Icon key={index} color={COLORS.primaryText} icon="folder" />}
              />
              <Divider />
            </View>
          ))}
        </View>
        <StatusBar style="dark" />
      </ScrollView>

      <FloatingAction
        actions={actions}
        color={COLORS.primary}
        onPressItem={name => {
          setUserDiary({
            type: name,
          })
          setModalVisible(true);
        }}
      />
      <DiaryInputModal handleModalVisibility={handleModalVisibility} handleUserDiary={handleUserDiary} />
    </View>

  );
}

const styles = StyleSheet.create({
  map: {
    width: SIZES.width,
    height: SIZES.height,
  }
});
