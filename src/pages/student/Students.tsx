import React, { useEffect, useState } from 'react'
import { fetchAllStudents } from './getData'
import Student from './Student';

export default function Students() {
    const [students, setStudents] = useState<any>(null);

    useEffect(() => {
        getStudents()
    }, [])
    
    async function getStudents() {
        const s = await fetchAllStudents();
        setStudents(s.map((it: any) => <Student key={it.id} {...it} /> ))
    }

  return (
    <ul>
      {students}
    </ul>
  )
}
