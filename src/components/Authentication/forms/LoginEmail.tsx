import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './authentication-react-hook-form.module.scss';

type Inputs = {
  email: string;
  password: string;
};

type LoginEmailProps = {
  setVariant: (variant: 'default') => void;
};

const LoginEmail: React.FC<LoginEmailProps> = ({ setVariant }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

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
        placeholder="Имя и фамилия"
        type="name"
        {...register('email', {
          minLength: 3,
          maxLength: 30,
          required: true,
        })}
      />
      <input
        className={styles.form__input}
        placeholder="Имя и фамилия"
        type="name"
        {...register('password', {
          minLength: 3,
          maxLength: 30,
          required: true,
        })}
      />

      <input className={styles.form__input_submit} type="submit" placeholder="Войти" />
    </form>
  );
};

export default LoginEmail;
