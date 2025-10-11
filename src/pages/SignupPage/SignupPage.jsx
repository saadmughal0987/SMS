import Background from '../../components/Signup/Background';
import FormContainer from '../../components/Signup/FormContainer';
import SignupForm from '../../components/Signup/SignupForm';

const SignupPage = () => {
  return (
    <Background>
      <FormContainer>
        <SignupForm />
      </FormContainer>
    </Background>
  );
};

export default SignupPage;