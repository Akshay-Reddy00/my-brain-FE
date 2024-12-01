import { useState } from 'react'
import { useContent } from '../hooks/useContent'
import { ContentModal } from '../components/ContentModal'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { SideBar } from '../components/ui/SideBar'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents =  useContent();

  return (
    <>
    <div className='grid grid-cols-5'>
      <div className='col-span-1 border-r'>
        <SideBar />
      </div>

      <div className='m-2 p-4 col-span-4'>
        <ContentModal open={modalOpen} onClose={() => {setModalOpen(false);}} />

        <div className='flex justify-end gap-4'>
          <Button onClick={()=>{setModalOpen(true)}} variant={'primary'} size={'md'}
            text={'Add content'}
            startIcon={<PlusIcon size='md'/>}></Button>
          <Button variant={'secondary'} size={'md'}
            text={'Share brain'} 
            startIcon={<ShareIcon size='md'/>}/>
        </div>

        <div className='flex gap-4 flex-wrap'>
          {contents.map(({type, link, title}, index) =>
            <Card key={index} type={type} title={title} link={link}/>
          )}
        </div>
      </div>
    </div>
    </>
  )
}
