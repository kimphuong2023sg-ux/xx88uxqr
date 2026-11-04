'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export default function Toast() {
  const { toast } = useApp();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div
      className="app-toast"
      style={{
        borderColor: isSuccess ? '#22c55e' : isError ? '#f87171' : '#38bdf8'
      }}
    >
      <i
        className={`fa-solid ${
          isSuccess ? 'fa-circle-check' : isError ? 'fa-circle-exclamation' : 'fa-circle-info'
        }`}
        style={{
          color: isSuccess ? '#22c55e' : isError ? '#f87171' : '#38bdf8',
          fontSize: '1.2rem'
        }}
      ></i>
      <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{toast.message}</span>
    </div>
  );
}
