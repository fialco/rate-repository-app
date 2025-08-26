import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';

import Text from './Text';
import theme from '../theme';

const initialValues = {
  username: '',
  password: ''
};

const styles = StyleSheet.create({
  inputField: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: theme.fontSizes.subheading,
    marginHorizontal: 20,
    marginTop: 20
  },
  signInButton: {
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    textAlign: 'center'
  }
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit
  });

  return (
    <View>
      <TextInput
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={styles.inputField}
      />
      <TextInput
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry={true}
        style={styles.inputField}
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text
          fontWeight={'bold'}
          color={'textTertiary'}
          fontSize={'subheading'}
          style={styles.signInButton}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;

    console.log(username, password);
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
