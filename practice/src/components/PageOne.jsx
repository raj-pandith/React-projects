import React, { useContext } from 'react'
import { Krishna } from './context/KrishnaProvider';
import { MyDetails } from './context/MyDetailsProvider';
const PageOne = () => {
    let krishna = useContext(Krishna);
    let data = useContext(MyDetails);
    console.log(krishna);
    console.log(data);
    return (
        <div>
            page one <br />
        </div>
    )
}

export default PageOne
