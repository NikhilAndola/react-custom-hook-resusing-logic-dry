import { useEffect, useState } from 'react';

export const useApiFetch = (url) => {
  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [statusText, setStatusText] = useState();

  useEffect(() => {
    const getData = async () => {
      const apiData = await fetch(url);
      const result = await apiData.json();
      setData(result);
      setStatus(apiData.status);
      setStatusText(apiData.statusText);
      console.log(data);
    };

    getData();
  }, [url]);

  return [data, status, statusText];
};
