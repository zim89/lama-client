const Endpoint = {
  AUTH: {
    LOGIN: 'http://localhost:8000/api/auth/jwt/create/',
    REGISTRATION: 'http://localhost:8000/api/auth/users/',
    RECOVERY: 'http://localhost:8000/api/auth/users/reset_password/',
    REFRESH: 'http://localhost:8000/api/auth/jwt/refresh/',
    VERIFY: 'http://localhost:8000/api/auth/jwt/verify/',
  },
};
export default Endpoint;
