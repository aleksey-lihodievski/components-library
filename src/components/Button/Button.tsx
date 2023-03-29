import classnames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useMemo, useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';
import { FiLoader } from 'react-icons/fi';

import {
  buttonBase,
  buttonColor,
  buttonDisabled,
  buttonSize,
  spaceKeeper,
  spinner,
  spinnerWrapper,
} from './Button.css';

interface ButtonProps extends AriaButtonProps {
  color?: 'default' | 'primary' | 'secondary' | 'danger' | 'warning';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  children: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  color = 'default',
  size = 'medium',
  isLoading = false,
  isDisabled = false,
  children,
  style = {},
  ...delegated
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { buttonProps } = useButton({ ...delegated, isDisabled }, buttonRef);

  const className = classnames(buttonProps.className, buttonBase, buttonColor[color], buttonSize[size], {
    [buttonDisabled]: isLoading || isDisabled,
  });

  const transitions = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
    }),
    [],
  );

  return (
    <button ref={buttonRef} {...buttonProps} className={className} style={style}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <React.Fragment key="loading">
            <motion.span {...transitions} className={spinnerWrapper}>
              <FiLoader className={spinner} />
            </motion.span>
            <span className={spaceKeeper}>{children}</span>
          </React.Fragment>
        ) : (
          <motion.span key="content" {...transitions}>
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default Button;
