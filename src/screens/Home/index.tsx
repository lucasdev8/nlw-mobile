import { View, Image } from 'react-native';

import { styles } from './styles';

import LogoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games';

export function Home() {
  return (
    <View style={styles.container}>
        <Image source={LogoImg} style={styles.logo}/>
        <Heading title='Encontre seu Duo!' subtitle='Selecione o GAME que deseja jogar...'/>
        <GameCard data={GAMES[0]}/>
    </View>
  );
}