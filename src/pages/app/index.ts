import MainPage from "../main";
import SettingsPage from '../settings/'

class App { 
    private container: HTMLElement;
    private initialPage: MainPage;

    constructor() {
        this.container = document.body;
        this.initialPage = new SettingsPage('main');

    }



    run() {
        const mainPageHTML = this.initialPage.render();
        this.container.append(mainPageHTML);
    }
}

export default App;