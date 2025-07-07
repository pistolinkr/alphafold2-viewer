const stage = new NGL.Stage("viewport");
const detailsDiv = document.getElementById("residueDetails");
let loadedStructure = null;
let fullStickRepr = null;
let cartoonRepr = null;
let isCartoonVisible = true;
let isStickVisible = false;
let highlightCounter = 1;
let isLoading = false;

// 추가 시각화 옵션 함수들
let isDarkBackground = true;
let labelsVisible = false;
let axesVisible = false;
let boxVisible = false;

// 2차 구조 하이라이트 관련 변수
let helixHighlight = null;
let sheetHighlight = null;
let loopHighlight = null;
let helixVisible = false;
let sheetVisible = false;
let loopVisible = false;

// 표면 표현 관련 변수
let surfaceRepr = null;
let sasRepr = null;
let sasPlusRepr = null;
let surfaceVisible = false;
let sasVisible = false;
let sasPlusVisible = false;

// 측정 도구 관련 변수
let distanceMeasure = null;
let angleMeasure = null;
let dihedralMeasure = null;
let distanceVisible = false;
let angleVisible = false;
let dihedralVisible = false;
let currentMeasureTool = null;

function setLoadingState(isLoading) {
  if (isLoading) {
    detailsDiv.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i> 로딩중...</div>';
  } else {
    detailsDiv.innerHTML = "📌 구조를 클릭하면 정보가 여기에 표시됩니다.";
  }
}

// ... 이하 전체 script 태그의 내용이 들어갑니다 ... 