import Timer from "./Timer"
import logo from "./assets/logo.svg"

function App() {

  return (
    <article className="w-full h-screen flex justify-center items-center bg-black text-white">
      <img src={logo} alt="logo" className="absolute top-12 left-12 hidden md:block max-w-[130px]" />
      <Timer />

      <h4 className="text-xl md:text-3xl font-cody text-white absolute bottom-16 lg:bottom-6 right-6">7th Year Anniversary</h4>
    </article>
  )
}

export default App
