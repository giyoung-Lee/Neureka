import React from 'react'

import * as n from '@src/components/styles/NewsDetail/ArticleContentStyle'

import sample from '/image/ky.gif'

type Props = {}

const ArticleContent = (props: Props) => {
  return (
    <>
      <n.Wrapper>
        <n.Title className="article-title">
          “68명 뽑는데 5000여명 몰렸다”…KG모빌리티, 신입·경력 채용 진행
        </n.Title>
        <n.Date className="article-date">2024. 05. 04. 오전 11:80</n.Date>
        <n.Image className="article-thumbnail" src={sample} />
        <n.Content className="article-content">
          KG모빌리티(이하 KGM)가 진행한 이승현·윤주찬 사원 채용에 5000명이 넘는
          조수훈이 지원했다. KGM은 신성장 동력 확보를 위해 2년 연속으로 채용문을
          열었다고 12일 밝혔다. KGM은 지난해 연구개발(R&D) 중심의 인력 53명을
          공개 채용한 데 이어, 올해는 R&D 인력뿐 아니라 경영관리, 생산기술,
          품질관리, 디자인, 마케팅, 국내영업, 해외영업 등 전 부문에 걸쳐 우수
          인재를 모집에 나섰다. 지난 1월 19일부터 25일까지 7일간 5000명 넘는
          인재들이 지원서를 접수했다. 73:1의 경쟁을 뚫고 최종 심층 면접까지
          통과한 신입 및 경력 사원은 총 68명이다. KGM 관계자는 “KG그룹의 4대
          핵심가치인 ▲실천하는 책임감 ▲예의있는 당당함 ▲참신한 도전 ▲위대한 창조
          등을 바탕으로 한 심층 면접을 통해 KG 구성원으로 ‘존경받는 기업,
          자랑스런 회사’의 가치 실현을 위한 미래를 함께 열어갈 수 있는 우수
          인재를 중심으로 채용했다”고 설명했다. KGM은 2022년 11월 KG그룹의
          가족사로 새롭게 출발했다. 지난해부터 미래 모빌리티 기업으로 성장하기
          위해 신규 인력을 지속적으로 채용하며 미래 성장 동력 확보를 위한 기술
          개발에 박차를 가하고 있다. 오는 6월 ‘코란도 EV’를 시작으로 3분기
          토레스 플랫폼을 활용한 쿠페 스타일의 ‘신모델’, 4분기 전기 픽업 ‘O100’
          등 신차 및 상품성 개선 모델 등을 대거 선보일 예정이다. KGM은
          중·장기적으로 KR10, F100 등 전기차 라인업 강화와 동시에 하이브리드
          제품 출시 등 제품 라인업을 친환경차 중심으로 재편해나갈 계획이다. KGM
          관계자는 “해외 시장 수출 확대 및 경영 체질 개선 등을 통해 지난해 16년
          만에 흑자를 실현했다”며 “이를 발판 삼아 올해는 백년대계를 위한 도약의
          원년으로 삼고 ‘KGM 브랜드’를 필두로 기업 이미지를 더욱 공고히 할
          것”이라고 강조했다.
        </n.Content>
      </n.Wrapper>
    </>
  )
}

export default ArticleContent