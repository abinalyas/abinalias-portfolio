import { AdminLoginForm } from '@/components/admin/admin-login-form';
import { hasAdminPasswordConfigured } from '@/lib/admin-auth';

type AdminLoginPageProps = {
  searchParams?: {
    next?: string;
  };
};

export default function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  const nextPath = searchParams?.next || '/admin/bookings';

  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">Admin Access</p>
        <h1 className="page-title">Sign in to dashboard</h1>
        {!hasAdminPasswordConfigured() ? (
          <p className="section-lead">
            Set <code>ADMIN_PASSWORD</code> in your environment to enable admin login.
          </p>
        ) : null}
        <AdminLoginForm disabled={!hasAdminPasswordConfigured()} nextPath={nextPath} />
      </div>
    </section>
  );
}
