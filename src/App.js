jsx
import React, { useState } from 'react';

// Компонент для отдельного поля формы
const FormField = ({ name, value, onChange }) => {
  return (
    <div>
      <label>{name}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

const ContactForm = () => {
  // Состояния для полей формы
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  // Обработчик изменения значения поля "Имя"
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Обработчик изменения значения поля "Email"
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Обработчик изменения значения поля "Сообщение"
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault(); // Отменить поведение по умолчанию (не обновлять страницу)

    // Создать объект FormData с данными полей формы
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Отправить данные на сервер
    fetch('/api/contact', {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          setSuccess(true); // Установить флаг успешной отправки
          setName(''); // Очистить поле "Имя"
          setEmail(''); // Очистить поле "Email"
          setMessage(''); // Очистить поле "Сообщение"
        }
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Контактная форма</h2>
      {success && <p>Сообщение успешно отправлено!</p>}
      <FormField name="Имя" value={name} onChange={handleNameChange} />
      <FormField name="Email" value={email} onChange={handleEmailChange} />
      <FormField name="Сообщение" value={message} onChange={handleMessageChange} />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ContactForm;