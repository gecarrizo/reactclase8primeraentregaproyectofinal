import React, { useEffect, useState } from 'react';

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[])

    const increment = () =>{
        if(count < stock) {
            setCount(count +1 );
        }
    }
    const decrement = () =>{
        if(count > initial) {
            setCount(count -1 );
        }
    }

    return (
        <>
                <div className="card">
                    <div className="bottom d-flex flex-row justify-content-center">
                        <div className="input-group mb-3"> 
                            <span className="input-group-text" onClick={increment}>+</span> 
                            <input type="text" className="form-control" value={count}/> 
                            <span className="input-group-text" onClick={decrement}>-</span> 
                        </div> 
                        <button type="button" className="btn btn-primary btn-sm add" onClick={() => onAdd(count)}>Comprar</button>
                    </div>
                </div>
        </>
    );
}

export default ItemCount;