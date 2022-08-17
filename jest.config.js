module.exports = {
    clearMocks: true,
    preset: 'ts-jest',
    projects: ['<rootDir>/frontend/jest.config.cjs'],
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).(j|t)s?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}
