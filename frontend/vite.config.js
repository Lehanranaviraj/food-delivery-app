import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  test: {
    globals: true,  // Enables global testing functions like `test()` and `expect()`
    environment: 'jsdom',  // Simulates a browser environment for DOM-related tests
    setupFiles: './src/setupTests.js',  // Ensure this is pointing to your test setup file
    transformMode: {
      web: [/\.[jt]sx$/]  // Ensure that JSX and TSX files are properly handled
    }
  }
};
