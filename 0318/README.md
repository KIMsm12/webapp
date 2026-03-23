# React 기반 웹 개발 및 렌더링 프로세스

> 3주차 웹 프로그래밍 응용 — React 프로젝트 생성부터 GitHub 호스팅까지 핵심 개념 정리

---

## 🌳 DOM & 브라우저 렌더링

### DOM (Document Object Model)
HTML 문서를 **트리 형태의 객체**로 표현한 모델. JavaScript로 노드/엘리먼트에 접근해 스타일·텍스트 등을 동적으로 제어한다.

### 렌더링 파이프라인 (Critical Rendering Path)
HTML이 브라우저 화면에 시각적으로 그려지기까지의 전체 과정.

| 단계 | 설명 |
|------|------|
| **Parsing** | HTML → DOM 트리, CSS → CSSOM 트리 생성 |
| **Render Tree** | DOM + CSSOM 결합 |
| **Layout** | 각 노드의 위치·크기 계산 (반응형 웹의 핵심) |
| **Paint** | 계산된 요소를 실제 픽셀로 변환 |
| **Composite** | 여러 레이어를 합성해 최종 화면 출력 |

> **최적화 팁**
> - DOM 변경 시 **Reflow**(레이아웃 재계산)와 **Repaint**(재드로잉)를 최소화해야 성능이 향상된다.
> - 렌더링 차단 방지를 위해 `<script>` 태그는 `<body>` 최하단에 배치하는 것을 권장한다.

---

## ⚛️ React & Virtual DOM

### React 핵심 특징
Facebook(Meta)이 개발한 UI 구축용 JavaScript 라이브러리.

| 특징 | 설명 |
|------|------|
| **컴포넌트 기반** | 블록 조립하듯 개발 → 재사용성·유지보수성 향상 |
| **SPA** | 단일 페이지 안에서 필요한 부분만 업데이트 → 쾌적한 UX |

### Virtual DOM 동작 원리

```
상태(State) 변경
    ↓
새로운 가상 DOM 생성
    ↓
이전 가상 DOM과 비교 (Diffing)
    ↓
변경된 부분만 실제 DOM에 일괄 반영
```

전체 화면을 다시 그리지 않고 **변경된 부분만** 적용하므로 렌더링 속도가 빠르다.

### JSX (JavaScript XML)
JavaScript 코드 안에 HTML 문법을 직관적으로 작성할 수 있는 확장 문법.
브라우저가 읽기 전 **Babel**이 `React.createElement()` 형태의 순수 JS로 변환한다.

```jsx
// ✅ 단일 부모 요소로 감싸기
return (
  <>
    <h1>제목</h1>
    <p>내용</p>
  </>
);

// ✅ 표현식·변수는 {} 안에 작성
const name = "React";
return <h1>Hello, {name}!</h1>;
```

---

## 🛠️ 개발 생태계 & 인프라

### 서버 vs 클라이언트

| 구분 | 역할 | 기술 예시 |
|------|------|-----------|
| **클라이언트** | 브라우저에서 요청(Request)을 보내는 주체 | HTML, CSS, JS |
| **서버** | 요청을 받아 데이터·페이지를 응답(Response)하는 주체 | Node.js, Tomcat, Apache |

> **포트(Port)**: 하나의 컴퓨터 내에서 여러 서버를 구분하는 식별 번호 (예: `localhost:3000`)

### 빌드 & 패키지 관리

| 도구 | 역할 | 주요 명령어 |
|------|------|-------------|
| **npm** | 패키지 설치 및 관리 | `npm start`, `npm run build` |
| **npx** | 패키지를 일회성으로 임시 실행 | `npx create-react-app` |
| **Webpack** | 여러 파일을 하나로 번들링해 배포 최적화 | — |

### 언어 & 스타일 확장

| 기술 | 설명 |
|------|------|
| **TypeScript** (`.ts` / `.tsx`) | JS에 정적 타입을 강제해 에러를 사전에 방지하는 컴파일러형 언어 |
| **SCSS / SASS** | CSS에 변수·중첩·연산 등 프로그래밍 기법을 추가한 스타일 시트 |
| **호스팅(Hosting)** | AWS, GitHub Pages 등 클라우드 인프라를 빌려 서비스를 배포하는 방식 |

---

## 📁 React 프로젝트 구조

`npx create-react-app [프로젝트명]` 실행 시 생성되는 핵심 구조.

```
my-app/
├── node_modules/       # npm으로 설치된 외부 패키지 모음
├── public/
│   └── index.html      # 뼈대가 되는 단일 HTML 템플릿
├── src/
│   ├── index.js        # 진입점 — App 컴포넌트를 HTML에 연결
│   └── App.js          # 메인 UI 컴포넌트 (주요 작업 공간)
└── .gitignore          # node_modules 등 Git 업로드 제외 설정
```

### 주요 실습 명령어

```bash
npm run build    # 프로덕션용 빌드 파일 생성
npm run deploy   # GitHub Pages에 정적 파일 호스팅
```
