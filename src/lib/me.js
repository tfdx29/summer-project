
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function useMe() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const session = await getSession();
                if (!session) {
                    throw new Error("You must be logged in");
                }

                const response = await fetch("/api/me");

                if (!response.ok) {
                    throw new Error("Forbidden resources");
                }

                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, error, loading };
}
