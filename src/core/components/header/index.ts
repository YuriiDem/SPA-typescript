import Components from "../../templates/components";
import { idPages } from "../../../pages/app";

const Buttons = [
    {
        id: idPages.MAIN_PAGE,
        text: 'Main Page',
    },
    {
        id: idPages.SETTINGS_PAGE,
        text: 'Settings Page',
    },
    {
        id: idPages.STATICS_PAGE,
        text: 'Statistics Page',
    },
];

class Header extends Components {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderNavButtons(){
        const navButtons = document.createElement('div');
        Buttons.forEach((button) => {
            const navButton = document.createElement('a');
            navButton.href = ``;
        });

    }

    render() {
        return this.container;
    }
}

export default Header;