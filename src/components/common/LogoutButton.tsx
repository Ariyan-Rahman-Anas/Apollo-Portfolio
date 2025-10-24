/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { useLogoutMutation } from '@/redux/features/auth/auth.api';
import PrimaryButton from './PrimaryButton';

const LogoutButton = ({ isExpanded }: { isExpanded: boolean }) => {
  const router = useRouter();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      const result = await logout({}).unwrap();
      toast.success(result?.message);
      router.replace('/login');
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };
  return (
    <PrimaryButton
      title={isLoading ? 'Logging out...' : isExpanded ? 'Logout' : ''}
      icon={<LogOut />}
      type="button"
      onClick={handleLogout}
      variant="destructive"
      isDisabled={isLoading}
      isLoading={isLoading}
      className={`flex items-center justify-start cursor-pointer ${
        isExpanded ? 'px-3' : 'px-2 justify-center'
      }`}
    />
  );
};
export default LogoutButton;
