import style from '@/assets/style/style';
import Body from '@/components/Body';
import Feedback from '@/components/Feedback';
import Header from '@/components/Header';
import Mais from '@/components/Mais';
import Nav from '@/components/Nav';
import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { PixelRatio, StyleSheet, Switch, Text, TouchableOpacity, View, useColorScheme } from "react-native";

// função Adaptar tamanho da fonte do dispositivo
const escala = PixelRatio.getFontScale();

export default function App() {
  const scheme = useColorScheme(); // "light" ou "dark"
  const isDarkMode = scheme === 'dark';


  const [estado, setEstado] = useState("inicio");

  const switchCancoes = (() => {
    setEstado('cancoes')
  })
  const switchEntretenimento = (() => {
    // setEstado('entretenimento')
    alert("Em desenvolvimento ...")
  })

  if (estado == 'inicio') {
    return (
      <View style={styles.view} >
        <StatusBar hidden />
        <Header></Header>

        <View style={[styles.container, { backgroundColor: isDarkMode ? '#001' : '#fff' }]}>
          <TouchableOpacity onPress={switchCancoes} style={styles.buttonC}>
            <MaterialCommunityIcons name="book-music" size={48} color="#069" />
            <Text style={[style.buttonText, { color: isDarkMode ? '#fff' : '#001' }]}>Canções</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEstado('mais')} style={styles.buttonD}>
            <Feather name="plus" size={48} color="#069" />
            <Text style={[style.buttonText, { color: isDarkMode ? '#fff' : '#001' }]}>Mais</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEstado('feedback')} style={styles.buttonF}>
            <MaterialCommunityIcons name="chat-question" size={48} color="#069" />
            <Text style={[style.buttonText, { color: isDarkMode ? '#fff' : '#001' }]}>Feedback & Sugestões</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEstado('preferencias')} style={styles.buttonP}>
            <MaterialCommunityIcons name="tune" size={48} color="#069" />
            <Text style={[style.buttonText, { color: isDarkMode ? '#fff' : '#001' }]}>Preferências</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  if (estado == 'cancoes') {
    return (
      <View>
        <Nav estado={setEstado} title={'Canções'} ></Nav>
        <Body></Body>
      </View >
    )
  }
  else if (estado == 'preferencias') {
    return (
      <View>
        <StatusBar hidden />
        <Nav estado={setEstado} title={'Preferências'} ></Nav>
        <Preferencias></Preferencias>
      </View >
    )
  }
  else if (estado == 'feedback') {
    return (
      <View>
        <StatusBar hidden />
        <Nav estado={setEstado} title={'Feedback & Sugestões'} ></Nav>
        <Feedback></Feedback>
      </View >
    )
  }
  else if (estado == 'mais') {
    return (
      <View>
        <StatusBar hidden />
        <Nav estado={setEstado} title={'Mais'} ></Nav>
        <Mais></Mais>
      </View >
    )

  }
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',        // permite múltiplas linhas
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonC: {
    flexBasis: '50%',        // botão ocupa 100% da largura
    paddingVertical: 50,
    borderWidth: 2,
    borderBottomRightRadius: 8,
    borderBottomColor: '#069',
    borderRightColor: '#069',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    alignItems: 'center'      // centraliza texto dentro
  },
  buttonD: {
    flexBasis: '50%',        // botão ocupa 50% da largura
    paddingVertical: 50,
    borderWidth: 2,
    borderBottomLeftRadius: 8,
    borderBottomColor: '#069',
    borderLeftColor: '#069',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    alignItems: 'center'      // centraliza texto dentro
  },
  buttonF: {
    flexBasis: '50%',        // botão ocupa 100% da largura
    paddingVertical: 50,
    borderWidth: 2,
    borderTopRightRadius: 8,
    borderTopColor: '#069',
    borderRightColor: '#069',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    alignItems: 'center'      // centraliza texto dentro
  },
  buttonP: {
    flexBasis: '50%',        // botão ocupa 100% da largura
    paddingVertical: 50,
    borderWidth: 2,
    borderTopLeftRadius: 8,
    borderTopColor: '#069',
    borderLeftColor: '#069',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    alignItems: 'center'      // centraliza texto dentro
  },
});

//Componente interno Preferencias
const Preferencias = () => {
  //Modo black
  const scheme = useColorScheme(); // "light" ou "dark"
  const isDarkMode = scheme === 'dark';
  //SWITCH
  const [ativoNot, setAtivoNot] = useState(false);
  const [ativoAb, setAtivoAb] = useState(false);
  //
  const [state, setState] = useState('inicio')
  if (state == 'inicio') {
    return (
      <View>
        {/* Sobre ? feedback */}
        {/* Ativar e Desativar Notificações */}
        <Text style={[style.subTitle, { color: (isDarkMode) ? '#fff' : '#001' }]} >Notificações</Text>
        <Switch
          value={ativoNot}
          onValueChange={setAtivoNot}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={ativoNot ? '#069' : '#f4f3f4'}
        />
        {/* Ativar ou desativar texto de abertura(inicio ou coro de uma música e o id)  */}
        <Text style={[style.subTitle, { color: (isDarkMode) ? '#fff' : '#001' }]} >Textos de Abertura</Text>
        <Switch
          value={ativoAb}
          onValueChange={setAtivoAb}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={ativoAb ? '#069' : '#f4f3f4'}
        />
        <TouchableOpacity style={style.fundoBtn} >
          <Text style={style.buttonText} >Salvar Alterações</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
// componente do body principal
