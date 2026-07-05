import Header from "@/components/header";
import EmployeeList from "@/components/employee-list";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-7xl">
        <Header />
        <EmployeeForm />
        <EmployeeList />
      </div>
    </main>
  );
}
import EmployeeForm from "@/components/employee-form";