import Background from '../../components/Login/Background';
import FormContainer from '../../components/Login/FormContainer';
import Logo from '../../components/Login/Logo';
import LoginForm from '../../components/Login/LoginForm';

const LoginPage = () => {
  return (
    <Background>
      <FormContainer>
        <Logo />
        <LoginForm />
      </FormContainer>
    </Background>
  );
};

export default LoginPage;