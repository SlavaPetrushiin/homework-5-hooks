import React, {useState} from 'react';

/*
    В этом задании мы потренируемся писать простой кастомный хук.

    Хук будет представлять собой счётчик.

    Он должен возвращать объект со значениями:

    {count, increment, decrement}

    count - текущее значение счётчика
    increment - функция, увеличивает count на 1
    decrement - функция, уменьшает count на 1
*/

export const useCounter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return { count, increment, decrement };
};

//const testRenderer = TestRenderer.create(useCounter);