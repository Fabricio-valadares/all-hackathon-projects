import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme.background
  },
  donutChartsContainer: {
    marginTop: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  main: {
    width: '100%',
    backgroundColor: theme.white,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  header: {
    flex: 0.2,
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    fontSize: 18,
    color: theme.white,
    marginRight: 10,
    fontWeight: 'bold',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20
  },
  calendarContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  dateField: {
    color: 'rgba(255, 255, 255, 0.6)',
    paddingVertical: 2
  },
  transactionsContainer: {
    paddingTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  historicTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 5
  },
  circularButtonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 20
  } 
})
