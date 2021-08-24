import MainPage from "../main";
import SettingsPage from '../settings/';
import StatisticsPage from "../statistics";
import Page from "../../core/templates/page";

class App { 
    private container: HTMLElement;
    private initialPage: MainPage;

    static renderIdPage(pageId: string) {
        document.body.innerHTML = '';
        let page: Page | null = null;

        if(pageId === 'main-page'){
            page = new MainPage(pageId); 
        } else if (pageId === 'settings-page') {
            page = new SettingsPage(pageId); 
        } else if (pageId === 'statistics-page') {
            page = new StatisticsPage(pageId); 
        }

        if(page){
            const pageHTML = page.render();
            document.body.append(pageHTML);
        }
    };

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderIdPage(hash);
        });
    }

    constructor() {
        this.container = document.body;
        this.initialPage = new MainPage('main-page');

    }


    run() {
        App.renderIdPage('main-page');
        this.enableRouteChange();
    }
}

export default App;