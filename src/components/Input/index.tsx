import React, { useRef, useState, useCallback, ChangeEvent } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import { changeSearch } from '../../redux/filter/slice';
import styles from './Input.module.scss';

const Index: React.FC = () => {
  const [preValue, setPreValue] = useState<string>('');
  const refInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const delaySearch = useCallback(
    debounce((e) => {
      dispatch(changeSearch(e));
    }, 250),
    [],
  );

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPreValue(e.target.value);
    delaySearch(e.target.value);
  };

  const onClearInput = () => {
    dispatch(changeSearch(''));
    setPreValue('');
    refInput.current?.focus();
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
};

export default Index;
