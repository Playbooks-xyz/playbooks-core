# Overview

A collection of services for React projects.

## Installation

```
npm install @playbooks/services
```

## Usage

```tsx
import { useEffect, useState } from 'react';

import { AppWrapper } from 'components/app';
import { AlgoliaService } from '@playbooks/services';

const Route = () => {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState({ page: 0, pageSize: 10 });
  const [query, setQuery] = useState('test');

  // Computed
  const client = new AlgoliaService({ tableName: 'users' })

  // Hooks
  useEffect(() => {
    onSearch();
  }, [query]);

  // Actions
  const [onSearch, loading, error] = useQuery(async () => {
    const response = await client.queryIndex({ ...params, query });
    setUsers(response.data);
  })

  return (
    <AppWrapper>
      ...
    </AppWrapper>
  )
};

export default Route;
```

## Development

This project uses [yalc](https://npmjs.com/package/yalc) for local development.

- npm run dev
- switch to project
- npx yalc add @playbooks/components
- After that, this library should hot reload into the consuming application

## Scripts

- We've included a couple of helpful scripts for faster development.
- deploy: `npm run deploy -- 'commit message'`
- publish: `npm run publish -- 'commit message' [major|minor|patch]`

## Husky

- Husky configuration is setup to lint and format the repo on every commit
- Edit the `.husky/pre-commit` file to change your settings

## Author

- [Eric Hubbell](http://www.erichubbell.com)
- eric@erichubbell.com

## Notes

To see this library in action, checkout the following projects:

- [playbooks](https://www.playbooks.xyz)
- [playbooks blog](https://blog.playbooks.xyz)
- [playbooks docs](https://docs.playbooks.xyz)

