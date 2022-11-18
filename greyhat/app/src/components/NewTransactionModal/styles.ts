import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export default StyleSheet.create({
  modalContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 300,
    backgroundColor: theme.background,
    borderRadius: 10,
    position: 'absolute',
    top: '20%',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.white,
    textTransform: 'uppercase',
  },
  infoContainer: {
    flexDirection: 'row'
  }, 
  input: {
    flex: 1,
    height: 45,
    backgroundColor: theme.white,
    borderRadius: 5,
    paddingLeft: 5,
    fontSize: 17
  },
  label: {
    fontWeight: 'bold',
    color: theme.white,
    fontSize: 17,
    alignSelf: 'flex-start'
  },
  pickerContainer: {
    flex: 0.47,
    borderRadius: 5,
    color: theme.white,
    backgroundColor: theme.darkBlue,
    height: 45,
    marginLeft: 2
  },
  picker: {
    color: theme.white,
  },
  buttonText: {
    color: theme.white,
    fontWeight: 'bold', 
    fontSize: 15
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around' 
  },
  addButton: {
    padding: 15,
    backgroundColor: theme.notOkColor,
    borderRadius: 5,
    marginTop: 5,
  },
  cancelButton: {
    padding: 15,
    backgroundColor: theme.okColor,
    borderRadius: 5,
    marginTop: 5,
  }
})
