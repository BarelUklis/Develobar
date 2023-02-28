import { Modal } from "antd"
import { observer } from "mobx-react-lite"
import ContactForm from "./contact-form"
import rootStore from "@/store";
import formDictionary from '@/lang/contact-page.json'
import { Form } from 'antd';
import ContactDetails from "./contact-details";
import styles from '@/styles/contact.module.scss'

const ContactModal = observer(() => {

  const { uiStore, formStore } = rootStore;

  const form = Form.useForm()[0];


  const handleOk = () => {
    const formVlaues = form.getFieldsValue();
    const isValid = formStore.handleSubmit(formVlaues);
    isValid && form.resetFields();
  }

  const handleCancel = () => {
    formStore.handleCancel();
    form.resetFields();
  }

  return (
    <Modal
      title={formDictionary['form-header'][uiStore.pageLanguage]}
      open={formStore.contactModalOpen}
      onOk={() => handleOk()}
      onCancel={() => handleCancel()}
      okText={formDictionary['submit'][uiStore.pageLanguage]}
      cancelText={formDictionary['cancel'][uiStore.pageLanguage]}
      okButtonProps={{ form: 'contact', htmlType: 'submit', className: styles.formButton }}
      cancelButtonProps={{ form: 'contact', htmlType: 'reset', className: styles.formButton }}
      className={styles.modal}
      >
      <ContactDetails />
      <br />
      <ContactForm form={form} />
    </Modal>
  );
});

export async function getStaticProps() {

  return {
    props: {
      namespacesRequired: ['common', 'contact-page'],      
    },
  }
}

export default ContactModal