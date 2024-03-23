'use client'
import { AuthForm } from '@/components/AuthForm';
import styles from './style.module.scss'
import { Tabs, Tab } from '@mui/material';
import { useState } from 'react';

export default function Auth() {
  const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setTabIndex(newValue);
    };

    return (
      <main className={styles.main}>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Registrarion" />
          <Tab label="Login" />
        </Tabs>
        <AuthForm buttonText={tabIndex === 1 ? 'Login' : 'Registration'}/>
      </main>
    );
  }
  