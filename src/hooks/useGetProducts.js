import { useEffect, useState } from "react";
import axios from 'axios';
const useGetProducts = (api) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await axios.get(api);
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        getAllProducts();
    }, []);
    return [products, loading, error];
};
export default useGetProducts;
