/* eslint-disable react/jsx-key */

import { Box, Heading, Link, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CaretCircleDown } from "phosphor-react";

export const ListItens = ({ title, dataList}: any) => {
	return (
		<Box padding="0 0 20px 0">
			<Heading as='h3' size='lg'>
		    {title}
			</Heading>

			{
				dataList.map((data: any) => {
					return (
						<List padding="20px 0 0 0">
							<ListItem>
								<ListIcon as={CaretCircleDown} color='green.500' />
								<Link href={data.link} isExternal>
									{data.text}
								</Link>
							</ListItem>
						</List>
					);
				})
			}

		</Box>
	);
};
