import './product.css';
import QuantityPicker from './quantityPicker';

const Product = (props) => {
    // let  [] = useState(1);Question 

    return (
        <div className='product'>
            <img className='productImage' src={'/images/'+props.data.image}></img>
            <h2>{props.data.title}</h2>
            <br/>
            <label>Price: ${(props.data.price).toFixed(2)}</label>
            <label>Total: 1</label>
            <QuantityPicker></QuantityPicker>
            <button className='addButton'>Add</button>
        </div>
    );
}

export default Product;