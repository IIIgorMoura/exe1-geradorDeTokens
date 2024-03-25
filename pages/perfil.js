import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";
import { ModalTokens } from '../components/modal';
import { useState } from "react";


export function Perfil() {
    const [telaModal, configTelaModal] = useState(false);

    function abrirPopUp() {
        configTelaModal(true);
    }

    return (
        <View style={ESTILO.container}>
            <Image source={require("../assets/iconUser.png")} style={ESTILO.iconUser} />
            <Text style={ESTILO.titulo}>
                Entre para ver seu perfil
            </Text>

            <TouchableOpacity style={ESTILO.btnLogin} onPress={abrirPopUp}>
                <Text style={ESTILO.txt}>
                    Fazer login
                </Text>
            </TouchableOpacity>


            <Text style={ESTILO.txt}>
                Não tem uma conta?
            </Text>

            <TouchableOpacity style={ESTILO.btnCadastro}  onPress={abrirPopUp}>
                <Text style={ESTILO.btnCadastroText}>
                    Cadastre - se aqui
                </Text>
            </TouchableOpacity>

            <Modal visible={telaModal} animationType="fade" transparent={true}>
                <ModalTokens fechar={() => configTelaModal(false)} />
            </Modal>
        </View>
    )
}

const ESTILO = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconUser: {
        width: "200px",
        height: "200px",
    },
    area: {
        marginBottom: 14,
        marginTop: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8
    },
    btnLogin: {
        backgroundColor: "#7709E5",
        width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: "10px",
    },
    btnCadastro: {
        backgroundColor: "none",
        width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: "10px",
    },
    txt: {
        color: "#fff",
    },
    btnCadastroText: {
        color: "#7709E5"
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        margin: "20px",
    }
})