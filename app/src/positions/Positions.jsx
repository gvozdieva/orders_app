import React, {useState, useEffect} from 'react';
import axios from 'axios';
import s from './positions.module.css'
import Collapse from '@material-ui/core/Collapse';

const isOpen = {

}


function Positions({id, isOpen}) {
    const [positions, setPositions] = useState([])
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8080/api/order/${id}`)
            .then((res) => {
                setPositions(res.data)
            }
            )
            .catch(error => console.log(error))
    }, [])

    return (
        <Collapse in={isOpen}>
            <div className={isOpen ? s.visible : s.hidden}>{positions.map( el => {
                return (
                    <div>
                        {
                            el.name
                        }
                    </div>
                )
            }  )}</div>

        </Collapse>
    )
}


export default Positions