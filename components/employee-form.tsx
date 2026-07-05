import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createEmployee } from "@/actions/employee-actions";

export default function EmployeeForm() {
  return (
    <section className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-semibold text-slate-800">
        Dodaj pracownika
      </h2>

      <form action={createEmployee} className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-700">
            Imię
          </label>
          <Input
            type="text"
            name="firstName"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-700">
            Nazwisko
          </label>
          <Input
            type="text"
            name="lastName"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-700">
            Stawka godzinowa
          </label>
          <Input
            type="number"
            name="hourlyRate"
            min="0"
            step="0.01"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
          />
        </div>

        <Button type="submit" className="mt-2">
          Dodaj pracownika
        </Button>
      </form>
    </section>
  );
}