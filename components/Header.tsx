import {tw} from "twind"

export default function Header() {
  return(
    <header className={tw`bg-blue-500 p-4 flex justify-between`}>
        <a href="/" className={tw`text-white font-bold text-2xl`}>
          Apollo
        </a>
      </header>
  )
  
      }