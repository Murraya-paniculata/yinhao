import React from 'react'

interface IStudent {
    name: string;
    email: string;
    sex: number;
    birth: string;
}

export default function Student(props: IStudent) {
  return (
    <li>
        【姓名】{props.name};
        【email】{props.email};
        【性别】{props.sex ===1 ? "男": "女"};
        【出生年月】{props.birth}
    </li>
  )
}
