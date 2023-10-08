import Login from "../pages/Login"

const Welcome = () => {
  return (
    <>    
        <main className="max-[640px]:grid-cols-1 max-sm:justify-items-center grid grid-cols-2 min-h-screen min-w-screen bg-gray">
            <section className="self-center text-start place-self-center w-1/2 align-self-center">
                <h1 className="text-4xl mb-3 text-black tracking-normal font-bold">Welcome to <span className="text-blue text-5xl mb-3">WeMedia</span></h1>
                <p className="text-black text-lg font-medium tracking-wide">Connect with your friends around the world</p>
            </section>
            <section className="w-1/2 self-center"><Login/></section>
        </main>
    </>
  )
}

export default Welcome