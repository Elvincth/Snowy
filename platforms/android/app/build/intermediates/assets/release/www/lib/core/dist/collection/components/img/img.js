export class Img {
    srcChanged() {
        this.addIO();
    }
    componentDidLoad() {
        this.addIO();
    }
    addIO() {
        if (this.src === undefined) {
            return;
        }
        if ('IntersectionObserver' in window) {
            this.removeIO();
            this.io = new IntersectionObserver(data => {
                if (data[0].isIntersecting) {
                    this.loadSrc = this.src;
                    this.removeIO();
                    this.ionImgDidLoad.emit();
                }
            });
            this.io.observe(this.el);
        }
        else {
            setTimeout(() => this.loadSrc = this.src, 200);
        }
    }
    removeIO() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    render() {
        return (h("img", { src: this.loadSrc, alt: this.alt, decoding: "async" }));
    }
    static get is() { return "ion-img"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "alt": {
            "type": String,
            "attr": "alt"
        },
        "el": {
            "elementRef": true
        },
        "loadSrc": {
            "state": true
        },
        "src": {
            "type": String,
            "attr": "src",
            "watchCallbacks": ["srcChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionImgDidLoad",
            "method": "ionImgDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ion-img:**/"; }
}
