import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'ec201899095f4ff88e9409eafb1f7329', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
