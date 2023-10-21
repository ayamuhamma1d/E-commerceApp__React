
import { useEffect, useState } from "react";
import axios from 'axios';
const useGetDetails=(api)=>{
        const [prodDetails, setProdDetails] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        useEffect(() => {
            const getDetails = async () => {
                try {
                    const response = await axios.get(api);
                    setProdDetails(response.data);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                    setLoading(false);
                }
            }
            getDetails();
        }, []);
        return [prodDetails, loading, error];
}
export default useGetDetails;
