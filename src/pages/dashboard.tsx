import { useState } from 'react'
import { useContent } from '../hooks/useContent'
import axios from "axios";
import { ContentModal } from '../components/ContentModal'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { SideBar } from '../components/ui/SideBar'
import { FRONTEND_URL, BACKEND_URL, TOKEN } from '../config'
import { NavTop } from '../components/ui/NavTop';

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents =  useContent();

  return (
    <>
    <div className='flex flex-row w-full'>
      <SideBar />
      <div>
        <NavTop />
      </div>
      <div className='m-2 mt-20 p-4 flex-1'>
        
        <ContentModal open={modalOpen} onClose={() => {setModalOpen(false);}} />

        <div className='flex justify-end gap-4'>
          <Button onClick={()=>{setModalOpen(true)}} variant={'primary'} size={'md'}
            text={'Add content'}
            startIcon={<PlusIcon size='md'/>}/>

          <Button variant={'secondary'} size={'md'}
            text={'Share brain'} 
            startIcon={<ShareIcon size='md'/>}
            onClick={async() => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                share: true
              }, {
                headers: {
                  "Authorization": localStorage.getItem(TOKEN)
                }
              });
              console.log(response.data.hash);
              const shareUrl = `${FRONTEND_URL}${response.data.hash}`;
              console.log(shareUrl);
              navigator.clipboard.writeText(shareUrl);
            }}/>
        </div>

        <div className='p-4 flex flex-wrap justify-center md:justify-normal md:gap-4'>
          {contents.map(({type, link, title}, index) =>
            <Card key={index} type={type} title={title} link={link}/>
          )}
        </div>
      </div>
    </div>
    </>
  )
}
