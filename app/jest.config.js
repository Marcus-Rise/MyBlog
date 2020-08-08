module.exports = {
    testEnvironment: "jsdom",
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ["<rootDir>/src"],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },

    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        // "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
    },

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec|e2e-spec))\\.tsx?$",

    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

    collectCoverage: false,
    collectCoverageFrom: [
        "<rootDir>/src/**/*.{ts,tsx}",
        "!<rootDir>/src/client/serviceWorker.ts",
        "!<rootDir>/src/server/main.ts",
    ],
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
};
