export default {
	name: 'vocabulary',
	title: 'Vocabulary',
	type: 'document',
	fields: [
		{
			name: 'en',
			title: 'English',
			type: 'string',
			validation: (Rule) => Rule.required('Word is required'),
		},
		{
			name: 'vi',
			title: 'Vietnamese',
			type: 'string',
			validation: (Rule) => Rule.required('Meaning is required'),
		},
	],
}
