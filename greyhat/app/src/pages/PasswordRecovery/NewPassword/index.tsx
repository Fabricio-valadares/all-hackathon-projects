import React from "react";
import { Text, TextInput, View, Image } from "react-native";
import { ReactangularButton } from "../../../components/RectangularButton";
import { theme } from "../../../global/theme";
import CofiImg from "../../../../assets/cofi_image.svg";
import BackImage from "../../../../assets/backgrund.svg";
import { BackButton } from "../../../components/BackButton";
import styles from "./styles";

export const NewPassword = () => {
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
                    Digite sua nova senha
                </Text>
            </View>

            <View style={styles.login}>
                <Text style={styles.label}>Senha :</Text>
                <TextInput
                    style={styles.input}
                    placeholder="***********"
                    placeholderTextColor={theme.whiteThirtyPercent}
                    keyboardType="email-address"
                />
                 <Text style={styles.label}>Confirme sua nova senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="**********"
                    placeholderTextColor={theme.whiteThirtyPercent}
                    keyboardType="email-address"
                />
            </View>

            <ReactangularButton text="Enviar" />
        </View>
    );
};
