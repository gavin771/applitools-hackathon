class CanvasChart {
  get chart() {
    return $("#canvas");
  }
  get showDataForNextYearButton() {
    return $("#addDataset");
  }
}

module.exports = new CanvasChart();
