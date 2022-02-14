import { useState } from 'react';

type FormInputProps = {
  wasSubmitted: boolean;
  getFieldError(value: string): string | null;
} & React.InputHTMLAttributes<HTMLInputElement>

export default function FormInput({
  wasSubmitted,
  getFieldError,
  type,
  name,
  placeholder,
}: FormInputProps) {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const [textColor, setTextColor] = useState('text-blue-500');
  const [borderColor, setBorderColor] = useState('border-blue-500');
  const errorMessage = getFieldError(value);
  const displayError = (wasSubmitted || touched) && errorMessage;

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
    if ((wasSubmitted || touched) && getFieldError(e.currentTarget.value)) {
      setTextColor('text-red-500');
      setBorderColor('border-red-500');
    } else {
      setTextColor('text-blue-500');
      setBorderColor('border-blue-500');
    }
  }

  return (
    <div
      className={`w-full relative my-4 border-b-2 focus-within:${borderColor}`}
    >
      <input
        type={type}
        name={name}
        id={`${name}-input`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onSubmit={() => setValue('')}
        required
        aria-describedby={displayError ? `${name}-error` : undefined}
        onBlur={() => setTouched(true)}
        // displayError={displayError as boolean}
        className={`block w-full appearance-none focus:outline-none bg-transparent`}
      />
      <label
        htmlFor={name}
        className={`absolute top-0 -z-1 duration-300 origin-0 ${textColor}`}
      >
        {name}{displayError ? ` (${errorMessage})` : ''}
      </label>
    </div>
  );
}
