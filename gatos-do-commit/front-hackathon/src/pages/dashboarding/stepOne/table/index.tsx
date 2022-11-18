import { Box } from "@chakra-ui/react";
import { ArrowCircleDown, ArrowCircleUp, Trash } from "phosphor-react";
import { ReturnFocus } from "../../../../components/modal";
import * as Styled from "./styles";
import { DataTable } from './types'

export const Table = ({ listPlan, onSubmit, onOpen, onClose, isOpen }: DataTable) => {
	return (
		<Styled.Container>
			<Styled.DivContent>
				<Styled.ContainerTable>
					<Styled.DivMobile>
						<Styled.TableStyled>
							<Styled.HeaderTable>
								<Styled.Title></Styled.Title>
								<Styled.Title>Modalidade</Styled.Title>
								<Styled.Title>Titulo</Styled.Title>
								<Styled.Title>Data</Styled.Title>
								<Styled.Title>Valor (R$)</Styled.Title>
								<Styled.Title></Styled.Title>
							</Styled.HeaderTable>
							{listPlan.map((launch: any) => (
								<Styled.LineTable>
									<Styled.DataLine>
										<Box display="flex" alignContent="center" justifyContent="center">
											{ launch.kindLanch === "moneyDeposit" ? (
												<ArrowCircleUp color='#63ac84' size={35} />
											) : (
												<ArrowCircleDown color="#45254D" size={35} />
											)}
										</Box>
									</Styled.DataLine>
									<Styled.DataLine>{launch.kindLanch}</Styled.DataLine>
									<Styled.DataLine>{launch.title}</Styled.DataLine>
									<Styled.DataLine>{launch.date}</Styled.DataLine>
									<Styled.DataLine>{launch.moneyLanch}</Styled.DataLine>
									<Styled.DataLine>
										<ReturnFocus
											title="Excluir Item"
											text={`Deseja excluir o item: ${launch.title}`}
											onSubmit={() => onSubmit(launch.id)}
											onOpen={onOpen}
											onClose={onClose}
											isOpen={isOpen}
										>
											<Trash size={30} />
										</ReturnFocus>
									</Styled.DataLine>
								</Styled.LineTable>
							))}
						</Styled.TableStyled>
					</Styled.DivMobile>
				</Styled.ContainerTable>
			</Styled.DivContent>
		</Styled.Container>
	);
};