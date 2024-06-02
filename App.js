import { StyleSheet, Text, View, Image, FlatList, ScrollView} from 'react-native';
import myImage from './assets/Frame 1.png';
import mySearch from './assets/Search.png';
import OngoingTasks from './components/ongoingTasks';
import Categories from './components/categories';

export default function App() {
  return (
    <ScrollView  contentContainerStyle={styles.contentContainer} style={styles.container}>
      <Image source={myImage} style={styles.headerTitle}/>
      <Image source={mySearch} style={styles.searchInput}/>
      <Text style={styles.header}>Categories</Text>
      <Categories />
      <OngoingTasks/>
    
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    marginTop:20,
    padding:10,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    marginTop:20,
    padding:10,
    marginLeft: -250,
    fontWeight: 'bold',
  },
  searchInput: {
    marginTop: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  exerciseStudy: {
     marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius:5
  }
});
