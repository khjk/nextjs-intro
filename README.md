## Nextjs 찍먹하기
1. 파일이름이 URL이 된다.
2. export default 하면 그게 리턴이고
3. 컴포넌트 이름은 동작에 중요하지 않다.
4. per-rendering을 함 (hydration) => SEO에서도 좋다!
5. css도 모듈형식으로 import 하고 그려질 때 랜덤한 class명으로 되므로 충돌x(중복고민없이 재사용할 수 있음~)
6. _app.js파일은 모든 페이지 렌더링 전에 호출됨 