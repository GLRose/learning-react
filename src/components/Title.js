import React, {useState, useEffect} from 'react'

const Title = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `You clicked ${count} times`
  });

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>click me!</button>
      <p>You clicked {count} times</p>
    </div>
  )
}

export default Title