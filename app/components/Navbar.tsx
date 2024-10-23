'use client'

import React from 'react'
import BaseButton from "./BaseButton";
import { TaskButton } from "../types"
import { useRouter  } from "next/navigation";

const Navbar = () => {
  const taskButton: TaskButton[] = [
    { title: 'Auto Delete Todo List', path: '/views/auto-todo' },
    { title: 'Create data from API', path: '/views/transformdata' },
    { title: 'Back to home', path: '/' }
  ]
  const router = useRouter() 

  const nextPage = (path: string): void => {
    router.push(path)
  }
  return (
    <div className="w-full flex items-center justify-center p-8 gap-6">
    {taskButton.map((item, index) => (        
      <BaseButton key={index} title={item.title} action={() => nextPage(item.path)} />
    ))}
    </div>
  )
}

export default Navbar