import { useState } from 'react'
import { useContent } from '../hooks/useContent'
import axios from "axios";
import { ContentModal } from '../components/ContentModal'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { SideBar } from '../components/ui/SideBar'
import { FRONTEND_URL, BACKEND_URL } from '../config'

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
            startIcon={<ShareIcon size='md'/>}
            onClick={async() => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                share: true
              }, {
                headers: {
                  "Authorization": localStorage.getItem("token")
                }
              });
              console.log(BACKEND_URL);
              console.log(FRONTEND_URL);
              console.log(response.data.hash);
              const shareUrl = `${FRONTEND_URL}${response.data.hash}`;
              console.log(shareUrl);
              navigator.clipboard.writeText(shareUrl);
            }}/>
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
