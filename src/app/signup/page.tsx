'use client';

import { AuthLayout } from '@/components/auth/AuthLayout';
import { SignupForm } from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join us today! Please fill in your information."
    >
      <SignupForm />
    </AuthLayout>
  );
}