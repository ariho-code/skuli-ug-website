import { createContext, useContext } from 'react';

export interface PortalPickerApi {
  open: () => void;
  close: () => void;
}

export const PortalPickerContext = createContext<PortalPickerApi | null>(null);

/** Opens the "which school are you signing in to?" chooser from anywhere. */
export function usePortalPicker(): PortalPickerApi {
  const ctx = useContext(PortalPickerContext);
  if (!ctx) throw new Error('usePortalPicker must be used inside <PortalPickerProvider>');
  return ctx;
}
