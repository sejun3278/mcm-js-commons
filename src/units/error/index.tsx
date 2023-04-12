import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

import _Title from "../title";

// 필수 props가 전달되지 않은 모듈의 에러메세지를 반환하는 페이지
export default function _Error<T>({
  propsList,
  requiredList,
  children,
  mouduleName,
}: {
  propsList: { [key: string]: T }; // 해당 모듈의 전체 props
  requiredList: Array<string>; // 해당 모듈의 필수 데이터들
  children: JSX.Element; // 필수 props가 존재할 경우 렌더될 컴포넌트
  mouduleName?: string; // 모듈의 이름
}) {
  // 필수 데이터가 모두 있는지를 확인
  const isAble =
    requiredList?.every((el) => propsList[el] !== undefined) || false;

  return isAble ? (
    children
  ) : (
    <ErrorWrapper className="mcm-error-unit">
      <_Title titleLevel="h3">
        🙅 {mouduleName ? mouduleName + " 모듈을" : "모듈을"} 실행하기 위해서는
        아래의 props가 필요합니다.
      </_Title>
      <RequiredList>
        {requiredList
          ?.filter((el) => propsList[el] === undefined)
          ?.map((el) => (
            <li key={uuidv4()}>{el}</li>
          ))}
      </RequiredList>
    </ErrorWrapper>
  );
}

export const ErrorWrapper = styled.article`
  padding: 1.5rem !important;
  border: double 2px black;
  border-radius: 10px;
  display: inline-block;
  margin: 1rem;

  .mcm-title-unit {
    display: inline-block;
    margin: 0 !important;
  }
`;

export const RequiredList = styled.ul`
  margin-top: 20px !important;
  margin-bottom: 0px !important;
  display: flex;
  flex-direction: column;
  gap: 10px 0px;

  li {
    color: #d14d72;
  }
`;
