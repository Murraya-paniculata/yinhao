import React, { useEffect, useState } from 'react'
import { fetchAllStudents } from './getData'
import Student, { IStudent } from './Student';

type TStudents = {
  students: IStudent[];
}
export default function Students(props: TStudents) {
    const students= props.students.map((it: any) => <Student key={it.id} {...it} /> )
  return (
    <ul>
      {students}
    </ul>
  )
}
