import {  Box, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import { ListItens } from "./listItens";

export const StepTwo = () => {
	return (
		<Grid
			display='flex'
			w="100%"
			padding="0 30px 0 30px"
			h="100vh"
		>
			<Grid
				w="50%"
				h="100%"
				display="flex"
				flexDirection="column"
				justifyItems="flex-start"
				alignItems="flex-start"
			>
				<Box padding="30px 0 20px 0">
					<Heading as='h3' size='lg'>
          	Conteúdo recomendadas
					</Heading>

					<Box padding="30px 0 10px 0">
						<Text>Todos os videos recomendadas tem como objetivo de dar um visão geral de todos os
          	principais ativos disponivel hoje no mercado para você começar a estudar  conhecer mais.
						</Text>
					</Box>
				</Box>

				<ListItens
					title="O que e reserva de emergência"
					dataList={[
						{
							text: "(Video) Como contruir uma reserva de emergência",
							link: "https://www.youtube.com/watch?v=REBSBvYlrjA"
						}
					]}
				/>

				<ListItens
					title="O que e uma renda Passiva"
					dataList={[
						{
							text: "(Video) Renda Ativa X Renda Passiva",
							link: "https://www.youtube.com/watch?v=lr9Ey1zSRb"
						}
					]}
				/>

				<Box padding="0 0 20px 0">
					<ListItens
						title="Os tipo de ativos!"
						dataList={[
							{
								text: "(Video) Renda Fixa",
								link: "https://www.youtube.com/watch?v=ysm9ZJ6O67w"
							},
							{
								text: "(Video) Renda Variavel",
								link: "https://www.youtube.com/watch?v=93KrvLtdSfc"
							},
							{
								text: "(Video) Renda Fixa X Renda Variavel",
								link: "https://www.youtube.com/watch?v=KUvcpYbKIpQ"
							},
							{
								text: "(Video) Qual eu devo escolher?",
								link: "https://www.youtube.com/watch?v=l98T8RtDD-o"
							}
						]}
					/>

					<ListItens
						title="O que e tesouro Direto"
						dataList={[
							{
								text: "(Video) Visão geral o que tesouro direto!",
								link: "https://www.youtube.com/watch?v=z8NdFLUPXoo"
							}
						]}
					/>

					<ListItens
						title="O que e Fundo imobiliario"
						dataList={[
							{
								text: "(Video) Visão geral o que Fundo imobiliario!",
								link: "https://www.youtube.com/watch?v=LaJ8hGZVzD4"
							},
							{
								text: "(Video) o que significa ter um fundo imobiliario",
								link: "https://www.youtube.com/watch?v=vZ64S8dFpEM"
							}
						]}
					/>
				</Box>
			</Grid>

			<Grid>
				<Divider marginLeft={5} marginRight={5} orientation='vertical' />
			</Grid>

			<Grid
				w="50%"
				h="100%"
				display="flex"
				flexDirection="column"
				justifyItems="flex-start"
				alignItems="flex-start"
			>

				<Box padding="30px 0 20px 0">
					<ListItens
						title="Livros recomendados"
						dataList={[
							{
								text: "(Livro) Pai rico pai pobre",
								link: "https://www.amazon.com.br/Pai-rico-pai-pobre-anos/dp/8550801488/ref=asc_df_8550801488/?tag=googleshopp00-20&linkCode=df0&hvadid=379816235492&hvpos=&hvnetw=g&hvrand=2867320148557216126&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031934&hvtargid=pla-394733036063&psc=1"
							},
							{
								text: "(Livro) investimentos inteligentes",
								link: "https://www.amazon.com.br/Investimentos-inteligentes-Gustavo-Cerbasi/dp/8543109051/ref=sr_1_3?keywords=investimentos+inteligentes&qid=1668569057&qu=eyJxc2MiOiIyLjA1IiwicXNhIjoiMS40OSIsInFzcCI6IjEuMjMifQ%3D%3D&s=books&sprefix=inverstime%2Cstripbooks%2C256&sr=1-3"
							},
							{
								text: "(Livro) O homem mais rico da Babilônia",
								link: "https://www.amazon.com.br/Homem-Mais-Rico-Babil%C3%B4nia/dp/8595081530/ref=d_pd_vtp_sccl_3_1/138-2638237-2581529?pd_rd_w=DHMHi&content-id=amzn1.sym.3247c561-192a-44aa-bc94-b7912387509e&pf_rd_p=3247c561-192a-44aa-bc94-b7912387509e&pf_rd_r=NXGA4H4EKTMEY6642X67&pd_rd_wg=eWHkb&pd_rd_r=c4e362e1-96d5-4c7d-8688-ca2361b90ae4&pd_rd_i=8595081530&psc=1"
							}
						]}
					/>
				</Box>

				<ListItens
					title="Artigos Recomendados"
					dataList={[
						{
							text: "(Artigos) Como Não Perder Dinheiro Em Tempos de Crise!",
							link: "https://queroficarrico.com/blog/como-nao-perder-dinheiro-em-tempos-de-crise/"
						},
						{
							text: "(Artigos) 3 Conceitos Fundamentais Para Transformar Sua Vida Financeira!",
							link: "https://queroficarrico.com/blog/vida-financeira/"
						},
						{
							text: "(Artigos) Como Poupar Dinheiro Ganhando Pouco",
							link: "https://queroficarrico.com/blog/como-poupar-dinheiro-ganhando-pouco/"
						},
						{
							text: "(Artigos) Motivação, disciplina e finanças? Entenda a relação dos três",
							link: "https://mepoupe.com/economia/motivacao-disciplina-e-financas-entenda-a-relacao-dos-tres/"
						}
					]}
				/>
			</Grid>

		</Grid>
	);
};

export default StepTwo;
