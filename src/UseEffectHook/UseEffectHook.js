import React, {useEffect, useState} from 'react'
import {getJoke} from '../utils'

/*
  Напишите компонент, который загрузит шутку о Чаке Норрисе
  Используйте useEffect

  Вам придётся использовать асинхронный эффект. Это имеет свои особенности.
*/


export const UseEffectHook = () => {
	let [joke, jokeState] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getJoke();

      jokeState(result.value);
    };

    fetchData();
  }, []);

  return <div data-testid="joke">{joke}</div>;
};
