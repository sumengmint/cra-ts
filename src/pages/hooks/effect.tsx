import React, { Fragment, useState } from 'react';
import useDataApi from '../../components/customHook/index';

export interface HitsItem {
  objectID?: string;
  url?: string;
  title?: string;
}

export const Effect: React.FC = () => {
  const [query, setQuery] = useState('redux');
  const [state, doFetch] = useDataApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    {
      hits: []
    }
  );

  return (
    <Fragment>
      <form
        onSubmit={event => {
          doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.currentTarget.value)}
        />
        <button type="submit">Search</button>
      </form>

      {state.isError && <div>Something went wrong...</div>}

      {state.isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {state.data &&
            state.data.hits &&
            state.data.hits.map((item: HitsItem) => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
        </ul>
      )}
    </Fragment>
  );
};
