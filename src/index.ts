function $(query: string): HTMLElement | null {
    return document.querySelector(query);
}

function waitForCreateElement(name: string): Promise<HTMLElement> {
    return new Promise((resolve, reject) => {
        const intervalId: number = window.setInterval(() => {
            const $e: HTMLElement | null = $(name);
            if($e != null) {
                window.clearInterval(intervalId);
                resolve($e);
            }
        }, 101);
    });
}

export default waitForCreateElement;
