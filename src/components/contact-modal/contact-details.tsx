'use client'
import formDictionary from '@/lang/contact-page.json'
import rootStore from '@/store';
import styles from '@/styles/contact.module.scss'
import { MailOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Tooltip, Typography } from 'antd';

const ContactDetails = () => {

  const { uiStore } = rootStore;

  const sendEmail = () => {
    window.open('mailto:barel.uklis@gmail.com');
  }

  const call = () => {
    window.open('tel:054-6407374');
  }

  const openWhatsapp = () => {
    window.open('https://wa.me/972546407374');
  }

  return (
    <div className={styles.contactDetails}>
      <div className={styles.contactSection}>
      <Typography className={styles.contactItem}>{formDictionary.phone[uiStore.pageLanguage]}: 054-6407374</Typography>
      <Tooltip title={formDictionary['call-tooltip'][uiStore.pageLanguage]}>
        <PhoneOutlined className={styles.contactAction} onClick={() => call()} />
      </Tooltip>
      <Tooltip title={formDictionary['whatsapp-tooltip'][uiStore.pageLanguage]}>
        <WhatsAppOutlined className={styles.contactAction} onClick={() => openWhatsapp()} />
      </Tooltip>
      </div>
      <div className={styles.contactSection}>
      <Typography className={styles.contactItem}>{formDictionary.email[uiStore.pageLanguage]}: barel.uklis@gmail.com</Typography>
      <Tooltip title={formDictionary['email-tooltip'][uiStore.pageLanguage]}>
        <MailOutlined className={styles.contactAction} onClick={() => sendEmail()} />
      </Tooltip>
      </div>
    </div>
  );
};

export default ContactDetails;