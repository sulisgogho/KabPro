import { verifySession } from '@/lib/session';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();
  if (session.isAuth) {
    redirect('/admin');
  }

  return <>{children}</>;
}
