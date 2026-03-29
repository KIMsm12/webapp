
# 엘리멘트(Element) 구조와 React 심화

> 4주차 웹 프로그래밍 응용 — Element 구조, Virtual DOM, 컴포넌트, Git 관리 핵심 개념 정리

---

## 🧱 엘리멘트(Element) & DOM 구조

### 엘리멘트란?
- JavaScript 함수로 만들어지며, DOM 트리의 각 노드는 HTML 태그와 **1:1 매칭**
- 태그는 브라우저에 의해 `DOM` 자료형으로 변환됨
- 태그 안에 태그가 중첩 가능 → 노드 아래 자식 노드를 가질 수 있는 계층 구조

### 렌더 트리(Render Tree)
렌더링에는 **HTML 태그 + CSS + JavaScript** 세 가지가 필요하며, 이를 결합한 렌더 트리를 기반으로 브라우저 화면에 출력된다.

### 블록 vs 인라인 요소

| 구분 | 표현 방식 | 예시 태그 |
|------|-----------|-----------|
| **Block** | 하나의 콘텐츠가 전체 라인을 차지 | `<div>`, `<p>`, `<h1>` |
| **Inline** | 여러 콘텐츠가 한 라인 안에 나란히 배치 | `<span>`, `<a>`, `<strong>` |

---

## ⚛️ React 핵심 개념

### Virtual DOM & Reconciliation

```
이벤트 발생 (클릭 등)
    ↓
새로운 가상 DOM 생성
    ↓
기존 가상 DOM과 비교 (Diffing)
    ↓
변경된 부분만 실제 DOM에 반영
```

- 엘리멘트 생성 후에는 **속성 변경 불가** (불변성)
- 전체 페이지가 아닌 변경된 부분만 업데이트 → 빠른 화면 전환

### React 엘리멘트 vs 일반 DOM 요소

| 구분 | 위치 | 생성 방식 |
|------|------|-----------|
| **DOM 요소** | 실제 브라우저 DOM | `document.createElement()` |
| **React 엘리멘트** | 가상 DOM(메모리) | React 엘리멘트 생성 함수 / JSX |

### 컴포넌트(Component)
화면에 표현되는 **독립적인 UI 조각**. 함수형 컴포넌트(Function Component)가 핵심이다.

- 복잡한 로직을 단순화하고 코드를 간결하게 유지
- **모듈화** — 특정 부분 수정 시 해당 컴포넌트만 제어하면 됨
- 컴포넌트는 리액트 엘리멘트 생성 함수로 구성됨

### 렌더링 시작점 (Root)

```html
<!-- public/index.html -->
<div id="root"></div>
```

```js
// src/index.js
ReactDOM.render(<App />, document.getElementById('root'));
```

웹 애플리케이션의 모든 렌더링은 `id="root"` div에서 시작된다.

---

## 🛠️ 개발 환경 & 프로젝트 설정

### React 프로젝트 생성 및 특징

```bash
npx create-react-app my-app
```

- **Hot Reloading**: 코드 변경 시 화면에 즉시 반영
- `public/index.html` — 단일 HTML 템플릿
- `src/index.js` — 앱 진입점
- `src/App.js` — 메인 UI 컴포넌트 (주요 작업 공간)

### JavaScript 심화 포인트
- 함수와 **객체(Object)** 개념이 React 이해의 핵심
- 메모리상에서 객체와 함수가 어떻게 할당·참조되는지 이해 필요
- 부분 렌더링(변경된 부분만 업데이트)을 처리하는 방식 숙지

---

## 🌿 Git & 버전 관리

### SourceTree (소스트리)
Git을 시각적으로 관리할 수 있는 GUI 툴.

| 기능 | 설명 |
|------|------|
| **Revert / Reset** | 코드 오류 시 과거 상태로 롤백 |
| **Branch** | 독립적인 작업 공간 생성 |
| **Merge** | 작업 완료 후 메인 브랜치에 병합 |
| **Stage & Commit** | 변경 파일을 스테이지에 올리고 메모와 함께 커밋 |

### GitHub 연동 및 협업
- 버전 관리, 원격 저장소, 협업, GitHub Pages 배포 기능 제공
- 로컬 폴더와 서버를 연동해 테스트 환경에 쉽게 배포 가능

### 커밋 메시지 규약
> 작업 내용을 명확히 전달하도록 규약을 지키는 것이 중요하다.
> - 대문자로 시작
> - `Add`, `Fix`, `Update`, `Remove` 등 직관적인 동사 키워드 사용
> - 예: `Add navigation component`, `Fix login button style`
