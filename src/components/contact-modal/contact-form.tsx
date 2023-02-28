import styles from '@/styles/contact.module.scss'
import { Badge, Form, FormInstance, Input } from 'antd';
import rootStore from '@/store';
import { observer } from 'mobx-react-lite';
import { getAppDirection } from '@/utils/appDirection';
import formDictionary from '@/lang/contact-page.json'
import { useEffect, useState } from 'react';

const ContactForm = observer(({ form }: { form: FormInstance }) => {

  const { uiStore, formStore } = rootStore;

  const [messageLength, setMessageLength] = useState(0);

  const appDirection = getAppDirection();

  useEffect(() => {
    !formStore.contactModalOpen && setMessageLength(0);
  }, [formStore.contactModalOpen])

  return (
    <Form
      form={form}
      name="contact"
      layout="vertical"
      initialValues={{ remember: true }}
      dir={appDirection}
      className={styles.form}
    >
      <Form.Item
        className={styles.formItem}
        label={formDictionary['name'][uiStore.pageLanguage]}
        name="name"
        rules={[{ required: true, message: formDictionary["required-err"][uiStore.pageLanguage] }]}
      >
        <Input className={styles.formInput} />
      </Form.Item>

      <Form.Item
        className={styles.formItem}
        label={formDictionary['email'][uiStore.pageLanguage]}
        name="email"
        rules={[{ required: true, message: formDictionary["required-err"][uiStore.pageLanguage] }]}
      >
        <Input className={styles.formInput} />
      </Form.Item>

      <Form.Item className={styles.formItem}
        label={formDictionary['phone'][uiStore.pageLanguage]}
        name="phone"
        rules={[{ required: true, message: formDictionary["required-err"][uiStore.pageLanguage] }]}
      >
        <Input className={styles.formInput} />
      </Form.Item>

      <Form.Item className={styles.formItem}
        label={formDictionary['message'][uiStore.pageLanguage]}
        extra={
          <Badge className={styles.badge} count={messageLength + '/120' || 0 + '/120'} showZero />
        }
        name="message"
        rules={[{ required: false, max: 120 }]}
        style={{ marginBottom: '0' }}
      >
        <Input.TextArea className={styles.formInput} onChange={() => setMessageLength(form.getFieldValue('message')?.length || 0)} maxLength={120} />
      </Form.Item>
    </Form>
  );
});

export default ContactForm;