import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row', 
    width: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    shadowColor: theme.shadowColor, 
    elevation: 10, 
    alignItems: 'center',
    backgroundColor: 'white',  
    borderRadius: 8,  
    marginVertical: 5,  
  },
  titleContainer: {
    flexDirection: 'row'
  }, 
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10
  },
})
