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
    backgroundColor: 'black',
    color: 'white',
  },
  'fieldGroup': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>{formData.formName}</Text>
        </View>
        <View style={styles.fieldGroup}>
          {Object.values(formData.fieldGroups).map((fieldGroup) => (
            <View key={fieldGroup.fieldGroupId}>
              <Text>{fieldGroup.fieldGroupLabel}</Text>
              <View style={styles.fieldGroup}>
                {Object.values(fieldGroup.fields).map((field) => (
                  <View key={field.id}>
                    <Text>{field.label}:&nbsp;</Text>
                    {getIcon(field.value)}
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
