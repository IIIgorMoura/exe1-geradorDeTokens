import { View, StyleSheet, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
    return (
        // <SafeAreaView style={{ flex: 1 }}>
        //     <View style={ESTILO.header}>
        //         <Text style={ESTILO.title}>
        //             Meu perfil
        //         </Text>
        //     </View>
        // </SafeAreaView>
        <View>
            
        </View>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        padding: 14,
        paddingTop: 58,
        backgroundColor: "#392de9"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    }

})