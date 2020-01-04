import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

interface StateInterface {
  data?: DataInterface;
  isLoading: boolean;
  isError: boolean;
}

interface DataInterface {
  hits?: [];
}

interface ActionInterface {
  type: string;
  payload?: DataInterface;
}

const dataFetchReducer = (
  state: StateInterface,
  action: ActionInterface
): StateInterface => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case 'FETCH_FAIL':
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

const useDataApi = (
  initialUrl: string,
  initialData: object
): [StateInterface, Function] => {
  const [url, setUrl] = useState(initialUrl);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    data: initialData,
    isLoading: false,
    isError: false
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios(url);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (e) {
        dispatch({ type: 'FETCH_FAIL' });
      }
    };

    fetchData();
  }, [url]);

  return [state, setUrl];
};

export default useDataApi;
