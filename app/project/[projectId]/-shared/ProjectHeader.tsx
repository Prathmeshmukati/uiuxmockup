import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProjectHeader = () => {
  return (
    <div className='flex item-center justify-between  p-4 shadow'>
      <div className="flex gap-2 items-center ">
           <Image src={'/logo.png'} alt="logo" width={40} height={40}></Image>
               <h2 className="text-xl font-semibold"><span className="text-primary">UIUX</span> MOCK</h2>
            </div>
            <Button> <Save/> save</Button>
    </div>
  )
}

export default ProjectHeader
