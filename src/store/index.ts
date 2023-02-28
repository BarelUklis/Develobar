import FormStore from "./form-store";
import UIStore from "./ui-store";

export interface IRootStore {
    uiStore: UIStore;
    formStore: FormStore;
}

class RootStore {
    uiStore: UIStore;
    formStore: FormStore;

    constructor() {
        this.uiStore = new UIStore(this);
        this.formStore = new FormStore(this);
    }
}

const rootStore: IRootStore = new RootStore();
export default rootStore;