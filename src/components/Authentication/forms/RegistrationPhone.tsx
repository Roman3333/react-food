import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './authentication-react-hook-form.module.scss';

type Inputs = {
  fullname: RegExp;
  phone: string;
  password: string;
};

type RegistrationPhoneProps = {
  setVariant: (variant: 'default') => void;
};

const RegistrationPhone: React.FC<RegistrationPhoneProps> = ({ setVariant }) => {
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
        placeholder="Имя и фамилия"
        type="name"
        {...register('fullname', {
          minLength: 3,
          maxLength: 30,
          required: true,
          pattern: /^[A-Za-zА-Яа-я]+$/i,
        })}
      />
      {errors.fullname && <p className={styles.form__p}>Только буквы и не менее 3 символов</p>}
      <input
        className={styles.form__input}
        type="phone"
        placeholder="+7 (921) 661-19-82"
        {...register('password', {
          required: true,
          minLength: 9,
          maxLength: 30,
        })}
      />
      <input
        className={styles.form__input}
        type="password"
        placeholder="Пароль"
        {...register('password', { required: true, minLength: 9, maxLength: 30 })}
      />
      <input className={styles.form__input_submit} type="submit" placeholder="Войти" />
    </form>
  );
};

export default RegistrationPhone;
