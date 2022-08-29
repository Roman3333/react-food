import React, { useState } from 'react';

import Registration from './forms/Registration';
import Login from './forms/Login';

import styles from './authentication.module.scss';

type HeaderProps = {
  authVisible: boolean;
  setAuthVisible: (active: boolean) => void;
};

const Authentication: React.FC<HeaderProps> = ({ authVisible, setAuthVisible }) => {
  const [formType, setFormType] = useState<'registration' | 'login'>('registration');
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const changeLoginRegistration = () => {
    setIsAuth(!isAuth);
    setFormType(formType == 'login' ? 'registration' : 'login');
  };

  return authVisible === true ? (
    <div onClick={() => setAuthVisible(false)} className={styles.popup}>
      <div onClick={(e) => e.stopPropagation()} className={styles.form}>
        <div className={styles.form__left}></div>
        <div className={styles.form__right}>
          <div onClick={() => setAuthVisible(false)} className={styles.form__right_close}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={styles.form__right_title}>
            {!isAuth ? 'Регистрация' : 'Войти в аккаунт'}
          </div>
          {formType === 'registration' && !isAuth && <Registration />}
          {formType === 'login' && !!isAuth && <Login />}
          <div className={styles.form__right_footer}>
            {!isAuth ? (
              <>
                <span>Есть аккаунт?</span>{' '}
                <button onClick={changeLoginRegistration} className={styles.form__right_link}>
                  Войти
                </button>
              </>
            ) : (
              <button onClick={changeLoginRegistration} className={styles.form__right_link}>
                Регистрация
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <span hidden></span>
  );
};

export default Authentication;
