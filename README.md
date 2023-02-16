## **💻 올데이풋볼**

진행 기간 : 2021 / 09 / 19 ~ 2022 / 01 / 05

팀 구성 : 프론트엔드 1명 , 백엔드 1명

## **📄 서비스 소개**

올데이풋볼 언론사 사이트로 축구와 관련된 소식을 업로드 하는 사이트입니다.

사용자는 구독 기능을 통해 매일 정오에 풋볼레터를 메일로 받아볼 수 있습니다.

사이트 주소 : [http://alldayfootball.co.kr/](http://alldayfootball.co.kr/)

## 👨🏻‍💻 역할

프론트엔드, 백엔드 [ 로그인 방식 변경, 게시글 저장 방식 변경 ]

## 🛠 기술 스택

- Front-End
    - Vue.js
    - Vuetify
- Back-End
    - Node.js
    - Express
- Database
    - MongoDB

## **📌 주요 기능**

- 데스크탑, 태블릿, 모바일 반응형 웹사이트
- 구독 서비스
- 어드민 페이지
    - 로그인, 로그아웃
    - 게시글 CRUD 시스템
    - 푸터 정보 수정 기능

### 1. **반응형**

**데스크탑**

![1](https://user-images.githubusercontent.com/79083202/219438207-04278e90-a6ad-4afd-aca8-4a59de282ba1.gif)

**태블릿**

![2](https://user-images.githubusercontent.com/79083202/219438217-818007c7-7bbb-42c5-bb1e-4c3c0289fcab.gif)

**모바일**

![3](https://user-images.githubusercontent.com/79083202/219438223-306b1230-b4d9-48c2-9b40-60e3a032bd85.gif)

### 2. **구독**

![4](https://user-images.githubusercontent.com/79083202/219438227-cfc819e8-dae1-45ae-ba02-c94effceb02f.gif)

### 3. **어드민 페이지**

![5](https://user-images.githubusercontent.com/79083202/219438234-332f64a4-6f06-4c2d-a23f-6d63daaba23d.gif)

## **⚠️ 개발 이슈**

- 성능
    
    처음 게시글 불러오기 기능을 구현할 당시 게시글이 매우 적었기 때문에 게시글 작성시 하나의 Document에 게시글의 내용까지 저장하도록 구현하였습니다.
    
    하지만 게시글의 수와 내용이 많아지면서 GET 요청의 응답을 받기까지의 많은 시간이 소요되는 것을 확인하였고,
    
    성능을 개선하고자 게시글 작성시 하나의 Document에 저장하는 것이 아닌 게시글의 전반적인 데이터 [ 타이틀, 작성자, 미리보기 텍스트, 썸네일 등 ] 와 게시글의 내용을 따로 저장하는 방식으로 구현하여 성능을 개선할 수 있었습니다.
    
    ❗️ 테스트는 fast 3G 속도에서 테스트 하였으며 1.2배속으로 편집하였습니다.
    
    ### **개선 전**
    
    ![6](https://user-images.githubusercontent.com/79083202/219438235-f3c682bf-136b-4663-9529-3d4f955b195b.gif)

    ### **개선 후**
    
    ![7](https://user-images.githubusercontent.com/79083202/219438240-4a8ba991-413c-43a8-bd0d-70e74843458a.gif)
