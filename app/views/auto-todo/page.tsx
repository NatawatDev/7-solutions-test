'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { TodoItems, MapIdTodoItems } from '../../types'
import ItemColumn from '../../components/ItemColumn'

const AutoTodoPage = () => {
  const mockupList = useMemo(() => {
    const todoItems: TodoItems[] = [
      { type: 'Fruit', name: 'Apple' },
      { type: 'Vegetable', name: 'Broccoli' },
      { type: 'Vegetable', name: 'Mushroom' },
      { type: 'Fruit', name: 'Banana' },
      { type: 'Vegetable', name: 'Tomato' },
      { type: 'Fruit', name: 'Orange' },
      { type: 'Fruit', name: 'Mango' },
      { type: 'Fruit', name: 'Pineapple' },
      { type: 'Vegetable', name: 'Cucumber' },
      { type: 'Fruit', name: 'Watermelon' },
      { type: 'Vegetable', name: 'Carrot' },
    ];

    return todoItems.map((item, index) => ({ ...item, id: index + 1 }))
  }, [])

  const [itemList, setItemList] = useState<MapIdTodoItems[]>(mockupList)
  const [selectedList, setSelectedList] = useState<MapIdTodoItems[]>([])

  const handleSelect = (selectedItem: MapIdTodoItems) => {
    setSelectedList(prevSelected => [...prevSelected, selectedItem])
    setItemList(prevList => prevList.filter(item => item.id !== selectedItem.id))
  }

  const handleMoveBack = (selectedItem: MapIdTodoItems) => {
    setSelectedList(prev => prev.filter(item => item.id !== selectedItem.id))
    setItemList(prev => [...prev, selectedItem])
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (selectedList.length > 0) {      
        const newSelectedList = [...selectedList]
        const shiftItem = newSelectedList.shift()

        if (shiftItem) {
          setItemList(prev => [...prev, shiftItem])
          setSelectedList(newSelectedList)
        }
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [selectedList])

  return (
    <div className='m-auto px-60 w-full h-full flex gap-6'> 
      <div className='flex flex-col w-[40%] h-full'>
        <ItemColumn dataList={itemList} action={handleSelect} />
      </div>
      <div className='w-full flex gap-2'>
        <div className='w-full flex flex-col text-center border-2 border-[#efeeef] h-full'>
          <p className='font-bold w-full bg-[#eef2f3] py-1'>Fruit</p>         
          <ItemColumn dataList={selectedList.filter(item => item.type === 'Fruit')} action={handleMoveBack} />
        </div>
        
        <div className='w-full flex flex-col text-center border-2 border-[#efeeef] h-full'>
          <p className='font-bold bg-[#eef2f3] py-1'>Vegetable</p>
          <ItemColumn dataList={selectedList.filter(item => item.type === 'Vegetable')} action={handleMoveBack} />
        </div>
      </div>    
    </div>
  )
}

export default AutoTodoPage