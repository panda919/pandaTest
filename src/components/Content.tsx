import React, { ReactElement } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';

const SPAN: ViewStyle = { flex: 1 };

export default function Content({
  style = undefined,
  children,
}: {
  style?: ViewStyle | ViewStyle[];
  children: React.ReactNode;
}): ReactElement {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={StatusBar.currentHeight || 0}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={SPAN}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={StyleSheet.flatten([SPAN, style || undefined])}>
          {children}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
