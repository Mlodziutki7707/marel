import Header from "@/components/header";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-7xl">
        <Header />
        <EmployeeForm />
      </div>
    </main>
  );
}
import EmployeeForm from "@/components/employee-form";