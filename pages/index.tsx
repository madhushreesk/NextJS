import { useRouter } from 'next/router'
import React from 'react'

const index = () => {

  const router = useRouter();

  const handleClick1 = () => {
    router.push("/templateone")
  }

  const handleClick2 = () => {
    router.push("/templatetwo")
  }

  const handleClick3 = () => {
    router.push("/templatethree")
  }

  return (
    <div>
      <h1>Hello world</h1>
      <div>
        <button onClick={handleClick1} className="button">Template one</button>
      </div>
      <div>
        <button onClick={handleClick2} className="button">Template two</button>
      </div>
      <div>
        <button onClick={handleClick3} className="button">Template three</button>
      </div>

    </div>
  )
}
export default index
