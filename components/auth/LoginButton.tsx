'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LoginButton() {
  return (
    <Link href="/login">
      <Button
        className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold"
      >
        Log In
      </Button>
    </Link>
  );
}
