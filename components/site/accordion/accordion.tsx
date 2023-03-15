import styles from './accordion.module.scss';

interface AccordionProps {
  content: any[];
  index: number;
}

const Accordion = ({ content, index }: AccordionProps) => {
  return (
    <div>
      <div className={styles.tabs}>
        {content.map((faq, i) => (
          <div
            key={index * (i + 1)}
            className={styles.tab}>
            <input
              type="checkbox"
              id={(index * (i + 1)).toString()}
            />
            <label
              className={styles.label}
              htmlFor={(index * (i + 1)).toString()}>
              {faq.question}
            </label>
            <div className={styles.content}>{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
