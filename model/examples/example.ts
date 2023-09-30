import {
    AppModel, 
    History, 
    Presentation, 
    SelectionType,
    Slide,
    SlideElement,
    BackGround, 
    TextElement, 
    Img,
    Point, 
    Shape,
    Circle, 
    Rectangle, 
    Triangle, 
} 
from "../model"

const _testPoint1: Point = {
    x: 0,
    y: 0,
}

const _testPoint2: Point = {
    x: 1,
    y: 1,
}

const _testPoint3: Point = {
    x: 2,
    y: 2,
}

const _testTriangle: Triangle = {
    position1: _testPoint1,
    position2: _testPoint2,
    position3: _testPoint3,
}

const _testRectangle: Rectangle = {
    leftTop: _testPoint1,
    rightBottom: _testPoint2,
}

const _testCircle: Circle = {
    radius: 20,
    position: _testPoint2,
}

const _testShape: Shape = {
    color: "white",
    borderColor: "black",
    shapeType: _testTriangle,
}

const _testImg: Img = {
    imgData: "img in base64",
    position: _testPoint1,
    width: 60,
    height: 60,
}

const _testTextElement: TextElement = {
    str: "test value",
    font: "Arial",
    fontSize: 16,
    leftTop: _testPoint1,
    rightBottom: _testPoint2,
}

const _testSlideElement: SlideElement = {
    id: 0,
    layer: 0,
    elementType: _testTextElement,
}

const _testBackground: BackGround = {
    color: "white",
    backImg: "img data",
}

const _testSlide: Slide = {
    ID: 0,
    backGround: _testBackground,
    slideElements: [_testSlideElement],
}

const _presentation: Presentation = {
    title: 'TEST',
    slides: [_testSlide]
}

const _history: History = {
    current: 0,
    presStates: [_presentation]
}

const _selectType: SelectionType = {
    slideIDs: [1, 2, 4],
    elementIDs: [1, 4],
    lastSlideId: 0,
    lastElementId: 1,
}

const App :AppModel = {
    presentation : _presentation,
    selection: _selectType,
    history: _history,
}
