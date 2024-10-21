'use client'

import React, { useState } from 'react'
import { TodoItems } from '../../types'
import ItemColumn from '../../components/ItemColumn'

const autoTodoPage = () => {
  
  const todoItems:TodoItems[]  = [
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

  const [itemList, setItemList] = useState<TodoItems[]>(todoItems)
  const [fruitList, setFruitList] = useState<TodoItems[]>([])
  const [vegetableList, setVegetableList] = useState<TodoItems[]>([])

  const onClickfilterByType = (selectedItem: TodoItems):void => {

    const { type, name } = selectedItem
    const filterItem = itemList.filter((item) => item.name !== name)

    if (type === 'Fruit') {
      setFruitList([...fruitList, selectedItem]);      
    } else {
      setVegetableList([...vegetableList, selectedItem])
    }
    setItemList(filterItem)
  }

  const onClickMoveToBasket = (selectedItem: TodoItems):void => {

    const { type, name } = selectedItem

    if (type === 'Fruit') {
      setFruitList(fruitList.filter((item) => item.name !== name));
    } else {
      setVegetableList(vegetableList.filter((item) => item.name !== name));
    }
    setItemList([...itemList, selectedItem]); 
  }

  return (
    <div className='container m-auto w-full h-full flex gap-6'> 
      <div className='flex flex-col w-[50%]'>
        <ItemColumn dataList={itemList} action={onClickfilterByType} />
      </div>
      <div className='w-full h-full flex gap-2'>
        <div className='w-full flex flex-col text-center border-2 border-[#efeeef]'>
          <p className='font-bold w-full bg-[#eef2f3] py-1'>
            Fruit
          </p>         
          <ItemColumn dataList={fruitList} action={onClickMoveToBasket} />                                            
        </div>
        <div className='w-full flex flex-col text-center border-2 border-[#efeeef]'>
          <p className='font-bold bg-[#eef2f3] py-1'>
            Vegeteble
          </p>
          <ItemColumn dataList={vegetableList} action={onClickMoveToBasket} />                       
        </div>
      </div>
    
    </div>
  )
}

export default autoTodoPage