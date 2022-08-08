import { useEffect, useState } from "react";

const useContentId = () => {
    const [contentIdArray, setcontentIdArray] = useState(null);
    
    const getContentId = async () => {
        const response = 1
        const json = await response.json();
        const baseArray = await json.response.body.items.item;
        const result = await baseArray.map(item => item.contentid);
        console.log(result);
        setcontentIdArray(result);
    }
    useEffect(() => {
        getContentId();
    },[])
    return contentIdArray;
}

export default useContentId;