import { useEffect } from 'react';

const useLockBodyScroll = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup (모달 닫힐 때 원복)
    };
  }, [isLocked]);
};

export default useLockBodyScroll;
