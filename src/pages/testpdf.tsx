import React from 'react';
import {Page, Text, View, Document, StyleSheet, PDFDownloadLink} from '@react-pdf/renderer';
import {
  LikeToHaveIcon,
  MaybeIcon,
  MustHaveIcon,
  OffLimitsIcon,
} from '@app/components/PDF/Icons';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'black',
    color: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 8,
    alignSelf: 'center',
  },
  inlineAnswer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Commitment</Text>
        <View style={styles.inlineAnswer}>
          <Text style={styles.listItem}>
            Having children:
          </Text>
          <MaybeIcon />
        </View>
        <View style={styles.inlineAnswer}>
          <Text style={styles.listItem}>
            Having a key:
          </Text>
          <MustHaveIcon />
        </View>
        <View style={styles.inlineAnswer}>
          <Text style={styles.listItem}>
            Oral sex:
          </Text>
          <LikeToHaveIcon />
        </View>
        <View style={styles.inlineAnswer}>
          <Text style={styles.listItem}>
            Sharing a bank account:
          </Text>
          <OffLimitsIcon />
        </View>

      </View>
      {/* <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
    </Page>
  </Document>
);

export default function RenderedDoc() {
  return (
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({blob, url, loading, error}) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  );
}

// ReactPdf.render(<MyDocument />, `${__dirname}/example.pdf`);

// export default MyDocument;
