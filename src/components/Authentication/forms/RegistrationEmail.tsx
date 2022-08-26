import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

import styles from './authentication-react-hook-form.module.scss';

type Inputs = {
  example: string;
  exampleRequired: string;
};

type RegistrationEmailProps = {
  setVariant: (variant: 'default') => void;
};

const RegistrationEmail: React.FC<RegistrationEmailProps> = ({ setVariant }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      example: '',
      exampleRequired: '',
    },
  });

  console.log(watch('example')); // you can watch individual input by pass the name of the input

  const backForm = () => {
    setVariant('default');
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}>
      <div className={styles.form__back} onClick={backForm}>
        {'<'} Назад
      </div>

      <input
        className={styles.form__input}
        {...(register('example'), { required: true, maxLength: 10 })}
        placeholder="Имя и фамилия"
      />
      <input
        className={styles.form__input}
        {...(register('example'), { required: true, maxLength: 10 })}
        placeholder="Почта"
      />
      <input
        className={styles.form__input}
        {...register('exampleRequired', { required: true, maxLength: 10 })}
        placeholder="Пароль"
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <input className={styles.form__input_submit} type="submit" placeholder="Зарегистрироваться" />
    </form>
  );
};

export default RegistrationEmail;
