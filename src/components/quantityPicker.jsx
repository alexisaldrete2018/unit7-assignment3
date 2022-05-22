import './quantityPicker.css';
import { useState } from 'react';

const QuantityPicker = () => {
    let [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
        if(quantity>1){
            setQuantity(quantity - 1);
        }
    }


    return(
        <div className='quantityPicker'>
            <button onClick={handleDecrease} className='minusButton'>-</button>
            <label>{quantity}</label>
            <button onClick={handleIncrease} className='plusButton'>+</button>
        </div>
    );
}

export default QuantityPicker;