const colors = {
  ivory: "#f4f3ee",
  lightgray: "#bcb8b1",
  pink: "#e0afa0",
  brown: "#8a817c",
  dark: "#463f3a",
};

//자주 사용하는 display - flex
const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

//객체로 반환
const theme = {
  colors,
  common,
};

export default theme;

//https://velog.io/@tngusro/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
