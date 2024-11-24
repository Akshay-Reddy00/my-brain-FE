import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
    <div className='p-4'>
      <div className='flex justify-end gap-4'>
        <Button variant={'primary'} size={'md'}
          text={'Add content'} 
          startIcon={<PlusIcon size='md'/>}/>
        <Button variant={'secondary'} size={'md'}
          text={'Share brain'} 
          startIcon={<ShareIcon size='md'/>}/>
      </div>
      <div className='flex gap-4'>
        <Card type={"youtube"} title={"First video"} 
          link="https://www.youtube.com/watch?v=f82RH6mBquc"/>
        <Card type={"youtube"} title={"Second video"} 
          link="https://www.youtube.com/watch?v=WNejYnN13bw"/>
        <Card type={"youtube"} title={"Third video"} 
          link="https://www.youtube.com/watch?v=aFxvlxOqz0Q"/>
      </div>
    </div>
    </>
  )
}

export default App
