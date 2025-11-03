'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LogoutButton() {
  return (
    <Link href="/api/auth/logout">
      <Button
        variant="outline"
        className="border-amber-500/30 text-amber-100 hover:bg-amber-500/10"
      >
        Log Out
      </Button>
    </Link>
  );
}
