import {tw} from "twind"
export default function Footer() {
  return(
    <footer className={tw`bg-gray-200 p-4 flex justify-between`}>
    <span>&copy; 2023 Apollo</span>
  
    <nav>
      <a href="/about" className={tw`text-gray-800 mx-4`}>
        About
      </a>
      <a href="/contact" className={tw`text-gray-800`}>
        Contact
      </a>
    </nav>
  </footer>
  )
}