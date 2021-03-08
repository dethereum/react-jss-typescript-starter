const fetch = require('cross-fetch');
const fs = require('fs');

// Apollo Client supports caching GraphQL responses, which can greatly reduce network traffic needs.
// In order to work correctly with interfaces in GraphQL, it needs to know some basic information about
// the shape of the GraphQL schema. This script pulls that necessary information from the GraphQL endpoint.
// See https://www.apollographql.com/docs/react/advanced/fragments.html#fragment-matcher
//
// The `jss graphql:update` command should be executed when Sitecore templates related to the site are altered.

const graphqlEndpoint =  `${process.env.REACT_APP_SITECORE_API_HOST}/api/${process.env.REACT_APP_SITECORE_JSS_APP_NAME}?sc_apikey=${process.env.REACT_APP_SITECORE_API_KEY}`;
console.log(`Updating GraphQL fragment type data from ${graphqlEndpoint}...`);



  fetch(graphqlEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      variables: {},
      query: `
        {
          __schema {
            types {
              kind
              name
              possibleTypes {
                name
              }
            }
          }
        }
      `,
    }),
  }).then(result => result.json())
    .then(result => {
      const possibleTypes = {};
  
      result.data.__schema.types.forEach(supertype => {
        if (supertype.possibleTypes) {
          possibleTypes[supertype.name] =
            supertype.possibleTypes.map(subtype => subtype.name);
        }
      });
  
      fs.writeFile('./src/temp/GraphQLFragmentTypes.json', JSON.stringify(possibleTypes), err => {
        if (err) {
          console.error('Error writing possibleTypes.json', err);
        } else {
          console.log('Fragment types successfully extracted!');
        }
      });
    });