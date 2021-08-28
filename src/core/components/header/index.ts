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
        const pageButtons = document.createElement('div');
        Buttons.forEach((button) => {
            const navButton = document.createElement('a');
            navButton.href = `#${button.id}`;
            navButton.innerText = button.text;
            pageButtons.append(navButton);
        });
        this.container.append(pageButtons);
    }

    render() {
        this.renderNavButtons();
        return this.container;
    }
}

export default Header;