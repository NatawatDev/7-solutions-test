'use client'

import React, { useState, useMemo } from 'react'
import { TodoItems, MapIdTodoItems } from '../../types'
import ItemColumn from '../../components/ItemColumn'

const AutoTodoPage = () => {
  
  const itemList = useMemo(() => {
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
    ]

    return todoItems.map((item, index) => {
      return { ...item, id: index + 1, isSelected: false }
    })
  }, [])

  const [selectedItems, setSelectedItems] = useState<MapIdTodoItems[]>(itemList)

  const handleClick = (selectedValue: MapIdTodoItems, isSelected: boolean):void => {
    const selectedIndex = selectedItems.findIndex((item) => item.id === selectedValue.id)
    const updatedItem = (prev:MapIdTodoItems[]) => prev.map((item, index) => {
      return index === selectedIndex ? { ...item, isSelected } : item
    })
    setSelectedItems(updatedItem)
  }

  const handleSelect = (selectedValue: MapIdTodoItems):void => {
    handleClick(selectedValue, true)
    
    setTimeout(() => {
      handleClick(selectedValue, false)
    }, 5000)
  }

  return (
    <div className='container m-auto w-full h-full flex gap-6'> 
      <div className='flex flex-col w-[50%]'>
        <ItemColumn dataList={selectedItems.filter((item) => !item.isSelected)} action={handleSelect} />
      </div>
      <div className='w-full h-full flex gap-2'>
        <div className='w-full flex flex-col text-center border-2 border-[#efeeef]'>
          <p className='font-bold w-full bg-[#eef2f3] py-1'>Fruit</p>         
          <ItemColumn dataList={selectedItems.filter((item) => item.type === 'Fruit' && item.isSelected)} action={(item) => handleClick(item, false)} />                                            
        </div>
        
        <div className='w-full flex flex-col text-center border-2 border-[#efeeef]'>
          <p className='font-bold bg-[#eef2f3] py-1'>Vegeteble</p>
          <ItemColumn dataList={selectedItems.filter((item) => item.type === 'Vegetable' && item.isSelected)} action={(item) => handleClick(item, false)} />                       
        </div>
      </div>
    
    </div>
  )
}

export default AutoTodoPage