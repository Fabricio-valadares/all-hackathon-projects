import React from "react";
import { Text, TextInput, View, Image } from "react-native";
import { ReactangularButton } from "../../../components/RectangularButton";
import { theme } from "../../../global/theme";
import CofiImg from "../../../../assets/cofi_image.svg";
import BackImage from "../../../../assets/backgrund.svg";
import { BackButton } from "../../../components/BackButton";
import styles from "./styles";

export const CodigoRecovery = () => {
    return (
        <View style={styles.container}>
            <View style={styles.backButtonContainer}>
                <BackButton text="Voltar" />
            </View>

            <View style={styles.backImage}>
                <BackImage />
            </View>

            <CofiImg width={290.12} height={270} />
            <View style={styles.textContent}>
                <Text style={styles.textStyle}>
                    Digite o codigo que foi mandado
                </Text>
                <Text style={styles.textStyle}>Para o seu email</Text>
            </View>

            <View style={styles.login}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui"
                    placeholderTextColor={theme.whiteThirtyPercent}
                    keyboardType="email-address"
                />
            </View>

            <ReactangularButton text="Enviar" />
        </View>
    );
};
