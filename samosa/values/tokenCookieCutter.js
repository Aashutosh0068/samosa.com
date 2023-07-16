let token = ''

export default function CookieCutter(cookieData){
    const cookies = cookieData.split(';');

    // Find the "token" cookie and extract its value
    const tokenCookie = cookies.find((cookie) => cookie.trim().startsWith('token='));

    if (tokenCookie) {
      // Extract the value of the "token" cookie
      token = tokenCookie.split('=')[1].trim();
    }

    return token;
}