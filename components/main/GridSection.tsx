import React from 'react';
import { GridLayout } from './GridLayout';
import styles from './services/Service.module.css';

function GridSection() {
  return (
    <section id='services'>
      <div style={{ padding: '0px 40px 80px 30px' }}>
        <div
          className='my-14 px-16 text-center'
        >
          <h1 className={styles.title}>Services</h1>
        </div>
        <GridLayout />
      </div>
    </section>
  );
}

export default GridSection;