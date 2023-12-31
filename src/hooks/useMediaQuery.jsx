import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [match, setMatch] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.match !== match) {
            setMatch(media.match);
        };
        const listener = () => setMatch(media.match);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
        
    }, [match, query] );
    return match;
}

export default useMediaQuery;