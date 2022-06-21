import { Text, View, Image } from "react-native";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { COLORS } from "../../constants/theme";

export const TabBarIcon = ({ name, source, isFocuse,lengthOfProducts = false, Icon }) => {
  return (
    <View style={tw`justify-center relative items-center flex-col`}>
      <Image
        source={source}
        resizeMode="contain"
        style={[
          tw`w-6 h-6`,
          { tintColor: isFocuse ? COLORS.primary : "#738c94" },
        ]}
      />
      <Text
        style={[
          tw`font-semibold mt-1 text-xs`,
          { color: isFocuse ? COLORS.primary : "#738c94" },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};
