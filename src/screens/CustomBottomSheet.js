import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const CustomBottomSheet = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        enablePanDownToClose
        enableContentPanningGesture
        enableHandlePanningGesture
        enableOverDrag
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CustomBottomSheet;
