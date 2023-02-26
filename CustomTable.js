import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';

const CustomTable = () => {
  const [tableHead, setTableHead] = useState([
    'Head',
    'Head2',
    'Head3',
    'Head4',
  ]);
  const [tableData, setTableData] = useState([
    ['1', customBox('2'), '3', '4'],
    ['a', 'b', 'c', 'd'],

    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
  ]);
  const _alertIndex = index => {
    Alert.alert(`This is row ${index + 1}`);
  };

  const customBox = value => {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'green',
        }}></View>
    );
  };
  const element = (data, index) => {
    return (
      <TouchableOpacity onPress={() => _alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderColor: 'transparent'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={cellIndex === 3 ? element(cellData, index) : cellData}
                textStyle={styles.text}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </View>
  );
};
export default CustomTable;
const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#808B97'},
  text: {margin: 6},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
});
