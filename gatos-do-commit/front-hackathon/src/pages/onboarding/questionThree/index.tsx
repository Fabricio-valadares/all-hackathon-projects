import {
	Box,
	Grid,
	Heading,
	Button,
	useRadioGroup,
	HStack,
	Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import GridBase from "../../../components/GridBase";
import RadioCard from "../../../components/RadioGroup";
import { serializeDataQuestion } from "../../../helpers/serializeDataQuestion";
import { OptionsData } from "../screenInitial/types";

const QuestionThree = () => {
	window.addEventListener("load", () => {
		nagigate("/onboarding/screen-initial");
	});

	const nagigate = useNavigate();
	const location = useLocation();

	const [messageFiledRequired, setMessageFiledRequired] = useState(false);
	const [checkValue, setCheckValue] = useState(false);
	const [result, setResult] = useState("");

	const handleSubmit = () => {
	  if (checkValue) {
			nagigate("/onboarding/question-four", {
				state: {...location.state, howManyTimesDidYouCheck: serializeDataQuestion(result, "Não")}
			});
			return;
	  }

	  setMessageFiledRequired(true);
	};

	const options: OptionsData[] = [
		{id: "A", value: "1 vez ou mais."},
		{id: "B", value: "Não conferi."}
	];

	const { getRootProps, getRadioProps } = useRadioGroup({
	  name: "framework",
	  defaultValue: "react",
	  onChange: onChangeRadio,
	});

	function onChangeRadio(props: string) {
	  setResult(props);

	  setCheckValue(true);
	  setMessageFiledRequired(false);
	}

	return (
	  <GridBase title='Seus Gastos!'>
			<Box paddingBottom='40px'>
		  	<Heading marginBottom='10px' as='h5'>Quantas vezes você conferiu seus < br/>gastos no mês passado?</Heading>
			</Box>

			<Box>
				<HStack {...getRootProps()}>
					<Grid
						display='flex'
						flexDirection='column'
						justifyContent='flex-start'
						alignItems='flex-start'
					>
						{options.map(({ id, value }) => {
							const radio = getRadioProps({ value });
							return (
								<RadioCard key={value} {...radio}>
									{`${id} - ${value}`}
								</RadioCard>
							);
						})}
					</Grid>
				</HStack>

				{	messageFiledRequired && <Text>E obrigatório escolher algum campo!</Text> }

			</Box>

			<Grid paddingTop='20px' w="100%">
				<Box>
					<Button onClick={() => handleSubmit()} w="120px" type='button' color='white' bg='#591C66'>Continuar</Button>
				</Box>
			</Grid>
	  </GridBase>
	);
};

export default QuestionThree;
