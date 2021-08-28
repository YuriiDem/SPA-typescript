import MainPage from "../main";
import SettingsPage from '../settings/';
import StatisticsPage from "../statistics";
import Page from "../../core/templates/page";
import Header from "../../core/components/header";

export const enum idPages {
    MAIN_PAGE = 'main-page',
    SETTINGS_PAGE = 'settings-page',
    STATICS_PAGE = 'statistics-page',
}

class App { 
    private static container: HTMLElement = document.body;
    private static defaultPageid: string = 'current-page';
    private initialPage: MainPage;
    private header: Header;

    static renderIdPage(pageId: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageid}`);
        if(currentPageHTML){
            currentPageHTML.remove();
        }

        let page: Page | null = null;

        if(pageId === idPages.MAIN_PAGE){
            page = new MainPage(pageId); 
        } else if (pageId === idPages.SETTINGS_PAGE) {
            page = new SettingsPage(pageId); 
        } else if (pageId === idPages.STATICS_PAGE) {
            page = new StatisticsPage(pageId); 
        }

        if(page){
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageid;
            App.container.append(pageHTML);
        }
    };

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderIdPage(hash);
        });
    }

    constructor() {
        this.header = new Header('header', 'header-container');
        this.initialPage = new MainPage('main-page');
    }


    run() {
        App.container.append(this.header.render());
        App.renderIdPage('main-page');
        this.enableRouteChange();
    }
}

export default App;