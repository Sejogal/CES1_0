import style from '@/assets/style/style';
import React, { useState } from "react";
import {
    Linking,
    Text,
    TouchableOpacity,
    View,
    useColorScheme
} from "react-native";

const Mais = () => {
    const scheme = useColorScheme();
    const isDarkMode = scheme === 'dark';

    const [estado, setEstado] = useState('inicio')

    const abrirLink = () => {
        Linking.openURL("https://www.google.com");
    }

    if (estado == 'inicio') {
        return (
            <View>
                {/* LINKS */}
                <Text style={[style.subTitle, { color: isDarkMode ? '#fff' : '#001' }]} >Links</Text>
                <TouchableOpacity style={style.kLink} onPress={abrirLink} >
                    <Text style={style.link} >Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.kLink} onPress={abrirLink} >
                    <Text style={style.link} >Sobre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.kLink} onPress={abrirLink} >
                    <Text style={style.link} >Termos de uso</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.kLink} onPress={() => Linking.openURL('https://www.google.com')} >
                    <Text style={style.link} >API</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export default Mais;