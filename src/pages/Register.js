import { RegisterForm } from '../components/Form/autsForms/RegisterForm';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h2>Registration</h2>
      <RegisterForm />
      <p className="TextAuth">
        Already registered? <NavLink to={'/login'}>Sign in</NavLink>
      </p>
    </div>
  );
};

export default Register;
