import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Container,
  Code,
  Square,
  Nav,
  NavItem,
  NavText,
  SingOutButton,
  SingOutButtonText } from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <Square/>
      </Code>

      <Nav>
        <NavItem>
          <Icon name='help-outline' size={20} color='#fff'/>
          <NavText>Me Ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name='person-outline' size={20} color='#fff'/>
          <NavText>Meu Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name='credit-card' size={20} color='#fff'/>
          <NavText>Configurar cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name='smartphone' size={20} color='#fff'/>
          <NavText>Configurações do App</NavText>
        </NavItem>
      </Nav>

      <SingOutButton onPress={() => {}}>
        <SingOutButtonText>SAIR DO APP</SingOutButtonText>
      </SingOutButton>
    </Container>
  );
}

