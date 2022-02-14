import { useContext } from 'react';
import { FormCacheContext } from '../context/FormCacheContext';

export default function useFormCache() {
  const context = useContext(FormCacheContext);
  if (!context) {
    throw new Error('useFormCache must be used within a FormCacheProvider');
  }
  const formCacheState = context.state;
  const formCacheDispatch = context.dispatch;

  return [formCacheState, formCacheDispatch] as const;
};
