import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Positions from "../positions/Positions";

function Orders({value}) {
    const [isOpen, setIsOpen] = useState({})

    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8080/api/order?filter=${value}`)
            .then((res) => {
                    setOrders(res.data.map((item)=>{
                        return {
                            ...item,
                            isOpen: false
                        }
                    }))
                }
            )
            .catch(error => console.log(error))
    }, [value])

    const onToggle=(id)=>{
        orders.filter((item)=>{
            return item.id === id? setIsOpen({
                [id]: !isOpen[id]
            }): setIsOpen({
                [id]:!isOpen[id]
            });
        })
    }

    return (
        <>
            <ul>
                {orders !== undefined ? orders.map((el) => <li key={el.id}>
                    <button onClick={()=>onToggle(el.id)}>BUTTON</button>
                    {el.docNum} {el.docDate} {el.description}
                    <div><Positions id={el.id} isOpen={isOpen[el.id]}/></div>
                </li>) : <p>NO ITEMS</p>}
            </ul>
        </>
    )
}


export default Orders