import React from 'react';
import Happy from './icons/HappyIcon';
import Sad from './icons/SadIcon';

const defaultSize = '20px';
const defaultColor = 'blue';

const Icon = ({ iconName, size, color }) => {
  const styles = {
    height: size || defaultSize,
    width: size || defaultSize,
    fill: color || defaultColor,
  }

  const iconList = {
    happy: <Happy styles={styles} />,
    sad: <Sad styles={styles} />,
  };

  if (!iconList[iconName]) return null;

  return iconList[iconName];
}

export default Icon;
