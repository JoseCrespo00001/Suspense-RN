import { Suspense } from 'react'; // Importa el componente Suspense de React
import { SWRConfig } from 'swr'; // Importa el componente SWRConfig de swr
import { StyleSheet, Text, View } from 'react-native'; // Importa los componentes StyleSheet, Text y View de react-native
import List from './components/List'; // Importa el componente List desde './components/List'

export default function App() { // Exporta la función App
  return (
    <View style={styles.container}> // Devuelve un componente View con el estilo definido en 'styles.container'
      <SWRConfig
        value={{
          refreshInterval: 0, // Establece el intervalo de refresco en 0
          fetcher: (...args) => fetch(...args).then(res => res.json()), // Define la función fetcher que realiza una petición y devuelve el resultado en formato JSON
          suspense: true, // Activa el modo suspense
        }}
      >
        <Text style={styles.title}>People</Text> // Muestra el texto 'People' con el estilo definido en 'styles.title'
        <Suspense fallback={<Text style={styles.title}>Loading</Text>}> // Muestra el componente Suspense con un fallback de texto 'Loading' y estilo definido en 'styles.title'
          <List /> // Muestra el componente List
        </Suspense>
      </SWRConfig>
    </View>
  );
}

const styles = StyleSheet.create({ // Define los estilos utilizando StyleSheet
  title: {
    fontSize: 32, // Tamaño de fuente 32
    fontWeight: 'bold', // Fuente en negrita
    marginTop: 70, // Margen superior de 70
    textAlign: 'center', // Alineación centrada
    marginBottom: 30, // Margen inferior de 30
  },
  container: {
    flex: 1, // Flexibilidad de 1
    backgroundColor: '#FFF7E9' // Color de fondo '#FFF7E9'
  }
});
