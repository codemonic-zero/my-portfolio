import React from 'react'
import { Nav } from './Nav'
import Hero from './Hero'
import { Skill } from './Skill'

const Home = () => {
    return (
        <>
            <main className='grid bg-neutral-900 h-full w-full'>
                <Nav />
                <Hero />
            </main>
        </>
    )
}

export default Home
