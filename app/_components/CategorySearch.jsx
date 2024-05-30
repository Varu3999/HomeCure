import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function CategorySearch() {
  return (
    <div className='mb-10 items-center flex flex-col gap-2 p-5'>
        <h2 className='font-bold text-4xl tracking-wide'>
            Search <spam className="text-primary">Doctors</spam>
        </h2>
        <h2 className='text-gray-500 text-xl'>Search your Doctor and Book Appointment easily</h2>
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search ..." />
            <Button type="submit">Search</Button>
        </div>
    </div>
  )
}

export default CategorySearch