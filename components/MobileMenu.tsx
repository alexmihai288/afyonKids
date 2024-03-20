"use client"
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { IoMdMenu } from 'react-icons/io'

export const MobileMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-inherit invisible -mr-5'>
          <IoMdMenu className="text-4xl text-white visible" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>ddsa</NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
