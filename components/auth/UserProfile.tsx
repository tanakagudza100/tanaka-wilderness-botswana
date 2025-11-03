'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LogoutButton from './LogoutButton';

export default function UserProfile() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div className="text-gray-400">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 border border-amber-500/20 rounded-2xl">
      <Avatar className="w-24 h-24 border-4 border-amber-500/30">
        <AvatarImage src={user.picture || ''} alt={user.name || 'User'} />
        <AvatarFallback className="bg-amber-600 text-white text-2xl">
          {user.name?.charAt(0).toUpperCase() || 'U'}
        </AvatarFallback>
      </Avatar>
      
      <div className="text-center">
        <h3 className="text-2xl font-serif text-amber-50 mb-1">{user.name}</h3>
        <p className="text-gray-400">{user.email}</p>
      </div>

      <LogoutButton />
    </div>
  );
}
