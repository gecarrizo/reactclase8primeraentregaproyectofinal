import ItemCount from './ItemCount';

function ItemDetail({producto}) 
{
    const onAdd = (qty) => {
        alert(`Has seleccionado ${qty} items`);
    }

    return (
        <>
            {
            producto
            ? 
            <div id="main">
                <div className="thumbnail">
                    <img src={producto.thumbnail} alt={producto.name}/>
                </div>
                <div className="detail">
                    <h2>{producto.name}</h2>
                    <h4>{producto.description}</h4>
                    <p>{producto.details}</p>    
                    <div className="cost">
                        <p>$ {producto.cost}</p>
                    </div>
                    <div className="countFloat">
                        <ItemCount stock = {5} initial = {1} onAdd={onAdd} />
                    </div>
                </div>
            </div>
            : <img style={{width:"200px", height:"200px"}} src="../Loader.gif" alt="Wait"/>
            }
        </>
    );
}

export default ItemDetail