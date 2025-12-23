import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';
import axios from 'axios';
import api_url from '@/config/api_url';
// equivalente ao api_url.js
const API_URL = api_url;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
    fontWeight: 'bold'
  },
  card: {
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover'
  },
  nome: {
    fontSize: 16,
    marginTop: 8
  },
  categorias: {
    fontSize: 14,
    color: '#666'
  }
});

export default function InstrutoresScreen() {
  const [lista, setLista] = useState<any[]>([]);

  async function getInstrutores() {
    try {
      const response = await axios.get(`${API_URL}/instrutores/all`);
      setLista(response.data);
    } catch (error) {
      console.error('Erro ao buscar instrutores:', error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lista de instrutores</Text>

      {lista.map((obj, index) => (
        <View key={index} style={styles.card}>
          <Image
            source={{ uri: obj.img }}
            style={styles.image}
          />
          <Text style={styles.nome}>{obj.nome}</Text>
          <Text style={styles.categorias}>{obj.categorias}</Text>
        </View>
      ))}

      <Button title="Atualizar" onPress={getInstrutores} />
    </ScrollView>
  );
}
