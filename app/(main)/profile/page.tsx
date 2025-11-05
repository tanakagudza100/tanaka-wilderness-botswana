import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { User, Mail, Shield, Key, ArrowLeft, LogOut, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default async function ProfilePage() {
  const session = await getSession();
  
  if (!session) {
    redirect('/api/auth/login');
  }

  const { user } = session;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1612] via-[#2a2018] to-[#1a1612] py-20 px-4">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-amber-200 hover:text-amber-100 hover:bg-white/5 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-amber-100 mb-2">
            Your Profile
          </h1>
          <p className="text-gray-400">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <div className="glass rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20">
          {/* Header Section with Avatar */}
          <div className="relative h-32 bg-gradient-to-r from-amber-900/40 to-amber-700/40">
            <div className="absolute -bottom-16 left-8">
              {user.picture ? (
                <img
                  src={user.picture}
                  alt={user.name || 'User'}
                  className="w-32 h-32 rounded-full border-4 border-[#2a2018] shadow-xl object-cover ring-2 ring-amber-500/30"
                />
              ) : (
                <div className="w-32 h-32 rounded-full border-4 border-[#2a2018] shadow-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center ring-2 ring-amber-500/30">
                  <User className="w-16 h-16 text-white" />
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="pt-20 pb-8 px-8">
            {/* User Name */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-amber-100 mb-1">
                {user.name || 'Safari Explorer'}
              </h2>
              <p className="text-gray-400 text-sm">Member since {new Date(user.updated_at || Date.now()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </div>

            {/* Information Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-600/20 rounded-lg">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-400 mb-1">Email Address</h3>
                    <p className="text-lg text-amber-100 break-all">{user.email}</p>
                  </div>
                </div>
              </div>

              {/* Email Verification Status */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${user.email_verified ? 'bg-green-600/20' : 'bg-red-600/20'}`}>
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-400 mb-1">Email Verification</h3>
                    <div className="flex items-center gap-2">
                      {user.email_verified ? (
                        <>
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <p className="text-lg text-green-400 font-medium">Verified</p>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-red-400" />
                          <p className="text-lg text-red-400 font-medium">Not Verified</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* User ID */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-600/20 rounded-lg">
                    <Key className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-400 mb-1">User ID</h3>
                    <p className="text-sm text-gray-500 break-all font-mono">{user.sub}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <Link href="/" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full bg-white/5 border-amber-500/30 text-amber-200 hover:bg-white/10 hover:text-amber-100 hover:border-amber-500/50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Safari
                </Button>
              </Link>
              <Link href="/api/auth/logout" className="flex-1">
                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 glass rounded-xl p-6 border border-amber-500/20">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-amber-600/20 rounded-lg">
              <Shield className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-amber-100 font-semibold mb-1">Privacy & Security</h3>
              <p className="text-gray-400 text-sm">
                Your information is secure and protected. We use industry-standard encryption to keep your data safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}