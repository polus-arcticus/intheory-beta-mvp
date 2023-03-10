import Link from 'next/link';
import Image from 'next/image';

import window from '@/public/icons/window.svg';
import styles from './success-box.module.scss';

interface SuccessBoxProps {
  txnHash: string;
  tokenId: string;
  contractAddress: string;
}

const SuccessBox = ({ txnHash, tokenId, contractAddress }: SuccessBoxProps) => {
  return (
    <div className={styles.success}>
      <p className={styles.main}>
        🧬 You&apos;ve successfully supported this research 🔬
      </p>
      <p className={styles.sub}>
        Your contribution is publicly and perpetually verifiable on the
        blockchain and your unique digital artwork has been sent to your wallet
        address.
      </p>
      <p className={styles.sub}>
        Thank you for supporting science. Enjoy your artwork and be sure to show
        it off to your friends!
      </p>
      <div className={styles.links}>
        <div>
          <Link
            className={styles.tweetLink}
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer">
            Share on Twitter
          </Link>
          <button
            className={styles.orderLink}
            disabled>
            Order a Print<span className={styles.popUp}>coming soon</span>
          </button>
        </div>

        <p className={styles.txnInfo}>
          <span>Txn Hash</span>
          <Link
            className={styles.link}
            href="https://etherscan.io/"
            target="_blank"
            rel="noreferrer">
            {txnHash.slice(0, 4) + '...' + txnHash.slice(-6)}{' '}
            <Image
              className={styles.icon}
              src={window}
              alt=""
              width={20}
              height={20}></Image>
          </Link>
        </p>
        <p className={styles.txnInfo}>
          <span>Token ID</span>
          <Link
            className={styles.link}
            href="https://etherscan.io/"
            target="_blank"
            rel="noreferrer">
            {tokenId}{' '}
            <Image
              className={styles.icon}
              src={window}
              alt=""
              width={20}
              height={20}></Image>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SuccessBox;