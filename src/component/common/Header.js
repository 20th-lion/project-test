import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function Header({ leftChild, rightChild }) {
  const navigate = useNavigate();
  return (
    <div>
      {leftChild} | {rightChild}
    </div>
  );
}
