import type { ColumnDef } from "@tanstack/react-table"

export type VM = {
  id: string;
  name: string;
  status: "pending" | "running" | "stopped" | "terminated" | "suspended";
  createdAt: string;
  updatedAt: string;
  projectId: string;
  userId: string;
}

export const VMcolumns: ColumnDef<VM>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: info => info.getValue(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: info => info.getValue(),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: info => new Date(info.getValue() as string).toLocaleDateString(),
  }
]