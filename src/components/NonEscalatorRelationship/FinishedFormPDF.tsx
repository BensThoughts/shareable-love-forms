import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import {
  LikeToHaveIcon,
  MaybeIcon,
  MustHaveIcon,
  OffLimitsIcon,
  // NAIcon,
} from '@app/components/NonEscalatorRelationship/Icons';
import {FormState} from '@app/utils/store/formsSlice';

// const DEFAULT_RESPONSE_OPTIONS: string[]= ['N/A', 'Must Have', 'Like To Have', 'Maybe', 'Off Limits'];

const RESPONSE_COLOR = 'purple';

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
    alignItems: 'center',
    color: RESPONSE_COLOR,
  },
  'completeResponse': {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    fontSize: 8,
    margin: '2px',
  },
  'group': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: '10px',
    paddingRight: '5px',
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
        return <></>;
        // return <NAIcon stroke={RESPONSE_COLOR}></NAIcon>;
      case 'Must Have':
        return <MustHaveIcon stroke={RESPONSE_COLOR} />;
      case 'Like To Have':
        return <LikeToHaveIcon stroke={RESPONSE_COLOR} />;
      case 'Maybe':
        return <MaybeIcon stroke={RESPONSE_COLOR} />;
      case 'Off Limits':
        return <OffLimitsIcon stroke={RESPONSE_COLOR} />;
    }
  }

  const fieldGroupValues = Object.values(formData.fieldGroups);
  const leftPage = fieldGroupValues.slice(0, 3);
  // const middlePage = fieldGroupValues.slice(2, 4);
  const rightPage = fieldGroupValues.slice(3, -1);
  // const middleIndex = Math.ceil(fieldGroupValues.length / 2);

  // const leftPage = fieldGroupValues.splice(0, middleIndex);
  // const rightPage = fieldGroupValues.splice(-middleIndex);

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View>
          <Text>{formData.formName}</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            {leftPage.map((fieldGroup) => (
              <View key={fieldGroup.fieldGroupId} style={styles.group}>
                <Text>{fieldGroup.fieldGroupLabel}</Text>
                <View style={styles.group}>
                  {Object.values(fieldGroup.fields).map((field) => (
                    <View key={field.id} style={styles.completeResponse}>
                      <Text style={styles.question}>{field.label}:&nbsp;</Text>
                      <View style={styles.response}>
                        <Text>{field.value}</Text>
                        {getIcon(field.value)}
                      </View>
                      {/* {getIcon(field.value)} */}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* <View style={styles.subContainer}>
            {middlePage.map((fieldGroup) => (
              <View key={fieldGroup.fieldGroupId} style={styles.group}>
                <Text>{fieldGroup.fieldGroupLabel}</Text>
                <View style={styles.group}>
                  {Object.values(fieldGroup.fields).map((field) => (
                    <View key={field.id} style={styles.completeResponse}>
                      <Text style={styles.question}>{field.label}:&nbsp;</Text>
                      <View style={styles.response}>
                        <Text>{field.value}</Text>
                        {getIcon(field.value)}
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View> */}

          <View style={styles.subContainer}>
            {rightPage.map((fieldGroup) => (
              <View key={fieldGroup.fieldGroupId} style={styles.group}>
                <Text>{fieldGroup.fieldGroupLabel}</Text>
                <View style={styles.group}>
                  {Object.values(fieldGroup.fields).map((field) => (
                    <View key={field.id} style={styles.completeResponse}>
                      <Text style={styles.question}>{field.label}:&nbsp;</Text>
                      <View style={styles.response}>
                        <Text>{field.value}</Text>
                        {getIcon(field.value)}
                      </View>
                      {/* {getIcon(field.value)} */}
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
