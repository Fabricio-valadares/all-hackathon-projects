import { View, Text } from "react-native"
import { PieChart } from "react-native-gifted-charts";
import { theme } from "../../global/theme";
import styles from './styles'

type Props = {
  percentage: number
  title: string,
  color?: string
  price: number
}

export const DonutChart: React.FC<Props> = ({ percentage, title, color, price }) => {
  const pieData = [
    { value: percentage, color: color || theme.darkBlue },
    { value: 100 - percentage, color: 'rgba(0, 0, 0, 0.07)' }
  ]

  return (
    <View style={[styles.card, styles.elevation]}>
      <Text style={styles.title}>{title}</Text>
      <PieChart
        donut
        radius={50}
        innerRadius={30}
        data={pieData}
        centerLabelComponent={() => <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{percentage}%</Text> }
      />
      <Text style={styles.title}>R${price}</Text>
    </View>
  )
}
