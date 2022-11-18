import React from "react";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { ReactangularButton } from "../../components/RectangularButton";
import { theme } from "../../global/theme";
import CofiImg from "../../../assets/cofi_image.svg";
import BackImage from "../../../assets/backgrund.svg";
import { BackButton } from "../../components/BackButton";
import styles from "./styles";

export const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton text="Voltar" />
      </View>

      <View style={styles.backImage}>
        <BackImage />
      </View>

      <CofiImg width={270.78} height={252} />

      <Text style={styles.title}>Faça seu Login!</Text>
      <View style={styles.login}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui"
          placeholderTextColor={theme.whiteThirtyPercent}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui"
          autoComplete={"password"}
          secureTextEntry={true}
          placeholderTextColor={theme.whiteThirtyPercent}
        />
      </View>

      <ReactangularButton text="Entrar" onPress={() => navigation.navigate('Home')} />

      <View style={styles.passwordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
          <Text style={styles.passwordField}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.passwordField}>
            Não possui conta? Clique aqui!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
