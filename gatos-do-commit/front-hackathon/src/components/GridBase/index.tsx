import {
	Box,
	Grid,
	GridItem,
	Heading,
} from "@chakra-ui/react";

const GridBase = ({ children, title }: any) => {
	function generateColor() {
		const red = Math.floor(Math.random() * (255 - 0) + 0);
		const green = Math.floor(Math.random() * (255 - 0) + 0);
		const blue = Math.floor(Math.random() * (255 - 0) + 0);

		return `rgba(${red}, ${green}, ${blue}, 0.2)`;
	}

	return (
		<Grid
			display='flex'
			justifyContent='center'
			alignItems='center'
		>
			<GridItem
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				w={["0%", "0%", "0%", "45%"]}
				h='100vh'
				style={{
					backgroundImage: `linear-gradient(${generateColor()} 2px, transparent 2px), linear-gradient(to right, ${generateColor()} 2px, transparent 2px)`,
					backgroundSize: "40px 40px",
					backgroundColor: "#1c1333"
				}}
			>
				<GridItem
					display='flex'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
					w='100%'
					h='60vh'
				>
					<Box
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						bg='#5b3165'
						w={["0%", "0%", "0%", "45%"]}
					>
						<Heading color='white' padding='40px'>{ title }</Heading>
					</Box>
				</GridItem>
			</GridItem>
			<GridItem
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				w={["100%", "100%", "100%", "55%"]}
				h='100vh'
			>
				<Box
					display='flex'
					flexDirection='column'
					justifyContent='center'
					h='50vh'
				>
					{ children }
				</Box>

			</GridItem>
		</Grid>
	);
};

export default GridBase;