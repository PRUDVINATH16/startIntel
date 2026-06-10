// Frontend API configuration (single source of truth)
window.API_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? (window.location.port === '3000' ? '' : 'http://localhost:3000')
  : '';

