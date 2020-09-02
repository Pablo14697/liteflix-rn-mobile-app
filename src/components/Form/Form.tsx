// REACT
import React from 'react';
import { TextInputProps, View } from 'react-native';

// REDUX
import { BaseFieldProps, Field, WrappedFieldInputProps } from 'redux-form';

// COMPONENTS
import Typography from '../Typography/Typography';

// STYLES
import { Input } from './styles';

interface InputProps {
  input: {
    error: string;
    onChange: (value: string) => void;
  };
}

type CustomInputProps = InputProps & TextInputProps & WrappedFieldInputProps;

const CustomInput = ({ input, placeholder }: CustomInputProps) => {
  return (
    <View>
      <Input onChangeText={input.onChange} placeholder={placeholder} />
      <Typography color="white">{input.error}</Typography>
    </View>
  );
};

type ReactNativeTextInputPropsToPick = 'placeholder';

type PickedReactNativeTextInputProps = Pick<TextInputProps, ReactNativeTextInputPropsToPick>;

const FieldForm: React.FC<BaseFieldProps & PickedReactNativeTextInputProps> = (props) => (
  <Field component={CustomInput} {...props} />
);
export default FieldForm;
