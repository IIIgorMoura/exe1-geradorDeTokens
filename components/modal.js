import { View, StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";

export function ModalTokens({ fechar }) {
    return (
        <View style={ESTILO.container}>
            <View style={ESTILO.content}>
                <Text style={ESTILO.title}>
                    Insira seus dados
                </Text>

                <Text style={ESTILO.txt}>
                    E-Mail
                </Text>
                <input style={ESTILO.inputTxt}></input>

                <Text style={ESTILO.txt}>
                    Senha
                </Text>
                <input style={ESTILO.inputTxt}></input>

                <View style={ESTILO.buttonArea}>
                    <TouchableOpacity style={[ESTILO.button, ESTILO.btnVoltar]} onPress={fechar}>
                        <Text style={ESTILO.txt}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ESTILO.button, ESTILO.btnEntrar]} >
                        <Text style={ESTILO.btnEntrarText}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const ESTILO = StyleSheet.create({
    container: {
        backgroundColor: "rgba(25,25,25,0.6)",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: "#454545",
        width: "85%",
        height: "80%",
        paddingTop: 25,
        paddingBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 25,
    },
    innerToken: {
        backgroundColor: "#0e0e0e",
        width: "85%",
        padding: 14,
        borderRadius: 8
    },
    txt: {
        color: "#FFF",
    },
    buttonArea: {
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        alignItems: "center",
        marginBottom: 14,
        marginTop: 14,
        margin: 9,
        padding: 8,
        backgroundColor: "none",

        borderRadius: 8,
    },
    btnVoltar: {
        borderColor: "#fff",
        borderWidth: "2px",
    },
    btnEntrar: {
        backgroundColor: "#7709E5"
    },
    btnEntrarText: {
        color: "#FFF",
        fontWeight: "bold"
    },
    inputTxt: {
        width: "80%",
        height: "35px",
        paddingLeft: "10px",
        marginTop: "10px",
        marginBottom: "20px",
        borderRadius: "10px",
        backgroundColor: "#000",
        color: "#fff",
    },
})