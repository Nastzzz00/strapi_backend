import { mergeTypeDefs } from '@graphql-tools/merge'

import product from './Product'

const typeDefs = [product]

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
export default mergeTypeDefs(typeDefs)
