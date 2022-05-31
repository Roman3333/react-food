import React, { useRef, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

import styles from './Input.module.scss';

function Index({ setSearchValue }) {
  const [preValue, setPreValue] = useState('');
  const refInput = useRef();

  const delaySearch = useCallback(
    debounce((e) => {
      setSearchValue(e);
    }, 250),
    [],
  );

  const onChangeValue = (e) => {
    setPreValue(e.target.value);
    delaySearch(e.target.value);
  };

  const onClearInput = () => {
    setSearchValue('');
    setPreValue('');
    refInput.current.focus();
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src="./img/search.svg" alt="search" />
      <input
        className={styles.input}
        ref={refInput}
        value={preValue}
        onChange={onChangeValue}
        type="text"
        placeholder="поиск пиццы"
      />
      {preValue && (
        <img
          className={styles.clearSearch}
          src="./img/clear-input.svg"
          alt="clearSearch"
          onClick={onClearInput}
        />
      )}
    </div>
  );
}

export default Index;
