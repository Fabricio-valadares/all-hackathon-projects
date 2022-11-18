import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { EvilIcons } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";
import styles from "./styles";

import { CalendarHorizontal } from "../../components/CalendarHorizontal";
import { CardTransaction } from "../../components/CardTransaction";
import { Select } from "../../components/Select";

import { mounth } from "./utils/mounthData";
import { dataTransactions } from "./utils/fakeTransactionsData";
import { getDataCalendary } from "./utils/calendaryData";
import { years } from "./utils/yearData";

import { Transaction } from "./interfaces/Transaction";
import { Mounth } from "./interfaces/Mounth";
import { Day } from "./interfaces/Day";
import { BackButton } from "../../components/BackButton";

export const DiaryControlPage = ({ route, navigation }) => {
  if (!route.params) throw new Error('must have route params for DiaryControlPage')
  const { isOutputTransaction } = route.params
  const transactionType = isOutputTransaction ? "Saida" : "Entrada"

  const [data, setData] = useState<Transaction[]>();
  const modalizeRef = useRef<Modalize>(null);
  const [selectedYear, setSelectedYear] = useState<number>(2022);
  const [selectedMounth, setSelectedMounth] = useState<Mounth>({
    title: "Novembro",
    value: 11,
  });
  const [selectedYearBackstage, setSelectedYearBackstage] =
    useState<number>(2022);
  const [selectedMounthBackstage, setSelectedMounthBackstage] =
    useState<Mounth>({
      title: "Janeiro",
      value: 1,
    });
  const [dataMounth, setDataMounth] = useState(mounth);
  const [dataYears, setDataYears] = useState<number[]>(years);
  const [typeTransactionTitle, setTypeTransactionTitle] = useState("Saidas");
  const [dataCalendary, setDataCalendary] = useState<Day[]>([]);
  const [selectedDay, setSelectedDay] = useState(1);


  useEffect(() => {
    handleAppetizerSelected();
    searchDataCalendary(11, 2022);
  }, []);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const handleAppetizerSelected = () => {
    setTypeTransactionTitle("Entradas");
    let appentizerData: Transaction[] = [];

    dataTransactions.map(item => {
      if (!item.isExit) {
        appentizerData.push(item);
      }
    });

    setData(appentizerData);
  };

  const handleExitSelected = () => {
    setTypeTransactionTitle("Saidas");
    let exitData: Transaction[] = [];

    dataTransactions.map(item => {
      if (item.isExit) {
        exitData.push(item);
      }
    });

    setData(exitData);
  };

  const handleSearchTransationsByYearMonth = () => {
    const mounth = selectedMounthBackstage;
    const year = selectedYearBackstage;
    setSelectedDay(1);
    setSelectedMounth(mounth);
    setSelectedYear(year);
    searchDataCalendary(mounth.value, year);
    modalizeRef.current?.close();
  };

  const searchDataCalendary = (mounth: number, year: number) => {
    const data = getDataCalendary(mounth, year);
    setDataCalendary(data);
  };


  useEffect(() => {
    isOutputTransaction && handleExitSelected()
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.buttonsHeader}>
          <BackButton text='Voltar' onPress={() => navigation.goBack()} />
          <TouchableOpacity>
            <EvilIcons name="user" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerArea}>
          <TouchableOpacity
            style={styles.mounthButton}
            onPress={onOpen}
          >
            <AntDesign name="calendar" size={30} color="white" />

            <Text style={styles.mounthName}>
              {selectedMounth.title}/{selectedYear}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <CalendarHorizontal
        dataCalendary={dataCalendary}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <View style={styles.selectArea}>
        <Select
          appetizerAction={handleAppetizerSelected}
          exitAction={handleExitSelected}
          beginWith={transactionType}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.typeTitle}>{typeTransactionTitle}</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => CardTransaction(item)}
        />
      </View>

      <Modalize
        modalStyle={{ backgroundColor: "#d9d9d9" }}
        ref={modalizeRef}
        snapPoint={350}
      >
        <View style={styles.modalArea}>
          <View style={{ width: "100%", alignItems: "flex-start" }}>
            <Text style={styles.modalTitle}>Defina o período</Text>
          </View>
          <View style={{ width: "100%" }}>
            <View style={styles.pickerArea}>
              <Text style={styles.pickerLabel}>Ano:</Text>
              <Picker
                style={styles.pickerComponent}
                selectedValue={selectedYearBackstage}
                onValueChange={item =>
                  setSelectedYearBackstage(item)
                }
              >
                {dataYears &&
                  dataYears.map(item => (
                    <Picker.Item
                      key={item}
                      label={String(item)}
                      value={item}
                    />
                  ))}
              </Picker>
            </View>
            <View style={styles.pickerArea}>
              <Text style={styles.pickerLabel}>Mês:</Text>
              <Picker
                style={styles.pickerComponent}
                selectedValue={selectedMounthBackstage}
                onValueChange={item =>
                  setSelectedMounthBackstage(item)
                }
              >
                {dataMounth &&
                  dataMounth.map(item => (
                    <Picker.Item
                      key={item.value}
                      label={item.title}
                      value={item}
                    />
                  ))}
              </Picker>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btnSearchModal}
            onPress={handleSearchTransationsByYearMonth}
          >
            <Text style={styles.labelSearchModal}>Pesquisar</Text>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Modalize>
    </View>
  );
};
