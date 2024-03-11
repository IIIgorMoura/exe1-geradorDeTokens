import { View, Text, StyleSheet, Image } from "react-native";
import Slider from "@react-native-community/slider";

export function Home() {
    return (
        <View style={Style.container}>
            <Image source={require("../assets/logo.png")} style={Style.logo} />

            <Text>
                Arroz
            </Text>

            <View style={Style.area}>
                <Slider style={{ height: 50 }}
                    
                    minimumValue={6}
                    maximumValue={20}

                    minimumTrackTintColor="#ff0000"
                    maximumTrackTintColor="#000"
                    thumbTintColor="#392de9" />
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3",
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        marginBottom: 60
    },

    area: {
        marginBottom: 14,
        marginTop: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8
    }
});