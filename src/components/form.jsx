import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../store/formReducer';

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const formData = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(Number(e.target.value));
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {
      name,
      age,
      gender,
    };

    dispatch(updateFormData(updatedFormData));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Имя:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Возраст:
          <input type="number" value={age} onChange={handleAgeChange} />
        </label>
        <br />
        <label>
          Пол:
          <select value={gender} onChange={handleGenderChange}>
            <option value="">Выбрать</option>
            <option value="Мужской">Мужской</option>
            <option value="Женский">Женский</option>
          </select>
        </label>
        <br />
        <button type="submit">Сохранить</button>
      </form>

      <div>
        <h2>Форма отправки:</h2>
        <p>Имя: {formData.name}</p>
        <p>Возраст: {formData.age}</p>
        <p>Пол: {formData.gender}</p>
      </div>
    </div>
  );
};

export default Form;