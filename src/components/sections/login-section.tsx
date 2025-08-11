"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const LoginSection = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === process.env.NEXT_PUBLIC_DIRECT_EXPRESS_PASSWORD) {
      setError('');
      // CHANGE THIS LINE to set your redirect destination:
      router.replace('@/casestudydirectexpress'); 
    } else {
      setError('Incorrect password.');
    }
  };

  return (
    <section className="bg-sand-100 py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <Card className="mx-auto w-full bg-white max-w-sm">
            <CardHeader className="flex flex-col items-center space-y-0">
              <img
                src="/images/logo.svg"
                alt="logo"
                width={94}
                height={18}
                className="mb-7 dark:invert"
              />
              <p className="mb-2 text-2xl font-bold">This case study is private.</p>
              <p className="text-muted-foreground">
                Please enter the password.
              </p>
            </CardHeader>
            <CardContent>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <Input
                  type="password"
                  name="password"
                  placeholder="Enter the password"
                  required
                  value={input}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInput(e.target.value);
                    if (error) setError('');
                  }}
                  autoComplete="current-password"
                  />
                  <Button type="submit" className="mt-2 w-full">
                  Enter
                  </Button>
                  {error && (
                  <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;