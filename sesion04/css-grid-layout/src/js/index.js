import '../css/styles.css'

  (process.env.NODE_ENV !== 'production')
  ? () => console.log('Development mode 💻👊🏻')
  : () => console.log('Production mode 🚀')