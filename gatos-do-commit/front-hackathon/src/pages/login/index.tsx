import {
	Box,
	FormControl,
	FormErrorMessage,
	Grid,
	Heading,
	Input,
	Stack,
	Text
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useToast } from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import GridBase from "../../components/GridBase";
import * as Styled from "./styles";
import { LoginFormInputs } from "./types";
import { loginPerson } from "../../services/auth";

const Login = () => {
	const nagigate = useNavigate();
	const toast = useToast();

	const schema = yup.object().shape({
		email: yup.string().email().required("Campo obrigatório"),
		password: yup.string().required("Campo obrigatório"),
	});

	const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<LoginFormInputs>({
		mode: "onBlur",
		resolver: yupResolver(schema),
	});

	const onSubmit = async (values: LoginFormInputs) => {

		const payload = {
			email: values.email,
			password: values.password
		};

		try {
			const result = await loginPerson(payload);

			localStorage.setItem("token",JSON.stringify(result.data));

			toast({
				title: "Login realizado com sucesso.",
				status: "success",
				duration: 9000,
				isClosable: true,
			});

			reset();
			nagigate("/dashboarding");

		} catch {
			toast({
				title: "Não foi possivel realizar o login.",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
		}
	};

	return (
		<GridBase title='Bem-vindo a Finanp'>
			<Box paddingBottom='40px'>
				<Heading marginBottom='10px' as='h3'>Login</Heading>
				<Text>Controle suas finanças e muda sua vida atrás de <br />uma aplicação simples de usar. </Text>
			</Box>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={3}>

					<FormControl isInvalid={!!errors?.email?.message} isRequired>
						<Input {...register("email")} id="email" variant='outline' placeholder='E-mail' />
						<FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={!!errors?.password?.message} isRequired>
						<Input {...register("password")} id="password" variant='outline' placeholder='senha' />
						<FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
					</FormControl>

					<Grid paddingTop='20px' w="100%">
						<Styled.ButtonSubmit
							bg="#591C66"
							colorScheme=''
							type='submit'
							isLoading={isSubmitting}
							disabled={!!errors.email || !!errors.password}
						>Enviar</Styled.ButtonSubmit>

						<Styled.ContainerLinkRedirect>
							<Text onClick={() => nagigate("/register")}>Quero registrar-se</Text>
						</Styled.ContainerLinkRedirect>

					</Grid>
				</Stack>
			</form>
		</GridBase>
	);
};

export default Login;
