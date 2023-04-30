import { useEffect, useState } from "react";
import axios from "axios";
function useFetch(url, method, body) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    const source = axios.CancelToken.source();

    axios({
      method,
      url,
      body,
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError(err);
      });
    return () => {
      source.cancel;
      setLoading(true);
    };
  }, [url]);

  return [data, error, loading];
}

export default useFetch;
