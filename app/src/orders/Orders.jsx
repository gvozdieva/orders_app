import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Positions from "../positions/Positions";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../actions/ordersActions";

function Orders({value}) {
    const orders = useSelector((state) => state.orders.orders)
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState({})

    const fetchData = () => {
        dispatch(getOrders(value))
    }


    useEffect(fetchData, [value])

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