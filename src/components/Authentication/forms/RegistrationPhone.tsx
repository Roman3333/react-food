import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

import styles from './authentication-react-hook-form.module.scss';

type Inputs = {
  fullname: string;
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
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      fullname: '',
      phone: '',
      password: '',
    },
  });

  console.log(watch('fullname')); // you can watch individual input by pass the name of the input

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
        {...(register('fullname'), { required: true, maxLength: 10 })}
        placeholder="Имя и фамилия"
      />
      <input
        className={styles.form__input}
        {...(register('phone'), { required: true, maxLength: 10 })}
        placeholder="Телефон"
      />
      <input
        className={styles.form__input}
        {...register('password', { required: true, maxLength: 10 })}
        placeholder="Пароль"
      />
      {errors.password && <p>This field is required</p>}
      <input className={styles.form__input_submit} type="submit" placeholder="Войти" />
    </form>
  );
};

export default RegistrationPhone;
