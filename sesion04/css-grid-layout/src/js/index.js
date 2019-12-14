import '../css/styles.css'

  (process.env.NODE_ENV !== 'prodiction')
  ? () => console.log('Development mode 💻👊🏻')
  : () => console.log('Production mode 🚀')