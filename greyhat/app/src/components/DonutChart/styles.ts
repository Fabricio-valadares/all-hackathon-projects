import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export default StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'white',  
    borderRadius: 8,  
    paddingHorizontal: 25,  
    marginVertical: 5,  
  },
  elevation: {
    shadowColor: theme.shadowColor,  
    elevation: 20, 
  }
})
