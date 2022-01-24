import {FormFieldGroup} from '@app/utils/context/FormCacheContext';
import {StyleSheet, View, Text} from '@react-pdf/renderer';
import {RESPONSE_COLOR} from './FinishedFormPDF';
import {LikeToHaveIcon, MaybeIcon, MustHaveIcon, OffLimitsIcon} from '../../Icons';

export default function FieldGroupPDF({
  fieldGroup,
}: {
  fieldGroup: FormFieldGroup
}) {
  const styles = StyleSheet.create({
    'categoryTitle': {
      fontSize: 16,
      paddingVertical: '5px',
    },
    'category': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      paddingLeft: '10px',
      paddingRight: '5px',
      border: '1px',
      borderRadius: '5px',
    },
    'categoryInner': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingBottom: '5px',
      width: '100%',
    },
    'question': {
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
      // justifyContent: 'space-between',
      fontSize: 12,
      margin: '1px',
    },
  });

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

  return (
    <View key={fieldGroup.fieldGroupId} style={styles.category}>
      <Text style={styles.categoryTitle}>{fieldGroup.fieldGroupLabel}</Text>
      <View style={styles.categoryInner}>
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
  );
};
