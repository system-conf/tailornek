import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );

const mongoose = require('mongoose');

const ogrenciSchema = new mongoose.Schema({
  ad: String,
  soyad: String,
  yas: Number,
});

const Ogrenci = mongoose.model('Ogrenci', ogrenciSchema);

module.exports = Ogrenci;
