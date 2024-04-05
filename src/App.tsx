import { SendHorizonal } from "lucide-react"

function App() {
  return (
    <main className="h-full bg-[url('/img/bg-mobile.png')] md:bg-[url('/img/bg-desktop.png')] bg-cover bg-top w-full flex justify-end items-center">
      <div className="flex h-full min-h-screen flex-col py-8 px-10 w-full items-end">
        <div className="w-full flex justify-end">
        </div>
        <div className="flex-1 flex flex-col gap-8 w-full justify-center max-w-[600px]">
          <div className="flex items-center gap-3">
            <img src="/img/logo-jornada-dev.png"/>
            <span className="text-white font-semibold text-2xl [text-shadow:_0_2px_2px_rgb(0_0_0_/_20%)]">jornadas.dev</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white [text-shadow:_0_2px_2px_rgb(0_0_0_/_60%)]">Pronto para a <span className="text-[#E8CF46]">decolagem?</span>🚀</h1>
          <div className="text-white font-semibold text-xl">Seja o primeiro a receber nossas atualizações:</div>
          <form className="w-full flex flex-col gap-3 md:flex-row">
            <input className="flex-1 px-8 py-3 bg-white bg-opacity-5 border rounded-full border-white outline-none text-white max-w-[333px]" placeholder="Digite seu melhor e-mail" required/>
            <button className="flex justify-center font-semibold items-center gap-3 bg-[#00A574] hover:bg-[#16c892] text-white rounded-full px-8 py-3 transition-all ease-in-out">Inscrever-se <SendHorizonal width={22} /> </button>
          </form>
          <span className="text-sm mt-[-25px] text-white">* Não enviamos Spam, fique tranquilo.</span>
          <span className="text-white font-semibold text-xl max-w-[550px]">
            Siga o <a href="https://www.instagram.com/jornadas.dev/" target="_blank" className="text-[#E8CF46] underline">@jornadas.dev</a> no instagram e junte-se à nossa missão de explorar o universo da tecnologia.
          </span>
            <span className="text-zinc-100 pb-8">
            © 2024 jornadas.dev - Todos os direitos reservados
            </span>
        </div>
      </div>
    </main>
  )
}

export default App
