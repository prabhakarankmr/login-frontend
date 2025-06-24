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
      
      // Store tokens and user data
      setAuthTokens(response.accessToken, response.refreshToken);
      setUserData(response.user);
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Signup failed. Please try again.';
      setApiError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {apiError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {apiError}
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-4">
        <Input
          {...register('firstName')}
          type="text"
          label="First Name"
          placeholder="Enter your first name"
          error={errors.firstName?.message}
          autoComplete="given-name"
        />
        
        <Input
          {...register('lastName')}
          type="text"
          label="Last Name"
          placeholder="Enter your last name"
          error={errors.lastName?.message}
          autoComplete="family-name"
        />
      </div>
      
      <Input
        {...register('email')}
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        error={errors.email?.message}
        autoComplete="email"
      />
      
      <Input
        {...register('password')}
        type="password"
        label="Password"
        placeholder="Create a password"
        error={errors.password?.message}
        helperText="Must be at least 8 characters with uppercase, lowercase, and number"
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
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in here
          </a>
        </p>
      </div>
    </form>
  );
};