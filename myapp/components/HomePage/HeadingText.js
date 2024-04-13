import React from 'react'

const HeadingText = () => {
  return (
    <div className='max-w-3xl space-y-4'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
            Sua jornada Fitness começa aqui. Seja bem vindo(a) a <span className='underline'>FIT&HEALTH</span>
        </h1>
        <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
            FIT&HEALTH é o seu melhor companheiro para acompanhar o <br />
            progresso, atingir metas e manter-se saudável...
        </h3>
    </div>
  )
}

export default HeadingText