import { Button } from '@/components/ui/button';
import { Receipt, NotebookPen, AlarmClockPlus } from "lucide-react";
import { Payment, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import Link from 'next/link';

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      // ...
    ]
  }

export default async function Facturas(){
    const data = await getData()
    return(<div>
        <div className='flex space-x-4 p-4'>
            <Link href="#" className='rounded-md border px-4 py-3'><Receipt className='mb-2 '/>Nueva factura</Link>
            <Link href="#" className='rounded-md border px-4 py-3'><NotebookPen className='mb-2 '/>Crear Reporte</Link>
            <Link href="#" className='rounded-md border px-4 py-3'><AlarmClockPlus className='mb-2 '/>Nuevo Recordatorio</Link>
        </div>
        <div className='flex flex-col p-4'>
            <DataTable columns={columns} data={data} />
      </div>
    </div>
    )
  }