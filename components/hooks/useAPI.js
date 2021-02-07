import { useEffect, useState } from 'react';

function useAPI() {
        const [apiData, setApiData] = useState([]);

        useEffect(() => {
            fetch(`https://api.hashnode.com/`).then().then();
        }, [])
    }

export default { useAPI }
