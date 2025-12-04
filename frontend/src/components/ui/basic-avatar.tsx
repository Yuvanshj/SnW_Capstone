import { Avatar, AvatarFallback, AvatarImage } from './avatar'

const AvatarDemo = ({ src }: { src: string }) => {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback className='text-xs'>HR</AvatarFallback>
    </Avatar>
  )
}

export default AvatarDemo
