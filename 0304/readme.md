# 웹 개발 기초 개념 정리

> HTML, CSS, JavaScript, IDE 등 웹 개발의 핵심 개념을 범주별로 정리한 문서입니다.

---

## 📄 웹 문서 기술

### HTML (HyperText Markup Language)
웹 페이지의 **구조**를 정의하는 마크업 언어로, 태그(tag)를 이용해 텍스트·이미지·링크 등의 콘텐츠를 표현한다.

### CSS (Cascading Style Sheets)
HTML이 구조를 담당한다면, CSS는 웹 페이지의 **시각적 표현**을 담당한다.

| CSS의 주요 역할 |
|---------------|
| 글자 색상, 크기, 폰트 설정 |
| 레이아웃 구성 |
| 반응형 디자인 구현 |
| 페이지 전체 스타일 관리 |

### 마크업 언어 vs 메타데이터

| 구분 | 설명 | 예시 |
|------|------|------|
| **마크업 언어** | 문서의 구조와 표현 방식을 정의 | HTML, XML |
| **메타데이터** | 데이터를 설명하는 정보 (key-value 형태) | `<meta name="author" content="홍길동">` |

> 마크업 언어 내부에 메타데이터가 포함될 수 있다.

---

## 🌐 HTML 표준 기관

| 기관 | 역할 |
|------|------|
| **W3C** (World Wide Web Consortium) | 웹 표준 제정 국제 기관, HTML 공식 명세 제공 |
| **WHATWG** | HTML Living Standard 유지 및 최신 표준 관리 |
| **MDN Web Docs** | 태그 설명, 예제, 브라우저 지원 정보 등 개발자 학습 문서 제공 |

---

## 🖥️ 웹 애플리케이션 구조

### MPA vs SPA

|  | **MPA** (Multi Page Application) | **SPA** (Single Page Application) |
|--|----------------------------------|-----------------------------------|
| 구성 | 여러 HTML 페이지 | 단일 HTML 페이지 |
| 데이터 로드 | 페이지 이동마다 서버에서 전체 HTML 수신 | AJAX로 필요한 데이터만 수신 |
| 렌더링 | 이동 시 전체 페이지 재렌더링 | 화면 일부만 업데이트 |
| SEO | 유리 | 불리 (추가 처리 필요) |
| 사용자 경험 | 이동 시 로딩 발생 | 부드러운 전환 |
| JS 의존도 | 낮음 | 높음 |

---

## ⚙️ 실행 환경과 소프트웨어 개념

### 핵심 용어 비교

| 개념 | 설명 | 예시 |
|------|------|------|
| **Platform** | 소프트웨어가 실행되는 기반 환경 | Windows, Linux, macOS |
| **Environment** | 프로그램 실행을 위해 구성된 환경 | 개발 환경, 테스트 환경, 운영 환경 |
| **Runtime** | 프로그램 실행 시 필요한 환경 | Node.js, Java JRE |
| **Framework** | 개발을 위한 구조와 기본 틀 | React, Angular, Vue.js |

### Node.js
JavaScript를 **브라우저 외부**에서 실행할 수 있도록 하는 런타임 환경.

- Google의 **V8 엔진** 기반
- 서버 프로그램, CLI 도구 등 다양한 용도로 활용
- OS가 아니며, 특정 아키텍처를 강제하지 않는 실행 환경

> **Java JRE와의 비교:** JRE가 Java 프로그램의 실행 환경이듯, Node.js는 JavaScript의 실행 환경이다. 둘 모두 OS 위에서 동작하는 런타임이다.

---

## 🛠️ 개발 도구

### IDE와 코드 편집기

**IDE (Integrated Development Environment)** 는 코드 편집부터 디버깅, 빌드, 버전 관리까지 통합된 개발 환경을 제공한다.

| 구분 | 도구 |
|------|------|
| **IDE** | Visual Studio, IntelliJ IDEA, PyCharm, Eclipse, Android Studio, Xcode, NetBeans |
| **코드 편집기** | VS Code, Sublime Text, Notepad++, Atom |

### VS Code
가벼운 코드 편집기이면서도 IDE 수준의 기능을 제공하는 도구.

- 무료 오픈소스 / Windows·macOS·Linux 지원
- 방대한 확장(Extension) 생태계
- 활발한 개발자 커뮤니티

### Emmet
HTML·CSS를 **빠르게 작성**하기 위한 코드 자동 완성 도구.
짧은 축약 문법을 입력하면 자동으로 전체 HTML 구조로 확장된다.
VS Code, Sublime Text, Atom 등 주요 편집기에서 기본 지원한다.
