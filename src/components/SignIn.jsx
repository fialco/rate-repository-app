import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import theme from '../theme';

const initialValues = {
  username: '',
  password: ''
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: theme.colors.foreground
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    fontSize: theme.fontSizes.subheading,
    marginTop: 20
  },
  inputDefault: {
    borderColor: theme.colors.textSecondary
  },
  inputError: {
    borderColor: theme.colors.error
  },
  signInButton: {
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    textAlign: 'center'
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required')
});

const getInputStyle = (touched, error) => {
  return [
    styles.inputField,
    touched && error ? styles.inputError : styles.inputDefault
  ];
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={getInputStyle(formik.touched.username, formik.errors.username)}
      />
      {formik.touched.username && formik.errors.username && (
        <Text color={'error'}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry={true}
        style={getInputStyle(formik.touched.password, formik.errors.password)}
      />
      {formik.touched.password && formik.errors.password && (
        <Text color={'error'}>{formik.errors.password}</Text>
      )}
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
