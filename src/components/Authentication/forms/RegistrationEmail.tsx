import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import styles from './authentication-react-hook-form.module.scss';

type Inputs = {
  fullname: string;
  email: string;
  password: string;
};

type RegistrationEmailProps = {
  setVariant: (variant: 'default') => void;
};

const RegistrationEmail: React.FC<RegistrationEmailProps> = ({ setVariant }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  const backForm = () => {
    setVariant('default');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__back} onClick={backForm}>
        {'<'} Назад
      </div>
      <input
        className={styles.form__input}
        {...register('fullname', {
          required: true,
          maxLength: 30,
          minLength: 3,
          pattern: /^[A-Za-zА-Яа-я]+$/i,
        })}
        placeholder="Имя и фамилия"
        type="name"
      />
      <input
        className={styles.form__input}
        {...register('email', { required: true, maxLength: 30, minLength: 3 })}
        placeholder="Почта"
        type="email"
      />
      {errors.fullname && <p className={styles.form__p}>Только буквы и не менее 3 символов</p>}
      <input
        className={styles.form__input}
        {...register('password', { required: true, maxLength: 30, minLength: 9 })}
        placeholder="Пароль"
        type="password"
      />
      <input className={styles.form__input_submit} type="submit" placeholder="Зарегистрироваться" />
    </form>
  );
};

export default RegistrationEmail;
