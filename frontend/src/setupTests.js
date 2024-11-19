import '@testing-library/jest-dom'; // For DOM assertions

// Mock static assets like images using vi.mock() for Vitest
vi.mock('/header_img.png', () => 'mock-image.png');
