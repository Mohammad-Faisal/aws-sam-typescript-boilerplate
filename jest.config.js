module.exports = {
    roots: ['src'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    }
};
