import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // Fonction appelée lorsque le bouton est pressé
  const handlePress = () => {
    Alert.alert('Action', 'Vous avez cliqué sur le bouton !');
  };

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <Text style={styles.header}>Bienvenue dans L'instant !</Text>

      {/* Contenu */}
      <Text style={styles.paragraph}>
        C'est ici que vous pouvez commencer à construire votre application.
      </Text>

      {/* Bouton */}
      <Button title="Cliquez ici" onPress={handlePress} />

      {/* Barre d'état */}
      <StatusBar style="auto" />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
