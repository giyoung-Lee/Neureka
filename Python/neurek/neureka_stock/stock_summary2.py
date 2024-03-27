# -*- coding: utf-8 -*-

import torch
from transformers import PreTrainedTokenizerFast
from transformers import BartForConditionalGeneration

tokenizer = PreTrainedTokenizerFast.from_pretrained('gogamza/kobart-summarization')
model = BartForConditionalGeneration.from_pretrained('gogamza/kobart-summarization')


# text = """
# 삼성전자가 프리미엄 공기청정기 '비스포크 큐브 에어 인피니트 라인'에 신규 필터를 적용한 모델을 25일 출시한다고 밝혔다.
# 이 필터는 공기 청정·탈취에 특화된 워셔블 살균 집진 필터와 광분해 탈취 필터로 구성되며, 주기적으로 필터를 교체할 필요 없이 사용할 수 있다.
# 워셔블 살균 집진 필터는 한국오존자외선협회의 'PA(퓨어에어) 인증'을 획득하며 부유 세균 및 바이러스 제거 효과를 객관적으로 인정받았다. 집진부는 물 세척이 가능해 필터를 평균 2개월에 한번씩 물로 세척해 재사용 할 수 있다.
# 이와 함께 '4way 서라운드 청정' 기술을 적용해 4면 360도 방향으로 오염된 공기를 흡입하고 깨끗해진 공기를 공간 전체에 내보낸다.
# 또 '맞춤 청정 AI+' 기능으로 실내외 공기질을 비교∙학습해 공기질이 나빠질 것으로 예측되면 미리 실내 공기를 정화해준다.
# 이밖에도 빅스비를 통해 실내 미세먼지와 이산화탄소 농도 등을 음성으로 안내받거나 음성 명령으로 제어할 수 있다.
# 이무형 삼성전자 DA사업부 부사장은 "이번 제품은 필터 기술을 탑재해 폐기물을 줄여주는 제품"이라며 "앞으로도 차세대 기술을 지속적으로 연구해 환경 부담을 줄이는 제품을 확대할 것"이라고 말했다.
# """

text = """
1일 오후 9시까지 최소 20만3220명이 코로나19에 신규 확진됐다. 또다시 동시간대 최다 기록으로, 사상 처음 20만명대에 진입했다.
방역 당국과 서울시 등 각 지방자치단체에 따르면 이날 0시부터 오후 9시까지 전국 신규 확진자는 총 20만3220명으로 집계됐다.
국내 신규 확진자 수가 20만명대를 넘어선 것은 이번이 처음이다.
동시간대 최다 기록은 지난 23일 오후 9시 기준 16만1389명이었는데, 이를 무려 4만1831명이나 웃돌았다. 전날 같은 시간 기록한 13만3481명보다도 6만9739명 많다.
확진자 폭증은 3시간 전인 오후 6시 집계에서도 예견됐다.
오후 6시까지 최소 17만8603명이 신규 확진돼 동시간대 최다 기록(24일 13만8419명)을 갈아치운 데 이어 이미 직전 0시 기준 역대 최다 기록도 넘어섰다. 역대 최다 기록은 지난 23일 0시 기준 17만1451명이었다.
17개 지자체별로 보면 서울 4만6938명, 경기 6만7322명, 인천 1만985명 등 수도권이 12만5245명으로 전체의 61.6%를 차지했다. 서울과 경기는 모두 동시간대 기준 최다로, 처음으로 각각 4만명과 6만명을 넘어섰다.
비수도권에서는 7만7975명(38.3%)이 발생했다. 제주를 제외한 나머지 지역에서 모두 동시간대 최다를 새로 썼다.
부산 1만890명, 경남 9909명, 대구 6900명, 경북 6977명, 충남 5900명, 대전 5292명, 전북 5150명, 울산 5141명, 광주 5130명, 전남 4996명, 강원 4932명, 충북 3845명, 제주 1513명, 세종 1400명이다.
집계를 마감하는 자정까지 시간이 남아있는 만큼 2일 0시 기준으로 발표될 신규 확진자 수는 이보다 더 늘어날 수 있다. 이에 따라 최종 집계되는 확진자 수는 21만명 안팎을 기록할 수 있을 전망이다.
한편 전날 하루 선별진료소에서 이뤄진 검사는 70만8763건으로 검사 양성률은 40.5%다. 양성률이 40%를 넘은 것은 이번이 처음이다. 확산세가 계속 거세질 수 있다는 얘기다.
이날 0시 기준 신규 확진자는 13만8993명이었다. 이틀 연속 13만명대를 이어갔다.
"""

# 토크나이저를 사용하여 뉴스기사 원문을 모델이 인식할 수 있는 토큰형태로 바꿔줍니다.
input_ids = tokenizer.encode(text)
# print(input_ids)

# 모델에 넣기 전 문장의 시작과 끝을 나타내는 토큰을 추가합니다.
input_ids = [tokenizer.bos_token_id] + input_ids + [tokenizer.eos_token_id]
input_ids = torch.tensor([input_ids])
# print(input_ids)

summary_text_ids = model.generate(
    input_ids = input_ids,
    bos_token_id = model.config.bos_token_id,
    eos_token_id = model.config.eos_token_id,
    length_penalty = 1.0,   # 길이에 대한 penalty. 1보다 작은 경우 더 짧은 문장을 생성하도록 유도하며, 1보다 클 경우 길이가 더 긴 문장을 유도
    max_length = 128,   # 요약문의 최대 길이 설정
    min_length = 32,    # 요약문의 최소 길이 설정
    num_beams = 4,  # 문장 생성시 다음 단어를 탐색하는 영역의 개수
)

# print(summary_text_ids)
print(tokenizer.decode(summary_text_ids[0], skip_special_tokens=True))
