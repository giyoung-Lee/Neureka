from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

# 전역 변수로 모델과 토크나이저 불러오기
tokenizer = AutoTokenizer.from_pretrained('snunlp/KR-FinBert-SC')
model = AutoModelForSequenceClassification.from_pretrained('snunlp/KR-FinBert-SC')

def predict_sentiment(inputs):
    # 전역 변수로 선언된 토크나이저와 모델 사용
    global tokenizer, model

    # 토크나이저를 사용하여 입력 텍스트를 모델이 이해할 수 있는 형태로 변환
    inputs = tokenizer(inputs, return_tensors="pt")

    # 모델을 사용하여 예측 수행
    with torch.no_grad():
        outputs = model(**inputs)

    # 확률 계산 (소프트맥스 함수 사용)
    probs = torch.softmax(outputs.logits, dim=-1)

    # 클래스 레이블 가져오기
    labels = model.config.id2label

    # 모든 클래스의 확률 출력
    all_probs = []
    for idx, prob in enumerate(probs[0]):
        all_probs.append({
            "label": labels[idx],
            "score": prob.item()
        })

    # 결과 정렬
    sorted_probs = sorted(all_probs, key=lambda x: x['score'], reverse=True)

    return sorted_probs


# 사용 예시
if __name__ == "__main__":
    inputs = "너도 나도 투자 확대…대세로 발돋움하는 '사모대출'"
    sorted_probs = predict_sentiment(inputs)
    print(sorted_probs)
