import { InputHTMLAttributes } from 'react';
import InputSC from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error }, props) => {
  return <InputSC {...props} placeholder={label} error={error} />;
};

export default Input;
