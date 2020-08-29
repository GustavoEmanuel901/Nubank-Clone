import { StyleSheet } from 'react-native'
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  overflow: hidden;
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #fff;
  padding: 10px;
  align-items: stretch;
`;

export const Square = styled.View`
  background: #222;
  height: 80px;
  width: 80px;
`;

export const Nav = styled.View`
  margin-top: 30px;
  width: 100%;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255,255,255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255,255,255, 0.8);
`;


export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SingOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SingOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
