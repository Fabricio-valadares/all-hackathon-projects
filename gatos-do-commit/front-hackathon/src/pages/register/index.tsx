import {
	Box,
	Grid,
	Heading,
	Text,
	Input,
	Stack,
	FormControl,
	FormErrorMessage
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@chakra-ui/react";

import GridBase from "../../components/GridBase";
import * as Styled from "./styles";
import { RegiterFormInputs } from "./types";
import { registerPerson } from "../../services/auth";

const Register = () => {
	const nagigate = useNavigate();
	const toast = useToast();

	const schema = yup.object().shape({
  	email: yup.string().email().required("Campo obrigatório"),
  	password: yup.string().required("Campo obrigatório"),
  	name: yup.string().required("Campo obrigatório"),
	});

	const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<RegiterFormInputs>({
  	mode: "onBlur",
  	resolver: yupResolver(schema),
	});

	const onSubmit = async (values: RegiterFormInputs) => {
		const payload = {
			username: values.name,
			password: values.password,
			email: values.email
		};

		try {
			await registerPerson(payload);

			toast({
				title: "Registro realizado com sucesso.",
				status: "success",
				duration: 9000,
				isClosable: true,
			});

			nagigate("/");
			reset();
		} catch {
			toast({
				title: "Não foi possivel realizar o registro.",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
		}

	};

	return (
  	<GridBase title='Register na plataforma'>
  		<Box paddingBottom='40px'>
  			<Heading marginBottom='10px' as='h3'>Register</Heading>
  			<Text>Controle suas finanças e muda sua vida atrás de <br />uma aplicação simples de usar. </Text>
  		</Box>

  		<form onSubmit={handleSubmit(onSubmit)}>
  			<Stack spacing={3}>
  				<FormControl isInvalid={!!errors?.name?.message} isRequired>
  					<Input {...register("name")} id="name" variant='outline' placeholder='Nome' />
  					<FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
  				</FormControl>

  				<FormControl isInvalid={!!errors?.email?.message} isRequired >
  					<Input {...register("email")} id="email" variant='outline' placeholder='E-mail' />
  					<FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
  				</FormControl>

  				<FormControl isInvalid={!!errors?.email?.message} isRequired>
  					<Input {...register("password")} id="password" variant='outline' placeholder='senha' />
  					<FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
  				</FormControl>

  				<Grid paddingTop='20px' w="100%">
  					<Styled.ButtonSubmit
  						type='submit'
  						color='white'
  						colorScheme=''
  						bg='#591C66'
  						isLoading={isSubmitting}
  						disabled={!!errors.email || !!errors.password}
  					>Register-se</Styled.ButtonSubmit>

  					<Styled.ContainerLinkRedirect>
  						<Text onClick={() => nagigate("/")}>Ir para login</Text>
  					</Styled.ContainerLinkRedirect>
  				</Grid>

  			</Stack>
  		</form>
  	</GridBase>
	);
};

export default Register;
