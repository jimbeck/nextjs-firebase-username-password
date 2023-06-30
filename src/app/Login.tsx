'use client';
import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <button onClick={() => signIn('google')}>Login</button>
  )
}
