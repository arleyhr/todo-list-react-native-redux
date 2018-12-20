export default arr => arr.reduce((acc, item) => ({ ...acc, [item]: item }), {})
