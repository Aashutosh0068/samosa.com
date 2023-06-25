// Set a cookie
const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
  
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  };

  export const getCookie = (name) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split('=');
      const cookieName = cookie[0];
      const cookieValue = cookie[1];
  
      if (cookieName === name) {
        return cookieValue;
      }
    }
  
    return null;
  };

  // Usage:
export default setCookie

  