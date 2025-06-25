/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';

const DescargaContenido = ({}): JSX.Element => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Descarga de Contenido</Text>
        </View>

        <View>
          <Text style={styles.subtitle}>
            Usted tendrá acceso a los PDF en modo offline una vez que acepte el
            botón que está abajo de esta pantalla. Si ya aceptó intente abrir un
            pdf entrando en el detalle de un libro, y el PDF se descargará en
            segundo plano
          </Text>
        </View>
        <View style={{paddingVertical: 16}} />
        <TouchableOpacity>
          <View style={styles.containerSwitch}>
            <Text style={styles.switchText}>
              Habilitar la descarga de contenido
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#a2e3dc'}}
              thumbColor={isEnabled ? '#00a88f' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DescargaContenido;

const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff90',
  },

  containerSections: {
    width: '100%',
    marginBottom: 16,
  },
  title: {
    color: '#00a88f',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#00000070',
    textAlign: 'center',
  },
  containerTitle: {
    width: '100%',
    paddingBottom: 20,
    paddingTop: 16,
  },
  containerSwitch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  switchText: {
    fontSize: 16,
    color: '#00000070',
    fontWeight: '500',
  },
});
