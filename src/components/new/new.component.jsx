import React, {useState, useEffect} from "react";

import './new.styles.scss'

const New = ({getValues}) => {

    //imposto uno state
    const [val, setValues] = useState([]); //array di valori che si andranno a prendere da counter

    useEffect(() => {
        setValues(getValues());
        console.log('aggiornato New')
    }, [getValues]);

    return(
        <div className="new">
            {
            val.map((value) => (
                <span key={value}>
                    {value}
                </span>
            ))
            }
        </div>
    )
};

export default New;