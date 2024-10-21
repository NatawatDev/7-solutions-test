'use client'

import BaseButton from "./components/BaseButton";
import { TaskButton } from "./types"
import { useRouter  } from "next/navigation";

export default function Home() {
  const taskButton: TaskButton[] = [
    { title: 'Auto Delete Todo List', path: '/auto-todo' },
    { title: 'Create data from API', path: '/tranformdata' }
  ]
  const router = useRouter() 

  const nextPage = (path: string): void => {
    router.push(`/views/${path}`)
  }

  return (
    <div className="w-full flex items-center justify-items-center p-8 pb-20 gap-6">
      {taskButton.map((item, index) => (        
        <BaseButton key={index} title={item.title} action={() => nextPage(item.path)} />
      ))}
    </div>
  );
}
