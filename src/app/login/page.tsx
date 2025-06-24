'use client';

import { AuthLayout } from '@/components/auth/AuthLayout';
// Example: src/app/signin/page.tsx
import { LoginForm } from '@/components/auth/LoginForm';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-2">Sign in to your account</h2>
        <p className="text-center text-gray-500 mb-6">Welcome back! Please enter your details.</p>
        <LoginForm />
      </div>
    </div>
  );
}