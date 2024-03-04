import { View, Text, StyleSheet,Image } from "react-native";

export default function App() {
  return(
    <View style={Style.container}>
        <Image source={require("./assets/logo.png")} style={Style.logo}/>
        
        <Text>
          Arroz
        </Text>
    </View>
  )
}

const Style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#f3f3f3",
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    marginBottom: 60,
  },
});