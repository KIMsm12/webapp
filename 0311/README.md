# React 기초 및 개발 환경

> 2주차 웹 프로그래밍 응용 — 핵심 개념을 범주별로 재정리한 문서입니다.

---

## 🌐 웹 아키텍처 기초

### HTML & SEO
- HTML은 웹페이지의 뼈대, **메타데이터**는 그 페이지를 설명하는 숨은 정보
- `<head>` 영역의 메타 태그를 잘 활용하면 검색엔진·AI 봇 노출 빈도를 높일 수 있음 (SEO)
- 웹 표준은 **W3C / MDN / WHATWG** 에서 확인

### MPA vs SPA

| 구분 | 동작 방식 | 대표 사례 |
|------|-----------|-----------|
| **MPA** (Multi Page App) | 클릭 시 서버에서 새 HTML 전체를 불러와 화면 전환 | 대학 홈페이지 등 전통적 웹 |
| **SPA** (Single Page App) | 단일 HTML 안에서 변경된 컴포넌트만 동적으로 교체 | React 기반 최신 웹앱 |

---

## ⚙️ 개발 환경

### Node.js & IDE

| 도구 | 설명 |
|------|------|
| **Node.js** | 브라우저 밖에서도 JavaScript를 실행할 수 있는 런타임 환경 |
| **VS Code** | 기본은 코드 편집기이나, 확장 플러그인으로 IDE(디버깅·빌드 등) 역할 수행 |

### 환경 관련 핵심 용어

| 용어 | 설명 | 예시 |
|------|------|------|
| **Platform** | 소프트웨어 실행의 기반 환경 | 운영체제 (Windows, macOS) |
| **Environment** | 실행을 위해 구성된 조건 | 개발 환경, 운영 환경 |
| **Framework** | 개발을 위한 뼈대 및 기반 구조 | .NET, Spring |
| **Runtime** | 프로그램이 실제 실행되는 환경 | JVM, Node.js |

---

## 📦 패키지 매니저 & 빌드 도구

### npm vs npx

| 구분 | 역할 | 예시 |
|------|------|------|
| **npm** | 패키지를 프로젝트에 설치하고 지속 관리 | `npm install axios` |
| **npx** | 설치 없이 최신 버전으로 일회성 실행 | `npx create-react-app my-app` |

### Vite vs Webpack

| 구분 | 특징 |
|------|------|
| **Vite** ✅ 권장 | ES Module 기반, 번들링 속도 빠름, 설정 간단 |
| **Webpack** | 전체 파일 번들링 방식, 초기 구동 느림, 설정 복잡 |

---

## ⚛️ React 핵심 개념

### Virtual DOM
기존 방식이 DOM 전체를 다시 그렸다면, React는 메모리상의 **가상 DOM**에서 변경된 부분만 찾아 실제 화면에 반영 → 렌더링 속도 향상

### 프로젝트 생성

```bash
# Vite 방식 (권장)
npm create vite@latest my-app --template react

# CRA 방식
npx create-react-app my-app
```

### Git 업로드 주의사항
`node_modules` 폴더는 용량이 매우 크므로 `.gitignore`에 반드시 추가해 GitHub 업로드 대상에서 제외해야 한다.

---

## 📝 JSX 문법 핵심

**JSX**란 JavaScript 안에서 HTML과 유사한 마크업을 쓸 수 있게 해주는 확장 문법이다.
브라우저는 JSX를 직접 읽지 못하므로, **Babel**이 `React.createElement()` 형태의 일반 JS로 변환해 준다.

### 규칙 1 — 단일 부모 요소로 감싸기

```jsx
// ❌ 에러
return (
  <h1>제목</h1>
  <p>내용</p>
);

// ✅ 빈 태그(Fragment)로 감싸기
return (
  <>
    <h1>제목</h1>
    <p>내용</p>
  </>
);
```

### 규칙 2 — JavaScript 표현식은 `{}` 사용

```jsx
const name = "React";
return <h1>Hello, {name}!</h1>;
```

### 규칙 3 — 속성명은 camelCase

```jsx
<div className="container">  {/* class ❌ → className ✅ */}
```

### 규칙 4 — 조건부 렌더링

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}   // 삼항 연산자
{isAdmin && <AdminPanel />}                // 논리 연산자
```
