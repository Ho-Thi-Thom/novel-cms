export default {
	name: 'story',
	title: 'Story',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required('Title is required'),
		},
		{
			name: 'content',
			title: 'Content',
			type: 'text',
			validation: (Rule) => Rule.required('Content is required'),
		},
		{
			name: 'vocabularies',
			title: 'Vocabularies',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'vocabulary' }],
				},
			],
			validation: (Rule) => Rule.unique(),
		},
	],
}
