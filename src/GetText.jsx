import React from 'react';
import { Text } from 'react-native';

const GetText = ({context, message, comment}) =>
  <Text context={context} comment={comment}>{    
    message     
  }</Text>

export default GetText;