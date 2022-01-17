import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import {FormState} from '@app/utils/store/formsSlice';
import FieldGroupPDF from './FieldGroupPDF';
// const DEFAULT_RESPONSE_OPTIONS: string[]= ['N/A', 'Must Have', 'Like To Have', 'Maybe', 'Off Limits'];

export const RESPONSE_COLOR = 'purple';

const styles = StyleSheet.create({
  'page': {
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  'header': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  'title': {
    fontSize: 32,
    fontWeight: 'bold',
  },
  'mainContainer': {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
  },
  'subContainer': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '8px',
    width: '100%',
    // marginHorizontal: '5px',
  },
  'fieldGroup': {
    margin: '10px',
    width: '400px',
  },
  // 'fieldGroup': {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // },


});

export default function FinishedFormPDF({
  formData,
}: {
  formData: FormState
}) {
  const fieldGroupValues = Object.values(formData.fieldGroups);
  console.log(fieldGroupValues);
  const pageOne = fieldGroupValues.slice(0, 2);
  const pageTwo = fieldGroupValues.slice(2, 5);
  const pageThree = fieldGroupValues.slice(5, 8);

  // const middleIndex = Math.ceil(fieldGroupValues.length / 2);

  // const leftPage = fieldGroupValues.splice(0, middleIndex);
  // const rightPage = fieldGroupValues.splice(-middleIndex);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>{formData.formName}</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            {pageOne.map((fieldGroup) => (
              <View key={fieldGroup.fieldGroupId} style={styles.fieldGroup}>
                <FieldGroupPDF key={fieldGroup.fieldGroupId} fieldGroup={fieldGroup} />
              </View>
            ))}
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            {pageTwo.map((fieldGroup) => (
              <View key={fieldGroup.fieldGroupId} style={styles.fieldGroup}>
                <FieldGroupPDF key={fieldGroup.fieldGroupId} fieldGroup={fieldGroup} />
              </View>
            ))}
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            {pageThree.map((fieldGroup) => (
              <View key={fieldGroup.fieldGroupId} style={styles.fieldGroup}>
                <FieldGroupPDF key={fieldGroup.fieldGroupId} fieldGroup={fieldGroup} />
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
