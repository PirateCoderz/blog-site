'use client';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function page() {

    const [name, setname] = useState('');

    const dataPass = async () => {
        await axios.post('localhost:3000/api/data', {username: name});
    }
    
    useEffect(() => {
        dataPass();
    }, [])
  return (
    <div>

        <form>

            <input onChange={(e) => setname(e.target.value)} />
        </form>
    </div>
  )
}
