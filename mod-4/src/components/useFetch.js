import React, { useEffect, useState, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, status: 'loading' };
    case 'error':
      return { ...state, status: 'error' };
    case 'loaded-data':
      return { ...state, status: 'ready', data: action.payload };
  }

  return state;
}

export function useFetch(url) {
  //   const [data, setData] = useState(null);
  //   const [status, setStatus] = useState('inintial');
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    status: 'inintial',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        // setStatus('loading');
        dispatch({ type: 'loading' });
        const rsp = await fetch(url);
        if (rsp.ok) {
          const data = await rsp.json();
          dispatch({ type: 'loaded-data', payload: data });
          //   setData(data);
          //   setStatus('ready');
        } else {
          dispatch({ type: 'error' });
          //   setData(null);
          //   setStatus('error');
        }
      } catch (error) {
        dispatch({ type: 'error' });
        // setData(null);
        // setStatus('error');
      }
    }

    fetchData();
  }, [url]);

  return state;
}
