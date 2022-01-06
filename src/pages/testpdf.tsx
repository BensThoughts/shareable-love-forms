import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

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
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Commitment</Text>
        <Text style={styles.listItem}>Having children: ❓</Text>
        <Text style={styles.listItem}>Having a key: ✔️</Text>
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
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  )
}

// ReactPdf.render(<MyDocument />, `${__dirname}/example.pdf`);

// export default MyDocument;