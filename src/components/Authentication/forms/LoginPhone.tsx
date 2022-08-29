import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './authentication-react-hook-form.module.scss';

type Inputs = {
  phone: string;
  password: string;
};

type LoginPhoneProps = {
  setVariant: (variant: 'default') => void;
};

const LoginPhone: React.FC<LoginPhoneProps> = ({ setVariant }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      phone: '',
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
        placeholder="Телефон"
        type="phone"
        {...register('phone', {
          minLength: 3,
          maxLength: 30,
          required: true,
        })}
      />
      <input
        className={styles.form__input}
        placeholder="Пароль"
        type="password"
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

export default LoginPhone;
