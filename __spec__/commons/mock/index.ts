// 공통으로 처리되는 mocking 함수들 모음
export const jestCommonsMock = () => {
  // useRouter 함수 처리
  jest.mock("next/router", () => require("next-router-mock"));
};

// useRef 함수 처리
export const jestMockUseRef = () => {
  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useRef: jest.fn(),
  }));
};
