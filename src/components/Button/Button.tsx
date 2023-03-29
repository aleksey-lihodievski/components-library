import classnames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';
import { FiLoader } from 'react-icons/fi';

import { ThemeContext } from '@theme/contexts';

import {
  buttonBase,
  buttonColor,
  buttonDisabled,
  buttonSize,
  spaceKeeper,
  spinner,
  spinnerWrapper,
} from './Button.css';

const transitions = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

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

  const { buttonProps } = useButton({ ...delegated, isDisabled: isDisabled || isLoading }, buttonRef);

  const className = classnames(buttonProps.className, buttonBase, buttonColor[color], buttonSize[size], {
    [buttonDisabled]: isLoading || isDisabled,
  });

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
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
                {children.concat(' ', theme)}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default Button;
