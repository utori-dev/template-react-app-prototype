import { useCallback, useEffect, useState } from 'react';
import { Selector } from '@reduxjs/toolkit';
import { isEqual as isDeepEqual } from 'lodash';
import { AppState, DialogKey, EqualityChecker } from './types';
import store from './_store';
import dialog from './dialog.slice';

function useSelector<T>(
  selector: Selector<AppState, T>,
  isEqual: EqualityChecker<T> = isDeepEqual
): T {
  const [value, setValue] = useState<T>(selector(store.getState()));

  const subscriber = useCallback(
    () =>
      setValue((prev) => {
        const next = selector(store.getState());
        if (isEqual(prev, next)) return prev;
        return next;
      }),
    [setValue, selector, isEqual]
  );

  useEffect(() => store.subscribe(subscriber), [subscriber]);

  return value;
}

const selectThemeMode = (state: AppState) => state.persistedReducers.theme.mode;

/**
 * Returns the color scheme for the current theme.
 *
 * @returns 'light' or 'dark'
 */
export const useThemeMode = () => useSelector(selectThemeMode);

/**
 * Returns the custom data for the dialog.
 * If the dialog is closed, the result will be null.
 *
 * @param key
 * @returns dialog data or null
 */
export function useDialogData(key: string) {
  const selector = useCallback(
    (state: AppState) => dialog.selectors.getData(state, key as DialogKey),
    [key]
  );
  return useSelector(selector, isDeepEqual);
}

/**
 * Determines whether or not the given dialog is open.
 *
 * @param key
 * @returns {boolean}
 */
export function useDialogIsOpen(key?: string) {
  const selector = useCallback(
    (state: AppState) =>
      dialog.selectors.isOpen(state, key as DialogKey | undefined),
    [key]
  );
  return useSelector(selector, isDeepEqual);
}
