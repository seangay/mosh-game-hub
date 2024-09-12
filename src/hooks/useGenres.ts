import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: abortController.signal })
      .then((response) => {
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
