import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import vocabulary from './vocabulary'
import story from './story'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([vocabulary, story]),
})
