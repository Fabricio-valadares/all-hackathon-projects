import { Box, useRadio } from "@chakra-ui/react"

function RadioCard(props: any) {

  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()


  return (
    <Box as='label' marginBottom='10px' minWidth='150px'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: '#46B34E',
          color: 'white',
          borderColor: '#4FB38F',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export default RadioCard;