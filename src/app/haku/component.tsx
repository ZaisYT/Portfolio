"use client"
import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

export default function ComponenteHaku() {
  const [locked, setLocked] = React.useState(true);

  return (
    <>
      {locked ? (<LockedComponent setLocked={setLocked} />) : (<UnlockedComponent />)}
    </>
  )
}

function LockedComponent({setLocked}: {setLocked: React.Dispatch<React.SetStateAction<boolean>>}) {
  const handleLocked = () => {
    event?.preventDefault();
    const date = document.getElementById('date') as HTMLInputElement;

    if (date.value == "2025-03-05") {
      setLocked(false);
      return;
    } else {
      alert("Fecha incorrecta, intenta de nuevo.");
      return;
    }
  };

  return (
    <section className="p-4 min-h-screen bg-background-800 text-2xl font-Afacad_Flux">
      <Header />
      <p className='pt-4 max-w-5xl'>Esta pagina esta bloqueada, no puedes acceder a ella.</p>
      <p className='pt-4 max-w-5xl'>Si quieres desbloquearla, tienes que ingresar la fecha de nuestra ultima llamada hasta el momento.</p>

      <form className='pt-4 flex flex-col'>
        <label htmlFor="date" className='text-lg opacity-60'>Fecha</label>
        <input type="date" id='date' name='date' className='p-1 bg-background-700 rounded-md max-w-md'/>
        <button className='mt-4 p-2 bg-secondary-500 max-w-52 rounded-md' onClick={handleLocked}>Desbloquear</button>
      </form>
    </section>
  );
}

function UnlockedComponent() {
  return (
    <section className="p-4 min-h-screen bg-background-800 text-2xl font-Afacad_Flux">
      <Header />
      <p className='max-w-5xl'>Hey!</p>
      <p className='pt-4 max-w-5xl'>
        Si estas viendo esto significa que eres una persona muy especial para mi, por eso he creado esta página especialmente para ti, para desearte un feliz cumple y poder hacer las cosas a mi manera B).
      </p>

      <p className='pt-4 max-w-5xl'>Espero que te guste mucho, y que lo disfrutes, aunque sea un poco.</p>
      <p className='pt-4 max-w-5xl'>Siendo sincero, no sabía como hacerle pa regalarte algo, pero si, acá te va mi intento de regalito para una niña bonita. FELIZ CUMPLEAÑOSSS!!!!</p>

      <p className="pt-4 max-w-5xl">Se que no hemos hablado mucho últimamente pero eso no quita que siempre vas a estar ahí en mi mente, te ganaste un espacio en mi corazón y es lo que cuenta, te adoro, eres la mejor :3 </p>

      <p className='pt-4 max-w-5xl'>Eres una muy buena persona, me gusta mucho tu forma de ser, tu personalidad y tu manera de llevar las cosas, eres muy especial tanto como para mi como para matito :3</p>

      <p className="pt-4 max-w-5xl">Ahora te dejo el siguiente botón, que te llevará a una canción dedicada para tí, como lo suelo hacer para personas que de verdad me importan, sobre todo tú &lt;3</p>

      <p className="pt-4 max-w-5xl">PD: Aer cuando seguimos viendo mob psycho :pp</p>

      <button className='mt-8 mx-4 p-2 bg-secondary-500 max-w-52 rounded-md' onClick={() => {window.open("https://www.youtube.com/watch?v=tyKu0uZS86Q&ab_channel=Laufey", "_blank")}}>Canción que me recuerda a tí</button>
      <button className='mt-4 mx-4 p-2 bg-secondary-500 max-w-52 rounded-md' onClick={() => {window.open("https://www.youtube.com/watch?v=S2Cti12XBw4&ab_channel=Maroon5VEVO", "_blank")}}>Canción dedicatoria</button>
      <Image 
        src="https://cdn.discordapp.com/attachments/1305730434063405099/1306820004112764938/image.png?ex=68031578&is=6801c3f8&hm=a0cd9fe1ce1f64b91180218ef771994477812b0adaf6cad1e259f6039da029c7&" 
        alt="bleeehhh!!!" 
        width={100} 
        height={100}
        className='mt-8'
        draggable="false"
      />
      <p className='opacity-50 max-w-52 text-sm'>Yo cuando hacemos llamada :p</p>

    </section>
  );
}