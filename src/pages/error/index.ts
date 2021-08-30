import Page from "../../core/templates/page";


export const enum ErrorTypes {
    ERROR_404 = 404,
}

class Error extends Page {
    private errorType: ErrorTypes | string;

    static TextObject: { [prop: string]: string } = {
        '404': 'Not Found!'
    };

    constructor(id: string, errorType: ErrorTypes | string) {
        super(id);
        this.errorType = errorType;
    }

    render() {
        const tittle = this.createHeaderTitle(Error.TextObject[this.errorType]);
        this.container.append(tittle);
        return this.container;
    }
}

export default Error;