import React, { useEffect, useState } from 'react'

export const Message = () => {
  
  const [coords, setCoords] = useState({x:0, y:0})
  const {x, y}  = coords 
    
    useEffect(() => {
     
        const mouseMove = (e)=>{
          const coords = {x: e.x, y: e.y}
          setCoords( coords ); //renderiza los eventos en x y y 

      }
    
      window.addEventListener('mousemove', mouseMove); //se ejecuta el eventlistener con las coordendas


      return () => {
        window.removeEventListener('mousemove', mouseMove); //remueve la referencia del mouseMove y se desmonta el componente
      }
    }, [])
    
    return (
    <div>
        
         <h3> Soy un h3</h3>
        <p>

        x:{x} y:{y}

        </p>
    </div>
  )
}
