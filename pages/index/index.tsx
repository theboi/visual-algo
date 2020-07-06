import { readFile } from "fs/promises";
import React, { useEffect } from 'react';

import style from './style.module.css';

export default () => {
  return (
    <>
      <div className={style.main}></div>
    </>
  )
}