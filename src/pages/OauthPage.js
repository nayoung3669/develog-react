import React from "react";

const OauthPage = () => {
  //인가 코드 추출
  const params = new URL(window.location.href).searchParams.get("code");
  console.log(params);
  return <div>OauthPage</div>;
};

export default OauthPage;
