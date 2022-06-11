import React, { useRef, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import { changeSearch } from '../../redux/slices/filtersSlice';
import styles from './Input.module.scss';

function Index() {
  const [preValue, setPreValue] = useState('');
  const refInput = useRef();
  const dispatch = useDispatch();

  const delaySearch = useCallback(
    debounce((e) => {
      dispatch(changeSearch(e));
    }, 250),
    [],
  );

  const onChangeValue = (e) => {
    setPreValue(e.target.value);
    delaySearch(preValue);
  };

  const onClearInput = () => {
    dispatch(changeSearch(''));
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
