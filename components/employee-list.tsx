import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/card";

export default async function EmployeeList() {
  const employees = await prisma.user.findMany({
    where: {
      active: true,
      role: "EMPLOYEE",
    },
    orderBy: {
      lastName: "asc",
    },
  });

  return (
    <Card className="mt-6 p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Pracownicy
      </h2>

      {employees.length === 0 ? (
        <p className="text-slate-500">
          Brak pracowników.
        </p>
      ) : (
        <div className="space-y-3">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <p className="font-semibold">
                  {employee.firstName} {employee.lastName}
                </p>

                <p className="text-sm text-slate-500">
                  {Number(employee.hourlyRate).toFixed(2)} zł / h
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}