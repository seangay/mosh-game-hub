import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: abortController.signal })
      .then((response) => setGames(response.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        return setError(err.message);
      });

    return () => abortController.abort();
  }, []);

  return { games, error };
};

export default useGames;
