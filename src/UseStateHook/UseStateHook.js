import React, { useState } from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/



export const Form = () => {
	let [email, changeEmail] = useState('');
	let [password, changePassword] = useState('');
	let [authorization, authorizationClick] = useState(false);

	function onChangeEmail(event) {
		changeEmail(event.target.value)
	}

	function onChangePassword(event){
		changePassword(event.target.value)
	}	

	function onClickHandler(event){
		event.preventDefault();
		if(email !== "" && password !== ""){
			authorizationClick(true);
		}
	}

	return (
		<div>
			<input
				type="email"
				value="email"
				data-testid='input-email'
				onChange={onChangeEmail}
			/>
			<input
				type="password"
				value="password"
				data-testid='input-password'
				onChange={onChangePassword}
			/>
			<button onClick={onClickHandler} data-testid='submit'>Ok</button>>
			{(authorization)
				? <div data-testid="success-message">Вы вошли</div>
				: null
				}
		</div>
	)
};
