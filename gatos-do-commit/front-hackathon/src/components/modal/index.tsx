import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from "@chakra-ui/react";

export function ReturnFocus({ children, text, title, onSubmit }: any) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
		  <Button onClick={onOpen}>{children}</Button>

		  <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>

			  <ModalHeader>{title}</ModalHeader>
			  <ModalCloseButton />

			  <ModalBody pb={6}>
			  	<Text>{text}</Text>
			  </ModalBody>

			  <ModalFooter>
						<Button onClick={() => {
							onSubmit();
							onClose();
						}} color="#fff" bg='#5b3165' mr={3}>
				  	Confirmar
						</Button>

						<Button onClick={onClose}>Cancel</Button>
			  </ModalFooter>
				</ModalContent>
		  </Modal>
		</>
	  );
}
