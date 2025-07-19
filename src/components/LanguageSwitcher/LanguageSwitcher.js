import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguageSelect = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 10px;
`;

const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  padding: 8px 35px 8px 15px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 15px;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.7);
  }
  
  &:focus {
    background-color: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  }
  
  option {
    background-color: #333;
    color: white;
    padding: 8px;
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <LanguageSelect>
      <Select value={i18n.language} onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="hk">繁體中文</option>
        <option value="zh">简体中文</option>
      </Select>
    </LanguageSelect>
  );
};

export default LanguageSwitcher;