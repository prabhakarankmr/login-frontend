import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { authApi } from '@/lib/api';
import { setAuthTokens, setUserData } from '@/lib/auth';
import { SignupCredentials } from '@/lib/types/auth';

const signupSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const SignupForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string>('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupCredentials>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupCredentials) => {
    setIsLoading(true);
    setApiError('');

    try {
      const response = await authApi.signup(data);

      setAuthTokens(response.accessToken, response.refreshToken);
      setUserData(response.user);

      router.push('/dashboard');
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Signup failed. Please try again.';
      setApiError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-br from-green-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 mt-12 mb-8">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 rounded-full p-3 mb-2">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
            </svg>
          </div>
          
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {apiError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {apiError}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              {...register('firstName')}
              type="text"
              label="First Name"
              placeholder="Enter your first name eg.prabha"
              error={errors.firstName?.message}
              autoComplete="given-name"
            />

            <Input
              {...register('lastName')}
              type="text"
              label="Last Name"
              placeholder="Enter your last name eg.KMR"
              error={errors.lastName?.message}
              autoComplete="family-name"
            />
          </div>

          <Input
            {...register('email')}
            type="email"
            label="Email Address"
            placeholder="Enter your email eg.prabhatest@gmail.com"
            error={errors.email?.message}
            autoComplete="email"
          />

          <Input
            {...register('password')}
            type="password"
            label="Password"
            placeholder="Create a password"
            error={errors.password?.message}
            helperText="At least 8 characters, uppercase, lowercase, and number"
            autoComplete="new-password"
          />

          <Input
            {...register('confirmPassword')}
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            error={errors.confirmPassword?.message}
            autoComplete="new-password"
          />

          <Button
            type="submit"
            className="w-full"
            isLoading={isLoading}
            disabled={isLoading}
          >
            Create Account
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-blue-600 hover:text-blue-500 transition">
                Sign in here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );

    
};