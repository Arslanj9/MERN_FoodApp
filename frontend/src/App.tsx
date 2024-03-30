import './App.css'
import { Button } from "@/components/ui/button"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"


function App() {

  return (
    <>
      <Button>Click Me</Button>
      <Button variant="ghost">Click Me</Button>
      <Button variant="outline">Click Me</Button>
      <Button variant="link">Click Me</Button>
      <Button disabled>
        <EnvelopeClosedIcon className="mr-2 h-4 w-4 animate-ping" />
        Please wait
      </Button>
      <Button className='animate-pulse hover:bg-red-600'>
        <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
        Please wait
      </Button>
      <h1 className='animate-bounce'>Hello</h1>
    </>
  )
}

export default App
