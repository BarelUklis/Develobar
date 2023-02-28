import { IRootStore } from "./index";
import { makeAutoObservable } from "mobx";
import { message } from "antd";
import formDictionary from '@/lang/contact-page.json'
import styles from '@/styles/contact.module.scss'

interface IFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

class FormStore {
  rootStore: IRootStore;

  contactModalOpen = false;

  styles = styles;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setContactModalOpen = (open: boolean) => this.contactModalOpen = open;

  handleSubmit = (formValues: IFormValues) => {
    if (!formValues.name || !formValues.email || !formValues.phone) {
      return false;
    }
    this.setContactModalOpen(false);
    message.success(formDictionary["form-success"][this.rootStore.uiStore.pageLanguage]);
    return true;
  }

  handleCancel = () => {
    this.setContactModalOpen(false);
  }
}

export default FormStore;