import { create } from 'zustand';

export const useMetadataStore = create((set, get) => ({
  metadata: null,
  isLoading: false,
  metadataError: null,
  setMetadata: (metadata) => set({ metadata }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setMetadataError: (error) => set({ error }),
  needsFetch: () => {
    const state = get();

    return !state.metadata && !state.isLoading;
  }
}));

export default useMetadataStore;