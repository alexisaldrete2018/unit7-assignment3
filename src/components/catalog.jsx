import Product from "./product";
import DataService from "../services/dataService";
import { useState , useEffect} from "react";

const Catalog = () => {

    let [products, setProducts] = useState([]);
    
    const loadCatalogData = () => {
        let dataService = new DataService();
        let catalogData = dataService.getCatalog();
        setProducts(catalogData);
    }

    useEffect(() => {
        loadCatalogData();
    });

    return(
        <div className="catalog">
            <h1>We have {products.length} items</h1>
            {
                products.map((product) => (<Product key={product._id} data={product}></Product>))
            }
        </div>
    );

}

export default Catalog;
