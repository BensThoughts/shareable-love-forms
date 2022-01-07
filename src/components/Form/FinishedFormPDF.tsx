import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import {
  LikeToHaveIcon,
  MaybeIcon,
  MustHaveIcon,
  OffLimitsIcon,
  NAIcon,
} from '@app/components/PDF/Icons';
import {FormState} from '@app/utils/store/formsSlice';

// const DEFAULT_RESPONSE_OPTIONS: string[]= ['N/A', 'Must Have', 'Like To Have', 'Maybe', 'Off Limits'];


const styles = StyleSheet.create({
  'page': {
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  'mainContainer': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  'subContainer': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  // 'fieldGroup': {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // },
  'question': {
    fontSize: 8,
    alignSelf: 'center',
  },
  'response': {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 8,
  },
  'group': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default function FinishedFormPDF({
  formData,
}: {
  formData: FormState
}) {
  function getIcon(value: string): React.ReactNode {
    switch (value) {
      case 'N/A':
        return <NAIcon></NAIcon>;
      case 'Must Have':
        return <MustHaveIcon />;
      case 'Like To Have':
        return <LikeToHaveIcon />;
      case 'Maybe':
        return <MaybeIcon />;
      case 'Off Limits':
        return <OffLimitsIcon />;
    }
  }

  const fieldGroupValues = Object.values(formData.fieldGroups);
  const middleIndex = Math.ceil(fieldGroupValues.length / 2);
  const firstHalf = fieldGroupValues.splice(0, middleIndex);
  const secondHalf = fieldGroupValues.splice(-middleIndex);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>{formData.formName}</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            {firstHalf.map((fieldGroup) => (
              <View key={fieldGroup.fieldGroupId} style={styles.group}>
                <Text>{fieldGroup.fieldGroupLabel}</Text>
                <View style={styles.group}>
                  {Object.values(fieldGroup.fields).map((field) => (
                    <View key={field.id} style={styles.response}>
                      <Text style={styles.question}>{field.label}:&nbsp;</Text>
                      {getIcon(field.value)}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
          <View style={styles.subContainer}>
            {secondHalf.map((fieldGroup) => (
              <View key={fieldGroup.fieldGroupId} style={styles.group}>
                <Text>{fieldGroup.fieldGroupLabel}</Text>
                <View style={styles.group}>
                  {Object.values(fieldGroup.fields).map((field) => (
                    <View key={field.id} style={styles.response}>
                      <Text style={styles.question}>{field.label}:&nbsp;</Text>
                      {getIcon(field.value)}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>


      </Page>
    </Document>
  );
}
