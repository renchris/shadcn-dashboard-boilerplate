import ProfileDropdown from './ProfileDropdown';

export default function UserProfile() {
  // In a real app, fetch user session on the server here
  const user = { name: 'Chris', email: 'chris@example.com' };

  return (
    <div className="flex items-center gap-2">
      <ProfileDropdown user={user} />
    </div>
  );
}