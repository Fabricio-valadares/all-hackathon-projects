import React, { useState } from "react";
import { Text, TextInput, View, Image } from "react-native";
import { ReactangularButton } from "../../components/RectangularButton";
import Checkbox from "expo-checkbox";
import { theme } from "../../global/theme";
import CofiImg from "../../../assets/cofi_image.svg";
import BackImage from "../../../assets/backgrund.svg";
import { BackButton } from "../../components/BackButton";
import styles from "./styles";

export const RegisterPage = ({ navigation }) => {
    const [isTerms, setIsTerms] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.backButtonContainer}>
                <BackButton text="Voltar" onPress={() => navigation.goBack() }/>
            </View>

            <View style={styles.backImage}>
                <BackImage />
            </View>

            <CofiImg width={150.7} height={140.24} />

            <View style={styles.login}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui"
                    placeholderTextColor={theme.whiteThirtyPercent}
                    keyboardType="email-address"
                />
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui"
                    placeholderTextColor={theme.whiteThirtyPercent}
                    keyboardType="email-address"
                />
                <Text style={styles.label}>CPF:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="00.000.000-00"
                    placeholderTextColor={theme.whiteThirtyPercent}
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="***********"
                    autoComplete={"password"}
                    secureTextEntry={true}
                    placeholderTextColor={theme.whiteThirtyPercent}
                />
                <Text style={styles.label}>Confirmar sua senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="***********"
                    autoComplete={"password"}
                    secureTextEntry={true}
                    placeholderTextColor={theme.whiteThirtyPercent}
                />
                <View style={styles.checkboxContent}>
                    <Checkbox
                        disabled={false}
                        value={isTerms}
                        onValueChange={newValue => setIsTerms(newValue)}
                        style={styles.checkbox}
                    />
                    <Text style={styles.checkText}>
                        Aceito os termos de uso
                    </Text>
                </View>
                <View style={styles.checkboxContent}>
                    <Checkbox
                        disabled={false}
                        value={isNotification}
                        onValueChange={newValue => setIsNotification(newValue)}
                        style={styles.checkbox}
                    />
                    <Text style={styles.checkText}>
                        Aceito receber notificações
                    </Text>
                </View>
            </View>

            <ReactangularButton text="Entrar" />
        </View>
    );
};
